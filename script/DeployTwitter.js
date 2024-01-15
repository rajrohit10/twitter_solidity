// scripts/deploy-script.js

const { ethers } = require("hardhat");

async function main() {
  // Hardhat setup
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Compile the contract
  const MyContract = await ethers.getContractFactory("Profile");
  const myContract = await MyContract.deploy()

//   if (!myContract.address) {
//     console.error("Error: MyContract address is undefined. Aborting deployment of MyContract2.");
//     process.exit(1);
//   }


  console.log("MyContract address:", myContract.target);

  const MyContract2 = await ethers.getContractFactory("Twitter");
  const myContract2 = await MyContract2.deploy(myContract.target);
  console.log("MyContract2 address:", myContract2.target);

//   // Interact with the contract
//   const contractValue = await myContract.getContractValue();
//   console.log("Value from the contract:", contractValue.toString());

//   // Update the contract value
//   await myContract.setContractValue(42);
//   console.log("Updated contract value to 42");

//   // Check the updated value
//   const updatedValue = await myContract.getContractValue();
//   console.log("Updated value from the contract:", updatedValue.toString());
}

// Run the deploy script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
