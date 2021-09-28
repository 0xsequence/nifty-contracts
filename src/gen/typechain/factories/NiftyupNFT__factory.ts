/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NiftyupNFT, NiftyupNFTInterface } from "../NiftyupNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_approved",
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
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uri",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
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
        internalType: "address[]",
        name: "_owners",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "batchBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getIDBinIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "bin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_binValues",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getValueInBin",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "isOperator",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
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
        name: "_operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_approved",
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
        internalType: "string",
        name: "_newBaseMetadataURI",
        type: "string",
      },
    ],
    name: "setBaseMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
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
    stateMutability: "pure",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006e565b600380546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350610072565b3390565b61309280620000826000396000f3fe608060405234801561001057600080fd5b50600436106101355760003560e01c80638da5cb5b116100b2578063db90e83c11610081578063eaec5f8111610066578063eaec5f8114610aed578063f242432a14610b10578063f2fde38b14610be857610135565b8063db90e83c14610a7c578063e985e9c514610ab257610135565b80638da5cb5b14610822578063a22cb46514610853578063b390c0ab1461088e578063b48ab8b6146108b157610135565b80632eb2c2d611610109578063715018a6116100ee578063715018a6146106db578063731133e9146106e35780637e518ec8146107b257610135565b80632eb2c2d6146103905780634e1273f41461056457610135565b8062fdd58e1461019c57806301ffc9a7146101e75780630e89341c1461023a57806320ec271b146102cc575b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f554e535550504f525445445f4d4554484f440000000000000000000000000000604482015290519081900360640190fd5b6101d5600480360360408110156101b257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610c1b565b60408051918252519081900360200190f35b610226600480360360208110156101fd57600080fd5b50357fffffffff0000000000000000000000000000000000000000000000000000000016610c70565b604080519115158252519081900360200190f35b6102576004803603602081101561025057600080fd5b5035610c83565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610291578181015183820152602001610279565b50505050905090810190601f1680156102be5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61038e600480360360408110156102e257600080fd5b8101906020810181356401000000008111156102fd57600080fd5b82018360208201111561030f57600080fd5b8035906020019184602083028401116401000000008311171561033157600080fd5b91939092909160208101903564010000000081111561034f57600080fd5b82018360208201111561036157600080fd5b8035906020019184602083028401116401000000008311171561038357600080fd5b509092509050610dd6565b005b61038e600480360360a08110156103a657600080fd5b73ffffffffffffffffffffffffffffffffffffffff82358116926020810135909116918101906060810160408201356401000000008111156103e757600080fd5b8201836020820111156103f957600080fd5b8035906020019184602083028401116401000000008311171561041b57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561046b57600080fd5b82018360208201111561047d57600080fd5b8035906020019184602083028401116401000000008311171561049f57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156104ef57600080fd5b82018360208201111561050157600080fd5b8035906020019184600183028401116401000000008311171561052357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e4a945050505050565b61068b6004803603604081101561057a57600080fd5b81019060208101813564010000000081111561059557600080fd5b8201836020820111156105a757600080fd5b803590602001918460208302840111640100000000831117156105c957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561061957600080fd5b82018360208201111561062b57600080fd5b8035906020019184602083028401116401000000008311171561064d57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610f55945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156106c75781810151838201526020016106af565b505050509050019250505060405180910390f35b61038e6111d4565b61038e600480360360808110156106f957600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135916040820135919081019060808101606082013564010000000081111561073d57600080fd5b82018360208201111561074f57600080fd5b8035906020019184600183028401116401000000008311171561077157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506112eb945050505050565b61038e600480360360208110156107c857600080fd5b8101906020810181356401000000008111156107e357600080fd5b8201836020820111156107f557600080fd5b8035906020019184600183028401116401000000008311171561081757600080fd5b50909250905061139f565b61082a61148a565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61038e6004803603604081101561086957600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013515156114a6565b61038e600480360360408110156108a457600080fd5b508035906020013561153f565b61038e600480360360808110156108c757600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691908101906040810160208201356401000000008111156108ff57600080fd5b82018360208201111561091157600080fd5b8035906020019184602083028401116401000000008311171561093357600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561098357600080fd5b82018360208201111561099557600080fd5b803590602001918460208302840111640100000000831117156109b757600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050640100000000811115610a0757600080fd5b820183602082011115610a1957600080fd5b80359060200191846001830284011164010000000083111715610a3b57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061154a945050505050565b610a9960048036036020811015610a9257600080fd5b50356115fe565b6040805192835260208301919091528051918290030190f35b61022660048036036040811015610ac857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661160b565b6101d560048036036040811015610b0357600080fd5b5080359060200135611646565b61038e600480360360a0811015610b2657600080fd5b73ffffffffffffffffffffffffffffffffffffffff823581169260208101359091169160408201359160608101359181019060a081016080820135640100000000811115610b7357600080fd5b820183602082011115610b8557600080fd5b80359060200191846001830284011164010000000083111715610ba757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611659945050505050565b61038e60048036036020811015610bfe57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661175d565b6000806000610c29846115fe565b73ffffffffffffffffffffffffffffffffffffffff87166000908152602081815260408083208584529091529020549193509150610c679082611646565b95945050505050565b6000610c7b826118ff565b90505b919050565b60606002610c908361195c565b6040516020018083805460018160011615610100020316600290048015610cee5780601f10610ccc576101008083540402835291820191610cee565b820191906000526020600020905b815481529060010190602001808311610cda575b5050825160208401908083835b60208310610d3857805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610cfb565b5181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01801990911692169190911790527f2e6a736f6e000000000000000000000000000000000000000000000000000000920191825250604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe50181526005909201905295945050505050565b610e443385858080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808902828101820190935288825290935088925087918291850190849080828437600092019190915250611a8892505050565b50505050565b3373ffffffffffffffffffffffffffffffffffffffff86161480610e735750610e73853361160b565b610ec8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603c815260200180612e7a603c913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416610f34576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612d1f603d913960400191505060405180910390fd5b610f4085858585611c31565b610f4e858585855a8661203e565b5050505050565b81518151606091908114610fb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526039815260200180612ce66039913960400191505060405180910390fd5b600080610fd485600081518110610fc757fe5b60200260200101516115fe565b91509150600080600088600081518110610fea57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000848152602001908152602001600020549050600083905060608567ffffffffffffffff8111801561105e57600080fd5b50604051908082528060200260200182016040528015611088578160200160208202803683370190505b5090506110958385611646565b816000815181106110a257fe5b602090810291909101015260015b868110156111c7576110c7898281518110610fc757fe5b9096509450828614158061113057508981815181106110e257fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff168a600183038151811061110f57fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614155b1561119e576000808b838151811061114457fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008781526020019081526020016000205493508592505b6111a88486611646565b8282815181106111b457fe5b60209081029190910101526001016110b0565b5098975050505050505050565b6111dc6122b5565b73ffffffffffffffffffffffffffffffffffffffff166111fa61148a565b73ffffffffffffffffffffffffffffffffffffffff161461127c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60035460405160009173ffffffffffffffffffffffffffffffffffffffff16907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6112f36122b5565b73ffffffffffffffffffffffffffffffffffffffff1661131161148a565b73ffffffffffffffffffffffffffffffffffffffff161461139357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610e44848484846122b9565b6113a76122b5565b73ffffffffffffffffffffffffffffffffffffffff166113c561148a565b73ffffffffffffffffffffffffffffffffffffffff161461144757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b61148682828080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061232d92505050565b5050565b60035473ffffffffffffffffffffffffffffffffffffffff1690565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815190815290519293927f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31929181900390910190a35050565b611486338383612340565b6115526122b5565b73ffffffffffffffffffffffffffffffffffffffff1661157061148a565b73ffffffffffffffffffffffffffffffffffffffff16146115f257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610e44848484846123aa565b6008810491600790911690565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205460ff1690565b6020810282901c63ffffffff1692915050565b3373ffffffffffffffffffffffffffffffffffffffff861614806116825750611682853361160b565b6116d7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526037815260200180612db56037913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611743576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526038815260200180612f706038913960400191505060405180910390fd5b61174f85858585612634565b610f4e858585855a866126d8565b6117656122b5565b73ffffffffffffffffffffffffffffffffffffffff1661178361148a565b73ffffffffffffffffffffffffffffffffffffffff161461180557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116611871576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612d5c6026913960400191505060405180910390fd5b60035460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f0e89341c00000000000000000000000000000000000000000000000000000000141561195357506001610c7e565b610c7b826128c9565b60608161199d575060408051808201909152600181527f30000000000000000000000000000000000000000000000000000000000000006020820152610c7e565b818060005b82156119b657600101600a830492506119a2565b60608167ffffffffffffffff811180156119cf57600080fd5b506040519080825280601f01601f1916602001820160405280156119fa576020820181803683370190505b5090507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82015b8315611a7e57600a840660300160f81b82828060019003935081518110611a4457fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350611a21565b5095945050505050565b815181518114611ae3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603d815260200180612eb6603d913960400191505060405180910390fd5b60005b81811015611b2957611b2185858381518110611afe57fe5b6020026020010151858481518110611b1257fe5b60200260200101516001612926565b600101611ae6565b50600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611bd7578181015183820152602001611bbf565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015611c16578181015183820152602001611bfe565b5050505090500194505050505060405180910390a450505050565b815181518114611c8c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526042815260200180612dec6042913960600191505060405180910390fd5b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614158015611cc85750600081115b15611e9a57600080611ce085600081518110610fc757fe5b73ffffffffffffffffffffffffffffffffffffffff8916600090815260208181526040808320858452909152812054875193955091935091611d389190849088908590611d2957fe5b602002602001015160016129ad565b73ffffffffffffffffffffffffffffffffffffffff881660009081526020818152604080832087845290915281205487519293509091611d8e9190859089908590611d7f57fe5b602002602001015160006129ad565b90508360015b86811015611e4857611dab898281518110610fc757fe5b9096509450818614611e1a5773ffffffffffffffffffffffffffffffffffffffff8b811660009081526020818152604080832086845280835281842098909855928d16825281815282822094825284815282822095909555878152948452808520549290935291909220549084905b611e2b84868a8481518110611d2957fe5b9350611e3e83868a8481518110611d7f57fe5b9250600101611d94565b505073ffffffffffffffffffffffffffffffffffffffff808a16600090815260208181526040808320888452825280832095909555918a16815280825283812095815294905292209190915550611f37565b60005b81811015611f3557828181518110611eb157fe5b6020026020010151611ed687868481518110611ec957fe5b6020026020010151610c1b565b1015611f2d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526036815260200180612ef36036913960400191505060405180910390fd5b600101611e9d565b505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015611fe3578181015183820152602001611fcb565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561202257818101518382015260200161200a565b5050505090500194505050505060405180910390a45050505050565b61205d8573ffffffffffffffffffffffffffffffffffffffff16612bc0565b156122ad5760008573ffffffffffffffffffffffffffffffffffffffff1663bc197c8184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b838110156121155781810151838201526020016120fd565b50505050905001848103835286818151815260200191508051906020019060200280838360005b8381101561215457818101518382015260200161213c565b50505050905001848103825285818151815260200191508051906020019080838360005b83811015612190578181015183820152602001612178565b50505050905090810190601f1680156121bd5780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600088803b1580156121e257600080fd5b5087f11580156121f6573d6000803e3d6000fd5b50505050506040513d602081101561220d57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167fbc197c8100000000000000000000000000000000000000000000000000000000146122ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604c815260200180612e2e604c913960600191505060405180910390fd5b505b505050505050565b3390565b6122c68484846000612926565b6040805184815260208101849052815173ffffffffffffffffffffffffffffffffffffffff87169260009233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a4610e4460008585855a866126d8565b8051611486906002906020840190612c44565b61234d8383836001612926565b6040805183815260208101839052815160009273ffffffffffffffffffffffffffffffffffffffff87169233927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62929181900390910190a4505050565b8151835114612404576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603e815260200180612fed603e913960400191505060405180910390fd5b8251156125245760008061241e85600081518110610fc757fe5b73ffffffffffffffffffffffffffffffffffffffff88166000908152602081815260408083208584529091528120548751939550919350916124679190849088908590611d7f57fe5b86519091508360015b828110156124eb57612487898281518110610fc757fe5b90965094508186146124d05773ffffffffffffffffffffffffffffffffffffffff8a16600090815260208181526040808320948352939052828120949094558584529220549184905b6124e184868a8481518110611d7f57fe5b9350600101612470565b50505073ffffffffffffffffffffffffffffffffffffffff87166000908152602081815260408083209583529490529290922091909155505b8373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8686604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156125d15781810151838201526020016125b9565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156126105781810151838201526020016125f8565b5050505090500194505050505060405180910390a4610e4460008585855a8661203e565b6126418483836001612926565b61264e8383836000612926565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628585604051808381526020018281526020019250505060405180910390a450505050565b6126f78573ffffffffffffffffffffffffffffffffffffffff16612bc0565b156122ad5760008573ffffffffffffffffffffffffffffffffffffffff1663f23a6e6184338a8989886040518763ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156127b0578181015183820152602001612798565b50505050905090810190601f1680156127dd5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600088803b15801561280057600080fd5b5087f1158015612814573d6000803e3d6000fd5b50505050506040513d602081101561282b57600080fd5b505190507fffffffff0000000000000000000000000000000000000000000000000000000081167ff23a6e6100000000000000000000000000000000000000000000000000000000146122ab576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526047815260200180612f296047913960600191505060405180910390fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082167fd9b67a2600000000000000000000000000000000000000000000000000000000141561291d57506001610c7e565b610c7b82612bfa565b600080612932856115fe565b73ffffffffffffffffffffffffffffffffffffffff88166000908152602081815260408083208584529091529020549193509150612972908286866129ad565b73ffffffffffffffffffffffffffffffffffffffff909616600090815260208181526040808320948352939052919091209490945550505050565b60006020840263ffffffff828460018111156129c557fe5b1415612a935784821b8701925086831015612a2b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061302b6032913960400191505060405180910390fd5b64010000000087831c8216860110612a8e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603281526020018061302b6032913960400191505060405180910390fd5b612bb6565b6001846001811115612aa157fe5b1415612b655784821b8703925086831115612b07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180612d826033913960400191505060405180910390fd5b84818389901c161015612a8e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526033815260200180612d826033913960400191505060405180910390fd5b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526045815260200180612fa86045913960600191505060405180910390fd5b5050949350505050565b6000813f8015801590612bf357507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708114155b9392505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081167f01ffc9a70000000000000000000000000000000000000000000000000000000014919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282612c7a5760008555612cc0565b82601f10612c9357805160ff1916838001178555612cc0565b82800160010185558215612cc0579182015b82811115612cc0578251825591602001919060010190612ca5565b50612ccc929150612cd0565b5090565b5b80821115612ccc5760008155600101612cd156fe455243313135355061636b656442616c616e63652362616c616e63654f6642617463683a20494e56414c49445f41525241595f4c454e475448455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f524543495049454e544f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20554e444552464c4f57455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f63616c6c6f6e45524331313535426174636852656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e6365237361666542617463685472616e7366657246726f6d3a20494e56414c49445f4f50455241544f52455243313135354d696e744275726e5061636b656442616c616e63652362617463684275726e3a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7361666542617463685472616e7366657246726f6d3a20554e444552464c4f57455243313135355061636b656442616c616e6365235f63616c6c6f6e4552433131353552656365697665643a20494e56414c49445f4f4e5f524543454956455f4d455353414745455243313135355061636b656442616c616e636523736166655472616e7366657246726f6d3a20494e56414c49445f524543495049454e54455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a20494e56414c49445f42494e5f57524954455f4f5045524154494f4e455243313135354d696e744275726e5061636b656442616c616e6365235f62617463684d696e743a20494e56414c49445f4152524159535f4c454e475448455243313135355061636b656442616c616e6365235f7669657755706461746542696e56616c75653a204f564552464c4f57a26469706673582212203fd7eadafb4fe616540b8c133d4836bed39ee64f95fb37e16f4bc24a8dfe587164736f6c63430007040033";

export class NiftyupNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NiftyupNFT> {
    return super.deploy(overrides || {}) as Promise<NiftyupNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): NiftyupNFT {
    return super.attach(address) as NiftyupNFT;
  }
  connect(signer: Signer): NiftyupNFT__factory {
    return super.connect(signer) as NiftyupNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NiftyupNFTInterface {
    return new utils.Interface(_abi) as NiftyupNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NiftyupNFT {
    return new Contract(address, _abi, signerOrProvider) as NiftyupNFT;
  }
}