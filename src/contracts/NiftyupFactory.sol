// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import '@openzeppelin/contracts/proxy/Clones.sol';
import "./NiftyupNFT.sol";


contract NiftyupFactory {
  NiftyupNFT immutable public implementation;

  event CreatedNFT(address indexed creator, address indexed owner, address indexed nft);

  constructor() {
    NiftyupNFT imp = new NiftyupNFT();
    imp.initialize(address(this));
    implementation = imp;
  }

  /**
   * @notice Creates a new NiftyNFT proxy contract instance
   * @param _owner  Owner of the NFT contract
   * @return Address of the created NFT contract
   */
  function create(address _owner) external returns (address) {
    NiftyupNFT clone = NiftyupNFT(Clones.clone(address(implementation)));
    clone.initialize(_owner);

    emit CreatedNFT(msg.sender, _owner, address(clone));

    return address(clone);
  }
}
