/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IProfile,
  IProfileInterface,
} from "../../../contracts/Twitter.sol/IProfile";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "getProfile",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "displayName",
            type: "string",
          },
          {
            internalType: "string",
            name: "bio",
            type: "string",
          },
        ],
        internalType: "struct IProfile.UserProfile",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IProfile__factory {
  static readonly abi = _abi;
  static createInterface(): IProfileInterface {
    return new Interface(_abi) as IProfileInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IProfile {
    return new Contract(address, _abi, runner) as unknown as IProfile;
  }
}