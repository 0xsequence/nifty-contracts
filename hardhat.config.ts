import { task } from 'hardhat/config'

import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'
dotenvConfig({ path: resolve(__dirname, './.env') })

import { HardhatUserConfig } from 'hardhat/types'
import { NetworkUserConfig } from 'hardhat/types'

import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'

import 'hardhat-gas-reporter'
import '@nomiclabs/hardhat-etherscan'

const chainIds = {
  hardhat: 31337,
  'polygon-mainnet': 137,
  'polygon-mumbai': 80001
}

const MNEMONIC = process.env.MNEMONIC || ''
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || ''
const INFURA_API_KEY = process.env.INFURA_API_KEY || ''

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(await account.getAddress())
  }
})

function createTestnetConfig(network: keyof typeof chainIds): NetworkUserConfig {
  const url: string = 'https://' + network + '.infura.io/v3/' + INFURA_API_KEY
  return {
    accounts: {
      count: 10,
      initialIndex: 0,
      mnemonic: MNEMONIC,
      path: "m/44'/60'/0'/0"
    },
    chainId: chainIds[network],
    url
  }
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      accounts: {
        mnemonic: MNEMONIC
      },
      chainId: chainIds.hardhat
    },
    polygon: createTestnetConfig('polygon-mainnet'),
    mumbai: createTestnetConfig('polygon-mumbai')
  },
  solidity: '0.7.4',
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5'
  }
}

export default config
