/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GameFactory,
  GameFactoryInterface,
} from "../../../../contracts/games/v1/GameFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_game",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cronUpkeep",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_gameCreationAmount",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_authorizedAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
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
        internalType: "uint256",
        name: "nextId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "gameAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "implementationVersion",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creatorAddress",
        type: "address",
      },
    ],
    name: "GameCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_authorizedAmounts",
        type: "uint256[]",
      },
    ],
    name: "addAuthorizedAmounts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "authorizedAmounts",
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
        internalType: "bytes32",
        name: "_name",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_maxPlayers",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_playTimeRange",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_registrationAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_treasuryFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_creatorFee",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_encodedCron",
        type: "string",
      },
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
        internalType: "struct GameV1Interface.Prize[]",
        name: "_prizes",
        type: "tuple[]",
      },
    ],
    name: "createNewGame",
    outputs: [
      {
        internalType: "address",
        name: "game",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "cronUpkeep",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "deployedGames",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "versionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "address",
        name: "deployedAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "gameCreationAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gameCreationAmount",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "games",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "deployedAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_authorizedAmount",
        type: "uint256",
      },
    ],
    name: "getAuthorizedAmount",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isUsed",
            type: "bool",
          },
        ],
        internalType: "struct GameFactory.AuthorizedAmount",
        name: "gameAuthorisedAmount",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuthorizedAmounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "gameAuthorisedAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeployedGames",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "versionId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "address",
            name: "deployedAddress",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "gameCreationAmount",
            type: "uint256",
          },
        ],
        internalType: "struct GameFactory.Game[]",
        name: "allGames",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestVersionId",
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
    inputs: [],
    name: "nextId",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "pauseAllGamesAndFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "resumeAllGamesAndFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_game",
        type: "address",
      },
    ],
    name: "setNewGameV1",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
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
        name: "_cronUpkeep",
        type: "address",
      },
    ],
    name: "updateCronUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "usedAuthorizedAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isUsed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260006003553480156200001657600080fd5b50604051620026e0380380620026e0833981016040819052620000399162000415565b6000805460ff191690556200004e3362000340565b6001808055815182911115620000c65760405162461bcd60e51b815260206004820152603260248201527f617574686f72697a6564416d6f756e74732073686f756c64206265206772656160448201527174686572206f7220657175616c20746f203160701b60648201526084015b60405180910390fd5b846001600160a01b0381166200011f5760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e65656420746f20626520696e697469616c6973656400006044820152606401620000bd565b846001600160a01b038116620001785760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e65656420746f20626520696e697469616c6973656400006044820152606401620000bd565b600280546001600160a01b038089166001600160a01b031992831617835560048890556040805180820190915260055481528a8216602082019081526006805460018101825560009182529251929095027ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f810192909255517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4090910180549190921692169190911790555b845181101562000332576200025b8582815181106200024757620002476200053f565b60200260200101516200039960201b60201c565b6200031d5760088582815181106200027757620002776200053f565b602090810291909101810151825460018101845560009384529190922001556040805180820190915285518190879084908110620002b957620002b96200053f565b602002602001015181526020016000151581525060096000878481518110620002e657620002e66200053f565b602090810291909101810151825281810192909252604001600020825181559101516001909101805460ff19169115159190911790555b80620003298162000515565b91505062000224565b50505050505050506200056b565b600080546001600160a01b03838116610100818102610100600160a81b0319851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b6000805b600854811015620003ef578260088281548110620003bf57620003bf6200053f565b90600052602060002001541415620003da5750600192915050565b80620003e68162000515565b9150506200039d565b50600092915050565b80516001600160a01b03811681146200041057600080fd5b919050565b600080600080608085870312156200042c57600080fd5b6200043785620003f8565b9350602062000448818701620003f8565b6040870151606088015191955093506001600160401b03808211156200046d57600080fd5b818801915088601f8301126200048257600080fd5b81518181111562000497576200049762000555565b8060051b604051601f19603f83011681018181108582111715620004bf57620004bf62000555565b604052828152858101935084860182860187018d1015620004df57600080fd5b600095505b8386101562000504578051855260019590950194938601938601620004e4565b50989b979a50959850505050505050565b60006000198214156200053857634e487b7160e01b600052601160045260246000fd5b5060010190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612165806200057b6000396000f3fe60806040526004361061019a5760003560e01c80638456cb59116100e1578063ac5f50c81161008a578063ea8ac8cf11610064578063ea8ac8cf14610564578063eae81c371461057a578063f2fde38b1461059c578063fdd3d43d146105bc576101da565b8063ac5f50c8146104a7578063c1e6a4ce14610522578063d59d2efa14610544576101da565b8063953aef90116100bb578063953aef90146104545780639d73613d14610467578063a649beb214610487576101da565b80638456cb59146103fc57806388244f15146104115780638da5cb5b14610431576101da565b80634acb33a011610143578063657908d11161011d578063657908d11461037d57806367f98152146103d1578063715018a6146103e7576101da565b80634acb33a0146102fe5780635c975abb1461033657806361b8ce8c14610359576101da565b80633b7b617a116101745780633b7b617a146102885780633f4ba83a1461029d57806348308bd7146102b2576101da565b806308a80ff51461020f578063117a5b901461023157806324600fc314610273576101da565b366101da57604080513381523460208201527f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587491015b60405180910390a1005b604080513381523460208201527f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f8852587491016101d0565b34801561021b57600080fd5b5061022f61022a366004611bd2565b6105d1565b005b34801561023d57600080fd5b5061025161024c366004611d7d565b610699565b604080519283526001600160a01b039091166020830152015b60405180910390f35b34801561027f57600080fd5b5061022f6106d0565b34801561029457600080fd5b5061022f61074c565b3480156102a957600080fd5b5061022f61089a565b3480156102be57600080fd5b506102e96102cd366004611d7d565b6009602052600090815260409020805460019091015460ff1682565b6040805192835290151560208301520161026a565b34801561030a57600080fd5b5060025461031e906001600160a01b031681565b6040516001600160a01b03909116815260200161026a565b34801561034257600080fd5b5060005460ff16604051901515815260200161026a565b34801561036557600080fd5b5061036f60035481565b60405190815260200161026a565b34801561038957600080fd5b5061039d610398366004611d7d565b610909565b6040805195865260208601949094526001600160a01b0392831693850193909352166060830152608082015260a00161026a565b3480156103dd57600080fd5b5061036f60055481565b3480156103f357600080fd5b5061022f610957565b34801561040857600080fd5b5061022f610969565b34801561041d57600080fd5b5061022f61042c366004611bf4565b6109d8565b34801561043d57600080fd5b5060005461010090046001600160a01b031661031e565b61031e610462366004611c8c565b610b2f565b34801561047357600080fd5b5061022f610482366004611bd2565b61107f565b34801561049357600080fd5b5061036f6104a2366004611d7d565b6112d5565b3480156104b357600080fd5b506105056104c2366004611d7d565b6040805180820190915260008082526020820152506000908152600960209081526040918290208251808401909352805483526001015460ff1615159082015290565b60408051825181526020928301511515928101929092520161026a565b34801561052e57600080fd5b506105376112f6565b60405161026a9190611ecd565b34801561055057600080fd5b5061022f61055f366004611bd2565b61134e565b34801561057057600080fd5b5061036f60045481565b34801561058657600080fd5b5061058f61145c565b60405161026a9190611e51565b3480156105a857600080fd5b5061022f6105b7366004611bd2565b6114f5565b3480156105c857600080fd5b5061022f61156b565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146106355760405162461bcd60e51b8152602060048201526017602482015260008051602061211083398151915260448201526064015b60405180910390fd5b806001600160a01b03811661068c5760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e65656420746f20626520696e697469616c697365640000604482015260640161062c565b610695826114f5565b5050565b600681815481106106a957600080fd5b6000918252602090912060029091020180546001909101549091506001600160a01b031682565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b03161461072f5760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b60005461074a9061010090046001600160a01b0316476116b6565b565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146107ab5760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b6107b36117f2565b6107bb611845565b60005b600754811015610897576000600782815481106107dd576107dd6120e3565b600091825260208083206040805160a08101825260059094029091018054845260018101549284019290925260028201546001600160a01b03908116848301526003830154166060840181905260049283015460808501528151638456cb5960e01b8152915193955093638456cb599382840193919290919082900301818387803b15801561086b57600080fd5b505af115801561087f573d6000803e3d6000fd5b5050505050808061088f906120b2565b9150506107be565b50565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146108f95760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b61090161189f565b61074a6118f1565b6007818154811061091957600080fd5b60009182526020909120600590910201805460018201546002830154600384015460049094015492945090926001600160a01b039182169291169085565b61095f61192a565b61074a600061198a565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146109c85760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b6109d06117f2565b61074a611845565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b031614610a375760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b60005b815181101561069557610a65828281518110610a5857610a586120e3565b60200260200101516119f0565b610b1d576008828281518110610a7d57610a7d6120e3565b602090810291909101810151825460018101845560009384529190922001556040805180820190915282518190849084908110610abc57610abc6120e3565b602002602001015181526020016000151581525060096000848481518110610ae657610ae66120e3565b602090810291909101810151825281810192909252604001600020825181559101516001909101805460ff19169115159190911790555b80610b27816120b2565b915050610a3a565b6000610b396117f2565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b03161480610b6b57506004543410155b610bc35760405162461bcd60e51b8152602060048201526024808201527f4f6e6c792067616d65206372656174696f6e20616d6f756e7420697320616c6c6044820152631bddd95960e21b606482015260840161062c565b60008681526009602052604090205486908114610c225760405162461bcd60e51b815260206004820181905260248201527f726567697374726174696f6e416d6f7574206973206e6f7420616c6c6f776564604482015260640161062c565b86801580610c42575060008181526009602052604090206001015460ff16155b610c985760405162461bcd60e51b815260206004820152602160248201527f726567697374726174696f6e416d6f757420697320616c7265616479207573656044820152601960fa1b606482015260840161062c565b6000600660055481548110610caf57610caf6120e3565b600091825260208220600160029092020101546001600160a01b03169150610cd682611a47565b60008b81526009602090815260408083206001908101805460ff191682179055815160a081018352600354815260058054948201948552338285019081526001600160a01b03808916606085019081526004805460808701908152600780549889018155909a529451959093027fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68881019590955595517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c689850155517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68a840180549187166001600160a01b031992831617905590517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68b840180549187169190921617905593517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68c9091015560025490516321fb4c3560e01b815293945016916321fb4c3591610e55918591016001600160a01b0391909116815260200190565b600060405180830381600087803b158015610e6f57600080fd5b505af1158015610e83573d6000803e3d6000fd5b50505050610f10604051806101a0016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b03168152602001600080191681526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160608152602001606081525090565b33602082015260005461010090046001600160a01b03166001600160a01b039081168252600254166040820152606081018e9052600554608082015260035460a082015260c081018c905260e081018d905261010081018b905261012081018a9052610140810189905261016081018890526101808101879052600454600090610f9a903461209b565b9050826001600160a01b0316639647487f82846040518363ffffffff1660e01b8152600401610fc99190611f11565b6000604051808303818588803b158015610fe257600080fd5b505af1158015610ff6573d6000803e3d6000fd5b5050600354600554604080519283526001600160a01b03891660208401528201523360608201527fc94e0e39f6c88eefe2da1019ef63fcd57321af4dde03fbe73dadb0275cb061529350608001915061104c9050565b60405180910390a16001600360008282546110679190612083565b90915550929f9e505050505050505050505050505050565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146110de5760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b806001600160a01b0381166111355760405162461bcd60e51b815260206004820152601e60248201527f61646472657373206e65656420746f20626520696e697469616c697365640000604482015260640161062c565b600280546001600160a01b0319166001600160a01b0384169081179091556040519081527fab6a2d4263b3d387f97d78a01e517495e0f6cd26f6d0ecbb9899d6c3922a4f769060200160405180910390a160005b6007548110156112d0576000600782815481106111a8576111a86120e3565b60009182526020918290206040805160a081018252600593909302909101805483526001810154938301939093526002808401546001600160a01b039081168484015260038501548116606085018190526004958601546080860152915492516321fb4c3560e01b81529485019190915291935016906321fb4c3590602401600060405180830381600087803b15801561124157600080fd5b505af1158015611255573d6000803e3d6000fd5b50505050606081015160025460405163a0dd526f60e01b81526001600160a01b03918216600482015291169063a0dd526f90602401600060405180830381600087803b1580156112a457600080fd5b505af11580156112b8573d6000803e3d6000fd5b505050505080806112c8906120b2565b915050611189565b505050565b600881815481106112e557600080fd5b600091825260209091200154905081565b6060600880548060200260200160405190810160405280929190818152602001828054801561134457602002820191906000526020600020905b815481526020019060010190808311611330575b5050505050905090565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146113ad5760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b6001600560008282546113c09190612083565b90915550506040805180820190915260055481526001600160a01b03918216602082019081526006805460018101825560009190915291517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f600290930292830155517ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d4090910180546001600160a01b03191691909216179055565b60606007805480602002602001604051908101604052809291908181526020016000905b828210156114ec5760008481526020908190206040805160a08101825260058602909201805483526001808201548486015260028201546001600160a01b0390811693850193909352600382015490921660608401526004015460808301529083529092019101611480565b50505050905090565b6114fd61192a565b6001600160a01b0381166115625760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161062c565b6108978161198a565b60005461010090046001600160a01b03166001600160a01b0316336001600160a01b0316146115ca5760405162461bcd60e51b81526020600482015260176024820152600080516020612110833981519152604482015260640161062c565b6115d261189f565b6115da6118f1565b60005b600754811015610897576000600782815481106115fc576115fc6120e3565b600091825260208083206040805160a08101825260059094029091018054845260018101549284019290925260028201546001600160a01b03908116848301526003830154166060840181905260049283015460808501528151631fa5d41d60e11b8152915193955093633f4ba83a9382840193919290919082900301818387803b15801561168a57600080fd5b505af115801561169e573d6000803e3d6000fd5b505050505080806116ae906120b2565b9150506115dd565b47818110156117075760405162461bcd60e51b815260206004820152601e60248201527f4e6f7420656e6f75676820696e20636f6e74726163742062616c616e63650000604482015260640161062c565b6000836001600160a01b03168360405160006040518083038185875af1925050503d8060008114611754576040519150601f19603f3d011682016040523d82523d6000602084013e611759565b606091505b50509050806117ec57604080516001600160a01b0386168152602081018590527f3506b32cea6b36a739c1c2a71a9e1b3d6222104389c07219059fa6eb6d2e0563910160405180910390a160405162461bcd60e51b815260206004820152601060248201527f5472616e73666572206661696c65642e00000000000000000000000000000000604482015260640161062c565b50505050565b60005460ff161561074a5760405162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015260640161062c565b61184d6117f2565b6000805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586118823390565b6040516001600160a01b03909116815260200160405180910390a1565b60005460ff1661074a5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f7420706175736564000000000000000000000000604482015260640161062c565b6118f961189f565b6000805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa33611882565b6000546001600160a01b0361010090910416331461074a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161062c565b600080546001600160a01b0383811661010081810274ffffffffffffffffffffffffffffffffffffffff0019851617855560405193049190911692909183917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35050565b6000805b600854811015611a3e578260088281548110611a1257611a126120e3565b90600052602060002001541415611a2c5750600192915050565b80611a36816120b2565b9150506119f4565b50600092915050565b60006040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528260601b60148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f09150506001600160a01b038116611afd5760405162461bcd60e51b815260206004820152601660248201527f455243313136373a20637265617465206661696c656400000000000000000000604482015260640161062c565b919050565b80356001600160a01b0381168114611afd57600080fd5b600082601f830112611b2a57600080fd5b81356020611b3f611b3a8361205f565b61202e565b8281528181019085830160a080860288018501891015611b5e57600080fd5b6000805b87811015611bc35782848c031215611b78578182fd5b611b80612005565b843581528785013588820152604080860135908201526060611ba3818701611b02565b908201526080858101359082015286529486019492820192600101611b62565b50929998505050505050505050565b600060208284031215611be457600080fd5b611bed82611b02565b9392505050565b60006020808385031215611c0757600080fd5b823567ffffffffffffffff811115611c1e57600080fd5b8301601f81018513611c2f57600080fd5b8035611c3d611b3a8261205f565b80828252848201915084840188868560051b8701011115611c5d57600080fd5b600094505b83851015611c80578035835260019490940193918501918501611c62565b50979650505050505050565b600080600080600080600080610100898b031215611ca957600080fd5b883597506020808a0135975060408a0135965060608a0135955060808a0135945060a08a0135935060c08a013567ffffffffffffffff80821115611cec57600080fd5b818c0191508c601f830112611d0057600080fd5b813581811115611d1257611d126120f9565b611d24601f8201601f1916850161202e565b8181528e85838601011115611d3857600080fd5b818585018683013760009181019094015291935060e08b01359180831115611d5f57600080fd5b5050611d6d8b828c01611b19565b9150509295985092959890939650565b600060208284031215611d8f57600080fd5b5035919050565b600081518084526020808501945080840160005b83811015611df9578151805188528381015184890152604080820151908901526060808201516001600160a01b0316908901526080908101519088015260a09096019590820190600101611daa565b509495945050505050565b6000815180845260005b81811015611e2a57602081850181015186830182015201611e0e565b81811115611e3c576000602083870101525b50601f01601f19169290920160200192915050565b602080825282518282018190526000919060409081850190868401855b82811015611ec0578151805185528681015187860152858101516001600160a01b0390811687870152606080830151909116908601526080908101519085015260a09093019290850190600101611e6e565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015611f0557835183529284019291840191600101611ee9565b50909695505050505050565b60208152611f2b6020820183516001600160a01b03169052565b60006020830151611f4760408401826001600160a01b03169052565b5060408301516001600160a01b03811660608401525060608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e08301516101008181850152808501519150506101208181850152808501519150506101408181850152808501519150506101608181850152808501519150506101a06101808181860152611fdf6101c0860184611e04565b90860151858203601f190183870152909250611ffb8382611d96565b9695505050505050565b60405160a0810167ffffffffffffffff81118282101715612028576120286120f9565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715612057576120576120f9565b604052919050565b600067ffffffffffffffff821115612079576120796120f9565b5060051b60200190565b60008219821115612096576120966120cd565b500190565b6000828210156120ad576120ad6120cd565b500390565b60006000198214156120c6576120c66120cd565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fdfe43616c6c6572206973206e6f74207468652061646d696e000000000000000000a26469706673582212205a91b724814c3954c8180e005241d95b2701d79056f6b3bf6771d0bc1f5f419d64736f6c63430008060033";

type GameFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GameFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GameFactory__factory extends ContractFactory {
  constructor(...args: GameFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _game: PromiseOrValue<string>,
    _cronUpkeep: PromiseOrValue<string>,
    _gameCreationAmount: PromiseOrValue<BigNumberish>,
    _authorizedAmounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GameFactory> {
    return super.deploy(
      _game,
      _cronUpkeep,
      _gameCreationAmount,
      _authorizedAmounts,
      overrides || {}
    ) as Promise<GameFactory>;
  }
  override getDeployTransaction(
    _game: PromiseOrValue<string>,
    _cronUpkeep: PromiseOrValue<string>,
    _gameCreationAmount: PromiseOrValue<BigNumberish>,
    _authorizedAmounts: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _game,
      _cronUpkeep,
      _gameCreationAmount,
      _authorizedAmounts,
      overrides || {}
    );
  }
  override attach(address: string): GameFactory {
    return super.attach(address) as GameFactory;
  }
  override connect(signer: Signer): GameFactory__factory {
    return super.connect(signer) as GameFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GameFactoryInterface {
    return new utils.Interface(_abi) as GameFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GameFactory {
    return new Contract(address, _abi, signerOrProvider) as GameFactory;
  }
}