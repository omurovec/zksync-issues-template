import "dotenv/config";
import "hardhat-contract-sizer";
import "hardhat-deploy";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";

module.exports = {
  zksolc: {
    version: "1.2.3",
    compilerSource: "binary",
  },
  defaultNetwork: "zktestnet",
  networks: {
    zktestnet: {
      url: "https://zksync2-testnet.zksync.dev",
      ethNetwork: "goerli", // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
      accounts: { mnemonic: process.env.MNEMONIC },
      zksync: true,
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000,
          },
        },
      },
    ],
  },
  contractSizer: {
    alphaSort: true,
    strict: true,
    only: ["BigContract"],
  },
};
