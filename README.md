# Solidity Twitter and Profiles Contracts

## Overview

This repository hosts two fundamental Solidity contracts, creating a straightforward emulation of Twitter. The project consists of distinct contracts for Twitter-like functionality and user profiles.

## Deployment Process

### Sepolia Deployment

#### Using Forge

To deploy on Sepolia using Forge, execute the following command:

```bash
forge script script/DeployTwitter.s.sol:DeployTwitter --rpc-url $(SEPOLIA_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(ETHERSCAN_API_KEY) -vvvvv
```

Replace `$(SEPOLIA_RPC_URL)`, `$(PRIVATE_KEY)`, and `$(ETHERSCAN_API_KEY)` with your specific values.

#### Using Hardhat

To deploy on Sepolia using Hardhat, run the following command:

```bash
npx hardhat run script/DeployTwitter.js --network sepolia
```

### zkSync Deployment

#### Using Hardhat

To deploy on zkSync using Hardhat, follow these steps:

1. First, create an `artifacts-zk` folder using:

```bash
npx hardhat run deploy/deploy.ts --network zksync

yarn hard compile 
```

2. Then, deploy using:

```bash
yarn hardhat deploy-zksync --script deploy.ts
```

## Contract Information

### Twitter Contract

The Twitter contract offers Twitter-like functionality, enabling users to create posts and interact with each other.

### Profiles Contract

The Profiles contract manages user profiles, providing a straightforward system for users to set and update their profiles.

## Development

To set up the development environment, follow these steps:

1. Install dependencies:

```bash
yarn install
```

2. Compile contracts:

```bash
npx hardhat compile
```

3. Test contracts:

```bash
npx hardhat test
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
