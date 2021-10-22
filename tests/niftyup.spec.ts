import { ethers } from "hardhat"
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers"
import { Contract } from "@ethersproject/contracts"
import { TransactionResponse } from "@ethersproject/abstract-provider"
import { expect } from "chai"

async function nftFromTx(tx: Promise<TransactionResponse> | TransactionResponse) {
  const log = (await (await tx).wait()).logs.find((l) => l.topics.length === 4)
  const addr = ethers.utils.defaultAbiCoder.decode(["address"], log?.topics[3] ?? "")[0]
  const Nft = await ethers.getContractFactory("NiftyupNFT")
  return Nft.attach(addr)
}

describe("NiftyupNFT", function () {
  let factory: Contract
  let signers: SignerWithAddress[]

  before(async () => {
    const Factory = await ethers.getContractFactory("NiftyupFactory")
    factory = await Factory.deploy()
    signers = await ethers.getSigners()
  })

  describe("Create new NFT", () => {
    let nft: Contract

    beforeEach(async () => {
      nft = await nftFromTx(factory.create(signers[0].address, 32))
    })

    it("Must have code", async () => {
      expect(await ethers.provider.getCode(nft.address)).to.not.equal("0x")
    })

    it("Must have an owner", async () => {
      expect(await nft.owner()).to.equal(signers[0].address)
    })

    it("Must fail to re-initialize", async () => {
      const tx = nft.initialize(signers[1].address)
      await expect(tx).to.be.reverted
    })

    describe("ownable", () => {
      it("Must transfer ownership to a different owner", async () => {
        await nft.transferOwnership(signers[1].address)
        expect(await nft.owner()).to.equal(signers[1].address)
      })

      it("Must renonunce ownership", async () => {
        await nft.renounceOwnership()
        expect(await nft.owner()).to.equal(ethers.constants.AddressZero)
      })

      it("Must fail to transfer ownership if not owner", async () => {
        const tx = nft.connect(signers[1]).transferOwnership(signers[1].address)
        await expect(tx).to.be.reverted
      })

      it("Must fail to transfer ownership to address(0)", async () => {
        const tx = nft.transferOwnership(ethers.constants.AddressZero)
        await expect(tx).to.be.reverted
      })
    })

    describe("ERC-165", () => {
      it("Must return false for 0xffffffff", async () => {
        expect(await nft.supportsInterface("0xffffffff")).equal(false)
      })

      it("Must return true for 0x01ffc9a7 (ERC-165)", async () => {
        expect(await nft.supportsInterface("0x01ffc9a7")).equal(true)
      })
    })

    describe("mint", () => {
      it("Must mint single token with ID 0", async () => {
        await nft.mint(signers[1].address, 0, 1, "0x")
        expect(await nft.balanceOf(signers[1].address, 0)).to.equal(1)
      })

      it("Must mint single token", async () => {
        await nft.mint(signers[1].address, 2, 1, "0x")
        expect(await nft.balanceOf(signers[1].address, 2)).to.equal(1)
      })
  
      it("Must mint many tokens", async () => {
        await nft.mint(signers[2].address, 3, 5, ethers.utils.randomBytes(512))
        expect(await nft.balanceOf(signers[2].address, 3)).to.equal(5)
      })
  
      it("Must fail to mint if not owner", async () => {
        const tx = nft.connect(signers[1]).mint(signers[2].address, 2, 3, "0x")
        await expect(tx).to.be.reverted
      })

      it("Must fail to mint if recipient rejects nfts", async () => {
        const tx = nft.mint(nft.address, 2, 3, "0x")
        await expect(tx).to.be.reverted
      })
    })

    describe("batchMint", () => {
      it("Must mint batch tokens", async () => {
        await nft.batchMint(signers[1].address, [2, 3, 4], [1, 2, 3], "0x")
        expect(await nft.balanceOf(signers[1].address, 2)).to.equal(1)
        expect(await nft.balanceOf(signers[1].address, 3)).to.equal(2)
        expect(await nft.balanceOf(signers[1].address, 4)).to.equal(3)
      })
  
      it("Must fail to mint if not owner", async () => {
        const tx = nft.connect(signers[1]).batchMint(signers[1].address, [2, 3, 4], [1, 2, 3], "0x")
        await expect(tx).to.be.reverted
      })

      it("Must fail to mint if recipient rejects nfts", async () => {
        const tx = nft.batchMint(nft.address, [2, 3, 4], [1, 2, 3], "0x")
        await expect(tx).to.be.reverted
      })
    })

    describe("burn", () => {
      it("Must burn tokens", async () => {
        await nft.mint(signers[1].address, 2, 1, "0x")
        await nft.connect(signers[1]).burn(2, 1)
        expect(await nft.balanceOf(signers[1].address, 2)).to.equal(0)
      })

      it("Must burn many tokens", async () => {
        await nft.mint(signers[1].address, 2, 5, "0x")
        await nft.connect(signers[1]).burn(2, 4)
        expect(await nft.balanceOf(signers[1].address, 2)).to.equal(1)
      })

      it("Must fail to burn if burner has no tokens", async () => {
        const tx = nft.connect(signers[1]).burn(2, 1)
        await expect(tx).to.be.reverted
      })

      it("Must fail to burn if burner has not enough tokens", async () => {
        await nft.mint(signers[1].address, 2, 5, "0x")
        const tx = nft.connect(signers[1]).burn(2, 6)
        await expect(tx).to.be.reverted
      })
    })

    describe("batchBurn", () => {
      it("Must burn tokens", async () => {
        await nft.mint(signers[1].address, 0, 1, "0x")
        await nft.mint(signers[1].address, 3, 4, "0x")
        await nft.mint(signers[1].address, 4, 5, "0x")

        await nft.connect(signers[1]).batchBurn([0, 3, 4], [1, 3, 5])

        expect(await nft.balanceOf(signers[1].address, 0)).to.equal(0)
        expect(await nft.balanceOf(signers[1].address, 3)).to.equal(1)
        expect(await nft.balanceOf(signers[1].address, 4)).to.equal(0)
      })

      it("Must fail to burn if burner has no tokens", async () => {
        await nft.mint(signers[1].address, 0, 1, "0x")
        await nft.mint(signers[1].address, 3, 4, "0x")

        const tx = nft.connect(signers[1]).batchBurn([0, 3, 4], [1, 3, 5])

        await expect(tx).to.be.reverted
      })

      it("Must fail to burn if burner has not enough tokens", async () => {
        await nft.mint(signers[1].address, 0, 1, "0x")
        await nft.mint(signers[1].address, 3, 2, "0x")

        const tx = nft.connect(signers[1]).batchBurn([0, 3], [1, 3])

        await expect(tx).to.be.reverted
      })
    })

    describe("metadata URI", () => {
      it("Must initially return empty URI", async () => {
        expect(await nft.uri(1)).to.equal("1.json")
      })

      it("Must return URI with defined prefix", async () => {
        await nft.setBaseMetadataURI("ipfs://my-ipfs-hash-hehe/")
        expect(await nft.uri(1)).to.equal("ipfs://my-ipfs-hash-hehe/1.json")
      })

      it("Must return URI with long prefix", async () => {
        const prefix = `${ethers.utils.hexlify(ethers.utils.randomBytes(2048))}/`
        const id = ethers.BigNumber.from(ethers.utils.randomBytes(32))
        await nft.setBaseMetadataURI(prefix)
        expect(await nft.uri(id)).to.equal(`${prefix}${id.toString()}.json`)
      })

      it("Must change prefix twice", async () => {
        await nft.setBaseMetadataURI("ipfs://my-ipfs-hash-hehe/")
        expect(await nft.uri(0)).to.equal("ipfs://my-ipfs-hash-hehe/0.json")

        await nft.setBaseMetadataURI("https://sequence.app/")
        expect(await nft.uri(0)).to.equal("https://sequence.app/0.json")
      })

      it("Must fail to change prefix if not owner", async () => {
        const tx = nft.connect(signers[1]).setBaseMetadataURI("https://sequence.app/")
        await expect(tx).to.be.reverted
      })
    })
  })
})
