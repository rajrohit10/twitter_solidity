/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Profile",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Profile__factory>;
    getContractFactory(
      name: "IProfile",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProfile__factory>;
    getContractFactory(
      name: "Twitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Twitter__factory>;

    getContractAt(
      name: "Ownable",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Profile",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Profile>;
    getContractAt(
      name: "IProfile",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.IProfile>;
    getContractAt(
      name: "Twitter",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Twitter>;

    deployContract(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "Profile",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Profile>;
    deployContract(
      name: "IProfile",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IProfile>;
    deployContract(
      name: "Twitter",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Twitter>;

    deployContract(
      name: "Ownable",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Ownable>;
    deployContract(
      name: "Profile",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Profile>;
    deployContract(
      name: "IProfile",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.IProfile>;
    deployContract(
      name: "Twitter",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Twitter>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
