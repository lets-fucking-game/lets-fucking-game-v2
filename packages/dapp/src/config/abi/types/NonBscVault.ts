/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface NonBscVaultInterface extends utils.Interface {
  functions: {
    "BSC_CHAIN_ID()": FunctionFragment;
    "CROSS_FARMING_RECEIVER()": FunctionFragment;
    "CROSS_FARMING_SENDER()": FunctionFragment;
    "ackEmergencyWithdraw(address,uint256,uint64)": FunctionFragment;
    "ackWithdraw(address,uint256,uint256,uint64)": FunctionFragment;
    "add(address,uint256)": FunctionFragment;
    "addWhiteListPool(uint256)": FunctionFragment;
    "calcFee(bytes)": FunctionFragment;
    "deposit(uint256,uint256)": FunctionFragment;
    "deposits(address,uint256,uint64)": FunctionFragment;
    "emergencyWithdraw(uint256)": FunctionFragment;
    "encodeMessage(address,uint256,uint256,uint8,uint64)": FunctionFragment;
    "exists(address)": FunctionFragment;
    "fallbackDeposit(address,uint256,uint256,uint64)": FunctionFragment;
    "fallbackWithdraw(address,uint256,uint256,uint64)": FunctionFragment;
    "messageBus()": FunctionFragment;
    "operator()": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "poolInfo(uint256)": FunctionFragment;
    "poolLength()": FunctionFragment;
    "poolMapping(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setOperator(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "usedNonce(address,uint256,uint64)": FunctionFragment;
    "userInfo(uint256,address)": FunctionFragment;
    "whitelistPool(uint256)": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "BSC_CHAIN_ID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CROSS_FARMING_RECEIVER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CROSS_FARMING_SENDER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ackEmergencyWithdraw",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ackWithdraw",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addWhiteListPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "calcFee", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposits",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeMessage",
    values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "exists", values: [string]): string;
  encodeFunctionData(
    functionFragment: "fallbackDeposit",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fallbackWithdraw",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "messageBus",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "operator", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "poolMapping",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "setOperator", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "usedNonce",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userInfo",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BSC_CHAIN_ID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CROSS_FARMING_RECEIVER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CROSS_FARMING_SENDER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ackEmergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ackWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addWhiteListPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "calcFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exists", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fallbackDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fallbackWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "messageBus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "operator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOperator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "usedNonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "whitelistPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AckEmergencyWithdraw(address,uint256,uint256,uint64)": EventFragment;
    "AckWithdraw(address,uint256,uint256,uint64)": EventFragment;
    "AddedPool(address,uint256)": EventFragment;
    "AddedWhiteListPool(uint256)": EventFragment;
    "Deposit(address,uint256,uint256,uint64)": EventFragment;
    "EmergencyWithdraw(address,uint256,uint256,uint64)": EventFragment;
    "FallbackDeposit(address,uint256,uint256,uint64)": EventFragment;
    "FallbackWithdraw(address,uint256,uint256,uint64)": EventFragment;
    "OperatorUpdated(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Pause()": EventFragment;
    "Paused(address)": EventFragment;
    "Unpause()": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,uint256,uint256,uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AckEmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AckWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddedPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddedWhiteListPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EmergencyWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FallbackWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OperatorUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pause"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpause"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AckEmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type AckEmergencyWithdrawEventFilter =
  TypedEventFilter<AckEmergencyWithdrawEvent>;

export type AckWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type AckWithdrawEventFilter = TypedEventFilter<AckWithdrawEvent>;

export type AddedPoolEvent = TypedEvent<
  [string, BigNumber],
  { lpToken: string; mockPoolId: BigNumber }
>;

export type AddedPoolEventFilter = TypedEventFilter<AddedPoolEvent>;

export type AddedWhiteListPoolEvent = TypedEvent<
  [BigNumber],
  { pid: BigNumber }
>;

export type AddedWhiteListPoolEventFilter =
  TypedEventFilter<AddedWhiteListPoolEvent>;

export type DepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type EmergencyWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type EmergencyWithdrawEventFilter =
  TypedEventFilter<EmergencyWithdrawEvent>;

export type FallbackDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type FallbackDepositEventFilter = TypedEventFilter<FallbackDepositEvent>;

export type FallbackWithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type FallbackWithdrawEventFilter =
  TypedEventFilter<FallbackWithdrawEvent>;

export type OperatorUpdatedEvent = TypedEvent<
  [string, string],
  { newOperator: string; oldOperator: string }
>;

export type OperatorUpdatedEventFilter = TypedEventFilter<OperatorUpdatedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PauseEvent = TypedEvent<[], {}>;

export type PauseEventFilter = TypedEventFilter<PauseEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpauseEvent = TypedEvent<[], {}>;

export type UnpauseEventFilter = TypedEventFilter<UnpauseEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type WithdrawEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  { sender: string; pid: BigNumber; amount: BigNumber; nonce: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface NonBscVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NonBscVaultInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<[BigNumber]>;

    CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<[string]>;

    CROSS_FARMING_SENDER(overrides?: CallOverrides): Promise<[string]>;

    ackEmergencyWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    ackWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    add(
      _lpToken: string,
      _mcv2PoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addWhiteListPool(
      _mcv2Pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calcFee(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    encodeMessage(
      _account: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _msgType: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    exists(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    fallbackDeposit(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fallbackWithdraw(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    messageBus(overrides?: CallOverrides): Promise<[string]>;

    operator(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        lpToken: string;
        mcv2PoolId: BigNumber;
        totalAmount: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    poolMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    usedNonce(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; lastActionTime: BigNumber }
    >;

    whitelistPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

  CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<string>;

  CROSS_FARMING_SENDER(overrides?: CallOverrides): Promise<string>;

  ackEmergencyWithdraw(
    _user: string,
    _mcv2pid: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  ackWithdraw(
    _user: string,
    _mcv2pid: BigNumberish,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  add(
    _lpToken: string,
    _mcv2PoolId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addWhiteListPool(
    _mcv2Pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calcFee(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposits(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  emergencyWithdraw(
    _pid: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  encodeMessage(
    _account: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    _msgType: BigNumberish,
    _nonce: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  exists(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  fallbackDeposit(
    _user: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fallbackWithdraw(
    _user: string,
    _pid: BigNumberish,
    _amount: BigNumberish,
    _nonce: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  messageBus(overrides?: CallOverrides): Promise<string>;

  operator(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  poolInfo(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      lpToken: string;
      mcv2PoolId: BigNumber;
      totalAmount: BigNumber;
    }
  >;

  poolLength(overrides?: CallOverrides): Promise<BigNumber>;

  poolMapping(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOperator(
    _operator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  usedNonce(
    arg0: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  userInfo(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; lastActionTime: BigNumber }
  >;

  whitelistPool(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  withdraw(
    _pid: BigNumberish,
    _amount: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<string>;

    CROSS_FARMING_SENDER(overrides?: CallOverrides): Promise<string>;

    ackEmergencyWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    ackWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    add(
      _lpToken: string,
      _mcv2PoolId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addWhiteListPool(
      _mcv2Pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    calcFee(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    encodeMessage(
      _account: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _msgType: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    exists(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    fallbackDeposit(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fallbackWithdraw(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    messageBus(overrides?: CallOverrides): Promise<string>;

    operator(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        lpToken: string;
        mcv2PoolId: BigNumber;
        totalAmount: BigNumber;
      }
    >;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    poolMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setOperator(_operator: string, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    usedNonce(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; lastActionTime: BigNumber }
    >;

    whitelistPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AckEmergencyWithdraw(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): AckEmergencyWithdrawEventFilter;
    AckEmergencyWithdraw(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): AckEmergencyWithdrawEventFilter;

    "AckWithdraw(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): AckWithdrawEventFilter;
    AckWithdraw(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): AckWithdrawEventFilter;

    "AddedPool(address,uint256)"(
      lpToken?: string | null,
      mockPoolId?: null
    ): AddedPoolEventFilter;
    AddedPool(lpToken?: string | null, mockPoolId?: null): AddedPoolEventFilter;

    "AddedWhiteListPool(uint256)"(pid?: null): AddedWhiteListPoolEventFilter;
    AddedWhiteListPool(pid?: null): AddedWhiteListPoolEventFilter;

    "Deposit(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): DepositEventFilter;
    Deposit(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): DepositEventFilter;

    "EmergencyWithdraw(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): EmergencyWithdrawEventFilter;
    EmergencyWithdraw(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): EmergencyWithdrawEventFilter;

    "FallbackDeposit(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): FallbackDepositEventFilter;
    FallbackDeposit(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): FallbackDepositEventFilter;

    "FallbackWithdraw(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): FallbackWithdrawEventFilter;
    FallbackWithdraw(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): FallbackWithdrawEventFilter;

    "OperatorUpdated(address,address)"(
      newOperator?: string | null,
      oldOperator?: string | null
    ): OperatorUpdatedEventFilter;
    OperatorUpdated(
      newOperator?: string | null,
      oldOperator?: string | null
    ): OperatorUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Pause()"(): PauseEventFilter;
    Pause(): PauseEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpause()"(): UnpauseEventFilter;
    Unpause(): UnpauseEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(address,uint256,uint256,uint64)"(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): WithdrawEventFilter;
    Withdraw(
      sender?: string | null,
      pid?: null,
      amount?: null,
      nonce?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_RECEIVER(overrides?: CallOverrides): Promise<BigNumber>;

    CROSS_FARMING_SENDER(overrides?: CallOverrides): Promise<BigNumber>;

    ackEmergencyWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    ackWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    add(
      _lpToken: string,
      _mcv2PoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addWhiteListPool(
      _mcv2Pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calcFee(_message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    encodeMessage(
      _account: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _msgType: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exists(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    fallbackDeposit(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fallbackWithdraw(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    messageBus(overrides?: CallOverrides): Promise<BigNumber>;

    operator(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    poolLength(overrides?: CallOverrides): Promise<BigNumber>;

    poolMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    usedNonce(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    whitelistPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BSC_CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CROSS_FARMING_RECEIVER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CROSS_FARMING_SENDER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ackEmergencyWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    ackWithdraw(
      _user: string,
      _mcv2pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    add(
      _lpToken: string,
      _mcv2PoolId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addWhiteListPool(
      _mcv2Pid: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calcFee(
      _message: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposits(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    emergencyWithdraw(
      _pid: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    encodeMessage(
      _account: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _msgType: BigNumberish,
      _nonce: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exists(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fallbackDeposit(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fallbackWithdraw(
      _user: string,
      _pid: BigNumberish,
      _amount: BigNumberish,
      _nonce: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    messageBus(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    operator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolMapping(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOperator(
      _operator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    usedNonce(
      arg0: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    whitelistPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _pid: BigNumberish,
      _amount: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}