import { Wallet, utils } from "zksync-ethers";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import dotenv from "dotenv";
dotenv.config();
const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";

if (!PRIVATE_KEY) throw "⛔️ Private key not detected! Add it to the .env file!";
export default async function (hre: HardhatRuntimeEnvironment) {
  console.log(`Running deploy script for the Twitter contract`);

  const wallet = new Wallet(PRIVATE_KEY);

  //Profile Contract
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Profile");
  const deploymentFee = await deployer.estimateDeployFee(artifact, []);
  const parsedFee = ethers.formatEther(deploymentFee);
  console.log(`The deployment is estimated to cost ${parsedFee} ETH`);
  const profileContract = await deployer.deploy(artifact, []);
  console.log("constructor args:" + profileContract.interface.encodeDeploy([]));
  const contractAddress1 = await profileContract.getAddress();
  console.log(`${artifact.contractName} was deployed to ${contractAddress1}`);
  // Twitter Contract
  const artifact2 = await deployer.loadArtifact("Twitter");
  const deploymentFee2 = await deployer.estimateDeployFee(artifact2, [contractAddress1]);
  const parsedFee2 = ethers.formatEther(deploymentFee2);
  console.log(`The deployment is estimated to cost ${parsedFee2} ETH`);
  const twitterContract = await deployer.deploy(artifact2, [contractAddress1]);
  console.log("constructor args:" + twitterContract.interface.encodeDeploy([contractAddress1]));
  const contractAddress2 = await twitterContract.getAddress();
  console.log(`${artifact2.contractName} was deployed to ${contractAddress2}`);









}
