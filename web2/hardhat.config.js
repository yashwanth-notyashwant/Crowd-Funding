require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    defaultNetwork: "sepolia",
    networks: {
      hardhat: {},
      sepolia: {
        url: "https://11155111.rpc.thirdweb.com",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};

// require("@matterlabs/hardhat-zksync-solc");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     version: "0.8.17",
//     defaultNetwork: "sepolia",
//     networks: {
//       hardhat: {},
//       sepolia: {
//         url: "https://11155111.rpc.thirdweb.com",

//         accounts: [`0x${process.env.PRIVATE_KEY}`],
//       },
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

// /** @type import('hardhat/config').HardhatUserConfig */ module.exports = {
//   solidity: {
//     version: "0.8.9",
//     defaultNetwork: "sepolia",
//     networks: {
//       hardhat: {},
//       sepolia: {
//         url: "https://sepolia.rpc.thirdweb.com",
//         accounts: [`0x${process.env.PRIVATE_KEY}`],
//       },
//     },
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
// };

// zksolc: {
//   version: "1.3.9",
//   compilerSource: "binary",
//   settings: {
//     optimizer: {
//       enabled: true,
//     },
//   },
// },
// networks: {
//   zksync_testnet: {
//     url: "https://zksync2-testnet.zksync.dev",
//     ethNetwork: "goerli",
//     chainId: 280,
//     zksync: true,
//   },
//   zksync_mainnet: {
//     url: "https://zksync2-mainnet.zksync.io/",
//     ethNetwork: "mainnet",
//     chainId: 324,
//     zksync: true,
//   },
// },
// paths: {
//   artifacts: "./artifacts-zk",
//   cache: "./cache-zk",
//   sources: "./contracts",
//   tests: "./test",
// },
