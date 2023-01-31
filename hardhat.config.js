/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mainnet: {
    //   url: "https://mainnet.infura.io/v3/f0f2442843654abbb153731d914a6efb",
    //   accounts: [`${process.env.NEXT_APP_PRIVATE_KEY}`]
    // }
  },
  solidity: {
    version: "0.6.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}