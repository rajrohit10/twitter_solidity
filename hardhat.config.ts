import * as dotenv from "dotenv";
// import "@nomicfoundation/hardhat-toolbox";
// import "@nomicfoundation/hardhat-foundry";
// import "@matterlabs/hardhat-zksync-deploy";
// import "@matterlabs/hardhat-zksync-solc";
// import "@matterlabs/hardhat-zksync-verify";

dotenv.config();


export default {
    defaultNetwork: "zksync",
    networks: {
        hardhat: {
        },
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/wJ4MOyRL_MQ9a3jJiFVpBGrfZf9jmVKL`,
            accounts: [`${process.env.PRIVATE_KEY_DEPLOY}`]
        },
        zksync: {
            url: `https://testnet.era.zksync.dev`,
            ethNetwork: "sepolia", // or a Goerli RPC endpoint from Infura/Alchemy/Chainstack etc.
            zksync: true,
            accounts: [`${process.env.PRIVATE_KEY_DEPLOY}`]
        }
    },
    solidity: {
        compilers: [
            {
              version: "0.8.19",
            },
            {
              version: "0.8.20",
              settings: {},
            },
            {
                version: "0.8.0",
                settings: {},
              }
          ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    zksolc: { // need to reference zksolc compiler
        compilerSource: 'binary',
        version: "latest",
        settings: {}
    }
}