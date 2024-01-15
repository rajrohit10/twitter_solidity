/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export declare namespace Twitter {
  export type TweetStruct = {
    id: BigNumberish;
    author: AddressLike;
    content: string;
    timestamp: BigNumberish;
    likes: BigNumberish;
  };

  export type TweetStructOutput = [
    id: bigint,
    author: string,
    content: string,
    timestamp: bigint,
    likes: bigint
  ] & {
    id: bigint;
    author: string;
    content: string;
    timestamp: bigint;
    likes: bigint;
  };
}

export interface TwitterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_TWEET_LENGTH"
      | "changeMaxTweetLenth"
      | "createTweets"
      | "getTotalLikes"
      | "getTweet"
      | "getTweets"
      | "likeTweet"
      | "owner"
      | "profileContract"
      | "renounceOwnership"
      | "transferOwnership"
      | "tweets"
      | "unlikeTweets"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "TweetCreated"
      | "TweetLiked"
      | "TweetUnliked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "MAX_TWEET_LENGTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "changeMaxTweetLenth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createTweets",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalLikes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTweet",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTweets",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "likeTweet",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "profileContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tweets",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlikeTweets",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_TWEET_LENGTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeMaxTweetLenth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createTweets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalLikes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTweet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTweets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "likeTweet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "profileContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tweets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlikeTweets",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TweetCreatedEvent {
  export type InputTuple = [
    id: BigNumberish,
    author: AddressLike,
    content: string,
    timestamp: BigNumberish,
    likes: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    author: string,
    content: string,
    timestamp: bigint,
    likes: bigint
  ];
  export interface OutputObject {
    id: bigint;
    author: string;
    content: string;
    timestamp: bigint;
    likes: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TweetLikedEvent {
  export type InputTuple = [
    id: BigNumberish,
    author: AddressLike,
    liker: AddressLike,
    newLikesCount: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    author: string,
    liker: string,
    newLikesCount: bigint
  ];
  export interface OutputObject {
    id: bigint;
    author: string;
    liker: string;
    newLikesCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TweetUnlikedEvent {
  export type InputTuple = [
    id: BigNumberish,
    author: AddressLike,
    liker: AddressLike,
    newLikesCount: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    author: string,
    liker: string,
    newLikesCount: bigint
  ];
  export interface OutputObject {
    id: bigint;
    author: string;
    liker: string;
    newLikesCount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Twitter extends BaseContract {
  connect(runner?: ContractRunner | null): Twitter;
  waitForDeployment(): Promise<this>;

  interface: TwitterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  MAX_TWEET_LENGTH: TypedContractMethod<[], [bigint], "view">;

  changeMaxTweetLenth: TypedContractMethod<
    [_newMaxTweetLength: BigNumberish],
    [void],
    "nonpayable"
  >;

  createTweets: TypedContractMethod<[_tweet: string], [void], "nonpayable">;

  getTotalLikes: TypedContractMethod<[_author: AddressLike], [bigint], "view">;

  getTweet: TypedContractMethod<
    [_owner: AddressLike, _i: BigNumberish],
    [Twitter.TweetStructOutput],
    "view"
  >;

  getTweets: TypedContractMethod<
    [_owner: AddressLike],
    [Twitter.TweetStructOutput[]],
    "view"
  >;

  likeTweet: TypedContractMethod<
    [_userAddress: AddressLike, _id: BigNumberish],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  profileContract: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  tweets: TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        id: bigint;
        author: string;
        content: string;
        timestamp: bigint;
        likes: bigint;
      }
    ],
    "view"
  >;

  unlikeTweets: TypedContractMethod<
    [_userAddress: AddressLike, _id: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_TWEET_LENGTH"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "changeMaxTweetLenth"
  ): TypedContractMethod<
    [_newMaxTweetLength: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "createTweets"
  ): TypedContractMethod<[_tweet: string], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getTotalLikes"
  ): TypedContractMethod<[_author: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTweet"
  ): TypedContractMethod<
    [_owner: AddressLike, _i: BigNumberish],
    [Twitter.TweetStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTweets"
  ): TypedContractMethod<
    [_owner: AddressLike],
    [Twitter.TweetStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "likeTweet"
  ): TypedContractMethod<
    [_userAddress: AddressLike, _id: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "profileContract"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "tweets"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BigNumberish],
    [
      [bigint, string, string, bigint, bigint] & {
        id: bigint;
        author: string;
        content: string;
        timestamp: bigint;
        likes: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "unlikeTweets"
  ): TypedContractMethod<
    [_userAddress: AddressLike, _id: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "TweetCreated"
  ): TypedContractEvent<
    TweetCreatedEvent.InputTuple,
    TweetCreatedEvent.OutputTuple,
    TweetCreatedEvent.OutputObject
  >;
  getEvent(
    key: "TweetLiked"
  ): TypedContractEvent<
    TweetLikedEvent.InputTuple,
    TweetLikedEvent.OutputTuple,
    TweetLikedEvent.OutputObject
  >;
  getEvent(
    key: "TweetUnliked"
  ): TypedContractEvent<
    TweetUnlikedEvent.InputTuple,
    TweetUnlikedEvent.OutputTuple,
    TweetUnlikedEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "TweetCreated(uint256,address,string,uint256,uint256)": TypedContractEvent<
      TweetCreatedEvent.InputTuple,
      TweetCreatedEvent.OutputTuple,
      TweetCreatedEvent.OutputObject
    >;
    TweetCreated: TypedContractEvent<
      TweetCreatedEvent.InputTuple,
      TweetCreatedEvent.OutputTuple,
      TweetCreatedEvent.OutputObject
    >;

    "TweetLiked(uint256,address,address,uint256)": TypedContractEvent<
      TweetLikedEvent.InputTuple,
      TweetLikedEvent.OutputTuple,
      TweetLikedEvent.OutputObject
    >;
    TweetLiked: TypedContractEvent<
      TweetLikedEvent.InputTuple,
      TweetLikedEvent.OutputTuple,
      TweetLikedEvent.OutputObject
    >;

    "TweetUnliked(uint256,address,address,uint256)": TypedContractEvent<
      TweetUnlikedEvent.InputTuple,
      TweetUnlikedEvent.OutputTuple,
      TweetUnlikedEvent.OutputObject
    >;
    TweetUnliked: TypedContractEvent<
      TweetUnlikedEvent.InputTuple,
      TweetUnlikedEvent.OutputTuple,
      TweetUnlikedEvent.OutputObject
    >;
  };
}