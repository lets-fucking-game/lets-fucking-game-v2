/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721,
  ERC721Interface,
} from "../../../../../@openzeppelin/contracts/token/ERC721/ERC721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620026f0380380620026f08339818101604052810190620000379190620001f6565b8160009081620000489190620004c6565b5080600190816200005a9190620004c6565b505050620005ad565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620000cc8262000081565b810181811067ffffffffffffffff82111715620000ee57620000ed62000092565b5b80604052505050565b60006200010362000063565b9050620001118282620000c1565b919050565b600067ffffffffffffffff82111562000134576200013362000092565b5b6200013f8262000081565b9050602081019050919050565b60005b838110156200016c5780820151818401526020810190506200014f565b60008484015250505050565b60006200018f620001898462000116565b620000f7565b905082815260208101848484011115620001ae57620001ad6200007c565b5b620001bb8482856200014c565b509392505050565b600082601f830112620001db57620001da62000077565b5b8151620001ed84826020860162000178565b91505092915050565b6000806040838503121562000210576200020f6200006d565b5b600083015167ffffffffffffffff81111562000231576200023062000072565b5b6200023f85828601620001c3565b925050602083015167ffffffffffffffff81111562000263576200026262000072565b5b6200027185828601620001c3565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002ce57607f821691505b602082108103620002e457620002e362000286565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200034e7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200030f565b6200035a86836200030f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003a7620003a16200039b8462000372565b6200037c565b62000372565b9050919050565b6000819050919050565b620003c38362000386565b620003db620003d282620003ae565b8484546200031c565b825550505050565b600090565b620003f2620003e3565b620003ff818484620003b8565b505050565b5b8181101562000427576200041b600082620003e8565b60018101905062000405565b5050565b601f82111562000476576200044081620002ea565b6200044b84620002ff565b810160208510156200045b578190505b620004736200046a85620002ff565b83018262000404565b50505b505050565b600082821c905092915050565b60006200049b600019846008026200047b565b1980831691505092915050565b6000620004b6838362000488565b9150826002028217905092915050565b620004d1826200027b565b67ffffffffffffffff811115620004ed57620004ec62000092565b5b620004f98254620002b5565b620005068282856200042b565b600060209050601f8311600181146200053e576000841562000529578287015190505b620005358582620004a8565b865550620005a5565b601f1984166200054e86620002ea565b60005b82811015620005785784890151825560018201915060208501945060208101905062000551565b8683101562000598578489015162000594601f89168262000488565b8355505b6001600288020188555050505b505050505050565b61213380620005bd6000396000f3fe608060405234801561001057600080fd5b50600436106100af5760003560e01c806301ffc9a7146100b457806306fdde03146100e4578063081812fc14610102578063095ea7b31461013257806323b872dd1461014e57806342842e0e1461016a5780636352211e1461018657806370a08231146101b657806395d89b41146101e6578063a22cb46514610204578063b88d4fde14610220578063c87b56dd1461023c578063e985e9c51461026c575b600080fd5b6100ce60048036038101906100c99190611397565b61029c565b6040516100db91906113df565b60405180910390f35b6100ec61037e565b6040516100f9919061148a565b60405180910390f35b61011c600480360381019061011791906114e2565b610410565b6040516101299190611550565b60405180910390f35b61014c60048036038101906101479190611597565b610456565b005b610168600480360381019061016391906115d7565b61056d565b005b610184600480360381019061017f91906115d7565b6105cd565b005b6101a0600480360381019061019b91906114e2565b6105ed565b6040516101ad9190611550565b60405180910390f35b6101d060048036038101906101cb919061162a565b61069e565b6040516101dd9190611666565b60405180910390f35b6101ee610755565b6040516101fb919061148a565b60405180910390f35b61021e600480360381019061021991906116ad565b6107e7565b005b61023a60048036038101906102359190611822565b6107fd565b005b610256600480360381019061025191906114e2565b61085f565b604051610263919061148a565b60405180910390f35b610286600480360381019061028191906118a5565b6108c7565b60405161029391906113df565b60405180910390f35b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061036757507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061037757506103768261095b565b5b9050919050565b60606000805461038d90611914565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990611914565b80156104065780601f106103db57610100808354040283529160200191610406565b820191906000526020600020905b8154815290600101906020018083116103e957829003601f168201915b5050505050905090565b600061041b826109c5565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610461826105ed565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036104d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c8906119b7565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166104f0610a10565b73ffffffffffffffffffffffffffffffffffffffff16148061051f575061051e81610519610a10565b6108c7565b5b61055e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161055590611a49565b60405180910390fd5b6105688383610a18565b505050565b61057e610578610a10565b82610ad1565b6105bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b490611adb565b60405180910390fd5b6105c8838383610b66565b505050565b6105e8838383604051806020016040528060008152506107fd565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610695576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068c90611b47565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070590611bd9565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461076490611914565b80601f016020809104026020016040519081016040528092919081815260200182805461079090611914565b80156107dd5780601f106107b2576101008083540402835291602001916107dd565b820191906000526020600020905b8154815290600101906020018083116107c057829003601f168201915b5050505050905090565b6107f96107f2610a10565b8383610dcc565b5050565b61080e610808610a10565b83610ad1565b61084d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084490611adb565b60405180910390fd5b61085984848484610f38565b50505050565b606061086a826109c5565b6000610874610f94565b9050600081511161089457604051806020016040528060008152506108bf565b8061089e84610fab565b6040516020016108af929190611c35565b6040516020818303038152906040525b915050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6109ce8161110b565b610a0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a0490611b47565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610a8b836105ed565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610add836105ed565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610b1f5750610b1e81856108c7565b5b80610b5d57508373ffffffffffffffffffffffffffffffffffffffff16610b4584610410565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610b86826105ed565b73ffffffffffffffffffffffffffffffffffffffff1614610bdc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd390611ccb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c4b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c4290611d5d565b60405180910390fd5b610c56838383611177565b610c61600082610a18565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cb19190611dac565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d089190611de0565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4610dc783838361117c565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e3190611e60565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610f2b91906113df565b60405180910390a3505050565b610f43848484610b66565b610f4f84848484611181565b610f8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8590611ef2565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b606060008203610ff2576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611106565b600082905060005b6000821461102457808061100d90611f12565b915050600a8261101d9190611f89565b9150610ffa565b60008167ffffffffffffffff8111156110405761103f6116f7565b5b6040519080825280601f01601f1916602001820160405280156110725781602001600182028036833780820191505090505b5090505b600085146110ff5760018261108b9190611dac565b9150600a8561109a9190611fba565b60306110a69190611de0565b60f81b8183815181106110bc576110bb611feb565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856110f89190611f89565b9450611076565b8093505050505b919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b60006111a28473ffffffffffffffffffffffffffffffffffffffff16611308565b156112fb578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026111cb610a10565b8786866040518563ffffffff1660e01b81526004016111ed949392919061206f565b6020604051808303816000875af192505050801561122957506040513d601f19601f8201168201806040525081019061122691906120d0565b60015b6112ab573d8060008114611259576040519150601f19603f3d011682016040523d82523d6000602084013e61125e565b606091505b5060008151036112a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129a90611ef2565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611300565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6113748161133f565b811461137f57600080fd5b50565b6000813590506113918161136b565b92915050565b6000602082840312156113ad576113ac611335565b5b60006113bb84828501611382565b91505092915050565b60008115159050919050565b6113d9816113c4565b82525050565b60006020820190506113f460008301846113d0565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611434578082015181840152602081019050611419565b60008484015250505050565b6000601f19601f8301169050919050565b600061145c826113fa565b6114668185611405565b9350611476818560208601611416565b61147f81611440565b840191505092915050565b600060208201905081810360008301526114a48184611451565b905092915050565b6000819050919050565b6114bf816114ac565b81146114ca57600080fd5b50565b6000813590506114dc816114b6565b92915050565b6000602082840312156114f8576114f7611335565b5b6000611506848285016114cd565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061153a8261150f565b9050919050565b61154a8161152f565b82525050565b60006020820190506115656000830184611541565b92915050565b6115748161152f565b811461157f57600080fd5b50565b6000813590506115918161156b565b92915050565b600080604083850312156115ae576115ad611335565b5b60006115bc85828601611582565b92505060206115cd858286016114cd565b9150509250929050565b6000806000606084860312156115f0576115ef611335565b5b60006115fe86828701611582565b935050602061160f86828701611582565b9250506040611620868287016114cd565b9150509250925092565b6000602082840312156116405761163f611335565b5b600061164e84828501611582565b91505092915050565b611660816114ac565b82525050565b600060208201905061167b6000830184611657565b92915050565b61168a816113c4565b811461169557600080fd5b50565b6000813590506116a781611681565b92915050565b600080604083850312156116c4576116c3611335565b5b60006116d285828601611582565b92505060206116e385828601611698565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61172f82611440565b810181811067ffffffffffffffff8211171561174e5761174d6116f7565b5b80604052505050565b600061176161132b565b905061176d8282611726565b919050565b600067ffffffffffffffff82111561178d5761178c6116f7565b5b61179682611440565b9050602081019050919050565b82818337600083830152505050565b60006117c56117c084611772565b611757565b9050828152602081018484840111156117e1576117e06116f2565b5b6117ec8482856117a3565b509392505050565b600082601f830112611809576118086116ed565b5b81356118198482602086016117b2565b91505092915050565b6000806000806080858703121561183c5761183b611335565b5b600061184a87828801611582565b945050602061185b87828801611582565b935050604061186c878288016114cd565b925050606085013567ffffffffffffffff81111561188d5761188c61133a565b5b611899878288016117f4565b91505092959194509250565b600080604083850312156118bc576118bb611335565b5b60006118ca85828601611582565b92505060206118db85828601611582565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061192c57607f821691505b60208210810361193f5761193e6118e5565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006119a1602183611405565b91506119ac82611945565b604082019050919050565b600060208201905081810360008301526119d081611994565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000611a33603e83611405565b9150611a3e826119d7565b604082019050919050565b60006020820190508181036000830152611a6281611a26565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000611ac5602e83611405565b9150611ad082611a69565b604082019050919050565b60006020820190508181036000830152611af481611ab8565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611b31601883611405565b9150611b3c82611afb565b602082019050919050565b60006020820190508181036000830152611b6081611b24565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000611bc3602983611405565b9150611bce82611b67565b604082019050919050565b60006020820190508181036000830152611bf281611bb6565b9050919050565b600081905092915050565b6000611c0f826113fa565b611c198185611bf9565b9350611c29818560208601611416565b80840191505092915050565b6000611c418285611c04565b9150611c4d8284611c04565b91508190509392505050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000611cb5602583611405565b9150611cc082611c59565b604082019050919050565b60006020820190508181036000830152611ce481611ca8565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611d47602483611405565b9150611d5282611ceb565b604082019050919050565b60006020820190508181036000830152611d7681611d3a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611db7826114ac565b9150611dc2836114ac565b9250828203905081811115611dda57611dd9611d7d565b5b92915050565b6000611deb826114ac565b9150611df6836114ac565b9250828201905080821115611e0e57611e0d611d7d565b5b92915050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611e4a601983611405565b9150611e5582611e14565b602082019050919050565b60006020820190508181036000830152611e7981611e3d565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611edc603283611405565b9150611ee782611e80565b604082019050919050565b60006020820190508181036000830152611f0b81611ecf565b9050919050565b6000611f1d826114ac565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f4f57611f4e611d7d565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611f94826114ac565b9150611f9f836114ac565b925082611faf57611fae611f5a565b5b828204905092915050565b6000611fc5826114ac565b9150611fd0836114ac565b925082611fe057611fdf611f5a565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b60006120418261201a565b61204b8185612025565b935061205b818560208601611416565b61206481611440565b840191505092915050565b60006080820190506120846000830187611541565b6120916020830186611541565b61209e6040830185611657565b81810360608301526120b08184612036565b905095945050505050565b6000815190506120ca8161136b565b92915050565b6000602082840312156120e6576120e5611335565b5b60006120f4848285016120bb565b9150509291505056fea2646970667358221220366449f56c206cfc921b745f98ff061c0e71a3cf083a218c9e17587e8083d99364736f6c63430008100033";

type ERC721ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721__factory extends ContractFactory {
  constructor(...args: ERC721ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<ERC721>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  override connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721Interface {
    return new utils.Interface(_abi) as ERC721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}
