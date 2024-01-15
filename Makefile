-include .env

build:; forge build

deploy-sepolia:
	forge script script/DeployTwitter.s.sol:DeployTwitter --rpc-url $(SEPOLIA_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(ETHERSCAN_API_KEY) -vvvvv

deploy-hardhat-sepolia:
 	npx hardhat run script/DeployTwitter.js --network sepolia  	

create-artifacts-zksync:
	npx hardhat run deploy/deploy.ts --network zksync 
deploy--hardhat-zksync:
	yarn hardhat deploy-zksync --script deploy.ts
