/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IChild,
  IChildInterface,
} from "../../../contracts/interfaces/IChild";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountClaimed",
        type: "uint256",
      },
    ],
    name: "ChildPrizeClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "CreatorFeeClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldCreator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newCreator",
        type: "address",
      },
    ],
    name: "CreatorOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "cronUpkeep",
        type: "address",
      },
    ],
    name: "CronUpkeepUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "jobId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "encodedCron",
        type: "string",
      },
    ],
    name: "EncodedCronUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldFactory",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newFactory",
        type: "address",
      },
    ],
    name: "FactoryOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FailedTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountClaimed",
        type: "uint256",
      },
    ],
    name: "GamePrizeClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "position",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "standard",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "PrizeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TreasuryFeeClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TreasuryFeeClaimedByFactory",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "position",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "standard",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IChild.Prize[]",
        name: "_prizes",
        type: "tuple[]",
      },
    ],
    name: "addPrizes",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "claimPrize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claimTreasuryFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "getPrizes",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "position",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "standard",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IChild.Prize[]",
        name: "childPrizes",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_epoch",
        type: "uint256",
      },
    ],
    name: "getWinners",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "epoch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "playerAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amountWon",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "position",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "standard",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "prizeClaimed",
            type: "bool",
          },
        ],
        internalType: "struct IChild.Winner[]",
        name: "childWinners",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_treasuryFee",
        type: "uint256",
      },
    ],
    name: "setTreasuryFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adminAddress",
        type: "address",
      },
    ],
    name: "transferAdminOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
    ],
    name: "transferFactoryOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IChild__factory {
  static readonly abi = _abi;
  static createInterface(): IChildInterface {
    return new utils.Interface(_abi) as IChildInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IChild {
    return new Contract(address, _abi, signerOrProvider) as IChild;
  }
}
