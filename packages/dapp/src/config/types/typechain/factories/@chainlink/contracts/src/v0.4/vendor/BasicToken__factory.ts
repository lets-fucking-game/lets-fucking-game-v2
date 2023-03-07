/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../common";
import type {
  BasicToken,
  BasicTokenInterface,
} from "../../../../../../@chainlink/contracts/src/v0.4/vendor/BasicToken";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "balance",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_to",
        type: "address",
      },
      {
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101e4806100206000396000f30060806040526004361061003d5763ffffffff60e060020a60003504166318160ddd811461004257806370a0823114610069578063a9059cbb1461008a575b600080fd5b34801561004e57600080fd5b506100576100c2565b60408051918252519081900360200190f35b34801561007557600080fd5b50610057600160a060020a03600435166100c8565b34801561009657600080fd5b506100ae600160a060020a03600435166024356100e3565b604080519115158252519081900360200190f35b60005481565b600160a060020a031660009081526001602052604090205490565b33600090815260016020526040812054610103908363ffffffff61019316565b3360009081526001602052604080822092909255600160a060020a03851681522054610135908363ffffffff6101a516565b600160a060020a0384166000818152600160209081526040918290209390935580518581529051919233927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a350600192915050565b60008282111561019f57fe5b50900390565b818101828110156101b257fe5b929150505600a165627a7a7230582008765b2c2f4481cc5db71718cb129a3ad681f7ec4c0a267a8481500bf2b687ad0029";

type BasicTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicToken__factory extends ContractFactory {
  constructor(...args: BasicTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BasicToken> {
    return super.deploy(overrides || {}) as Promise<BasicToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BasicToken {
    return super.attach(address) as BasicToken;
  }
  override connect(signer: Signer): BasicToken__factory {
    return super.connect(signer) as BasicToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicTokenInterface {
    return new utils.Interface(_abi) as BasicTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicToken {
    return new Contract(address, _abi, signerOrProvider) as BasicToken;
  }
}
