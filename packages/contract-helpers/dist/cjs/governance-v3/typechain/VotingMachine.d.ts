import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export declare namespace IVotingMachineWithProofs {
    type VotingAssetWithSlotStruct = {
        underlyingAsset: string;
        slot: BigNumberish;
    };
    type VotingAssetWithSlotStructOutput = [string, BigNumber] & {
        underlyingAsset: string;
        slot: BigNumber;
    };
    type ProposalWithoutVotesStruct = {
        id: BigNumberish;
        sentToGovernance: boolean;
        startTime: BigNumberish;
        endTime: BigNumberish;
        votingClosedAndSentTimestamp: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        creationBlockNumber: BigNumberish;
        votingClosedAndSentBlockNumber: BigNumberish;
    };
    type ProposalWithoutVotesStructOutput = [
        BigNumber,
        boolean,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        sentToGovernance: boolean;
        startTime: number;
        endTime: number;
        votingClosedAndSentTimestamp: number;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        creationBlockNumber: BigNumber;
        votingClosedAndSentBlockNumber: BigNumber;
    };
    type ProposalVoteConfigurationStruct = {
        votingDuration: BigNumberish;
        l1ProposalBlockHash: BytesLike;
    };
    type ProposalVoteConfigurationStructOutput = [number, string] & {
        votingDuration: number;
        l1ProposalBlockHash: string;
    };
    type VoteStruct = {
        support: boolean;
        votingPower: BigNumberish;
    };
    type VoteStructOutput = [boolean, BigNumber] & {
        support: boolean;
        votingPower: BigNumber;
    };
    type VotingBalanceProofStruct = {
        underlyingAsset: string;
        slot: BigNumberish;
        proof: BytesLike;
    };
    type VotingBalanceProofStructOutput = [string, BigNumber, string] & {
        underlyingAsset: string;
        slot: BigNumber;
        proof: string;
    };
    type SignatureParamsStruct = {
        v: BigNumberish;
        r: BytesLike;
        s: BytesLike;
    };
    type SignatureParamsStructOutput = [number, string, string] & {
        v: number;
        r: string;
        s: string;
    };
}
export interface VotingMachineInterface extends utils.Interface {
    functions: {
        "CROSS_CHAIN_CONTROLLER()": FunctionFragment;
        "DATA_WAREHOUSE()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "GOVERNANCE()": FunctionFragment;
        "L1_VOTING_PORTAL()": FunctionFragment;
        "L1_VOTING_PORTAL_CHAIN_ID()": FunctionFragment;
        "NAME()": FunctionFragment;
        "REPRESENTATIVES_SLOT()": FunctionFragment;
        "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH()": FunctionFragment;
        "VOTE_SUBMITTED_TYPEHASH()": FunctionFragment;
        "VOTING_ASSET_WITH_SLOT_RAW()": FunctionFragment;
        "VOTING_ASSET_WITH_SLOT_TYPEHASH()": FunctionFragment;
        "VOTING_STRATEGY()": FunctionFragment;
        "closeAndSendVote(uint256)": FunctionFragment;
        "decodeMessage(bytes)": FunctionFragment;
        "decodeProposalMessage(bytes)": FunctionFragment;
        "decodeVoteMessage(bytes)": FunctionFragment;
        "eip712Domain()": FunctionFragment;
        "getGasLimit()": FunctionFragment;
        "getProposalById(uint256)": FunctionFragment;
        "getProposalState(uint256)": FunctionFragment;
        "getProposalVoteConfiguration(uint256)": FunctionFragment;
        "getProposalsVoteConfigurationIds(uint256,uint256)": FunctionFragment;
        "getUserProposalVote(address,uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "receiveCrossChainMessage(address,uint256,bytes)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "startProposalVote(uint256)": FunctionFragment;
        "submitVote(uint256,bool,(address,uint128,bytes)[])": FunctionFragment;
        "submitVoteAsRepresentative(uint256,bool,address,bytes,(address,uint128,bytes)[])": FunctionFragment;
        "submitVoteAsRepresentativeBySignature(uint256,address,address,bool,bytes,(address,uint128,bytes)[],(uint8,bytes32,bytes32))": FunctionFragment;
        "submitVoteBySignature(uint256,address,bool,(address,uint128,bytes)[],uint8,bytes32,bytes32)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateGasLimit(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "CROSS_CHAIN_CONTROLLER" | "DATA_WAREHOUSE" | "DOMAIN_SEPARATOR" | "GOVERNANCE" | "L1_VOTING_PORTAL" | "L1_VOTING_PORTAL_CHAIN_ID" | "NAME" | "REPRESENTATIVES_SLOT" | "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH" | "VOTE_SUBMITTED_TYPEHASH" | "VOTING_ASSET_WITH_SLOT_RAW" | "VOTING_ASSET_WITH_SLOT_TYPEHASH" | "VOTING_STRATEGY" | "closeAndSendVote" | "decodeMessage" | "decodeProposalMessage" | "decodeVoteMessage" | "eip712Domain" | "getGasLimit" | "getProposalById" | "getProposalState" | "getProposalVoteConfiguration" | "getProposalsVoteConfigurationIds" | "getUserProposalVote" | "owner" | "receiveCrossChainMessage" | "renounceOwnership" | "startProposalVote" | "submitVote" | "submitVoteAsRepresentative" | "submitVoteAsRepresentativeBySignature" | "submitVoteBySignature" | "transferOwnership" | "updateGasLimit"): FunctionFragment;
    encodeFunctionData(functionFragment: "CROSS_CHAIN_CONTROLLER", values?: undefined): string;
    encodeFunctionData(functionFragment: "DATA_WAREHOUSE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "GOVERNANCE", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_VOTING_PORTAL", values?: undefined): string;
    encodeFunctionData(functionFragment: "L1_VOTING_PORTAL_CHAIN_ID", values?: undefined): string;
    encodeFunctionData(functionFragment: "NAME", values?: undefined): string;
    encodeFunctionData(functionFragment: "REPRESENTATIVES_SLOT", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_SUBMITTED_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_ASSET_WITH_SLOT_RAW", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_ASSET_WITH_SLOT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_STRATEGY", values?: undefined): string;
    encodeFunctionData(functionFragment: "closeAndSendVote", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decodeMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decodeProposalMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "decodeVoteMessage", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "eip712Domain", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getProposalById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalState", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalVoteConfiguration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getProposalsVoteConfigurationIds", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUserProposalVote", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "receiveCrossChainMessage", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "startProposalVote", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "submitVote", values: [
        BigNumberish,
        boolean,
        IVotingMachineWithProofs.VotingBalanceProofStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "submitVoteAsRepresentative", values: [
        BigNumberish,
        boolean,
        string,
        BytesLike,
        IVotingMachineWithProofs.VotingBalanceProofStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "submitVoteAsRepresentativeBySignature", values: [
        BigNumberish,
        string,
        string,
        boolean,
        BytesLike,
        IVotingMachineWithProofs.VotingBalanceProofStruct[],
        IVotingMachineWithProofs.SignatureParamsStruct
    ]): string;
    encodeFunctionData(functionFragment: "submitVoteBySignature", values: [
        BigNumberish,
        string,
        boolean,
        IVotingMachineWithProofs.VotingBalanceProofStruct[],
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateGasLimit", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CROSS_CHAIN_CONTROLLER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DATA_WAREHOUSE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "GOVERNANCE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_VOTING_PORTAL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "L1_VOTING_PORTAL_CHAIN_ID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "NAME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "REPRESENTATIVES_SLOT", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_SUBMITTED_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_ASSET_WITH_SLOT_RAW", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_ASSET_WITH_SLOT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_STRATEGY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeAndSendVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeProposalMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decodeVoteMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eip712Domain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalVoteConfiguration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposalsVoteConfigurationIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserProposalVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "receiveCrossChainMessage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startProposalVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitVoteAsRepresentative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitVoteAsRepresentativeBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitVoteBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateGasLimit", data: BytesLike): Result;
    events: {
        "EIP712DomainChanged()": EventFragment;
        "GasLimitUpdated(uint256)": EventFragment;
        "IncorrectTypeMessageReceived(address,uint256,bytes,bytes)": EventFragment;
        "MessageReceived(address,uint256,bool,uint8,bytes,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "ProposalResultsSent(uint256,uint256,uint256)": EventFragment;
        "ProposalVoteConfigurationBridged(uint256,bytes32,uint24,bool)": EventFragment;
        "ProposalVoteStarted(uint256,bytes32,uint256,uint256)": EventFragment;
        "VoteEmitted(uint256,address,bool,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GasLimitUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IncorrectTypeMessageReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MessageReceived"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalResultsSent"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVoteConfigurationBridged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ProposalVoteStarted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "VoteEmitted"): EventFragment;
}
export interface EIP712DomainChangedEventObject {
}
export declare type EIP712DomainChangedEvent = TypedEvent<[
], EIP712DomainChangedEventObject>;
export declare type EIP712DomainChangedEventFilter = TypedEventFilter<EIP712DomainChangedEvent>;
export interface GasLimitUpdatedEventObject {
    gasLimit: BigNumber;
}
export declare type GasLimitUpdatedEvent = TypedEvent<[
    BigNumber
], GasLimitUpdatedEventObject>;
export declare type GasLimitUpdatedEventFilter = TypedEventFilter<GasLimitUpdatedEvent>;
export interface IncorrectTypeMessageReceivedEventObject {
    originSender: string;
    originChainId: BigNumber;
    message: string;
    reason: string;
}
export declare type IncorrectTypeMessageReceivedEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string
], IncorrectTypeMessageReceivedEventObject>;
export declare type IncorrectTypeMessageReceivedEventFilter = TypedEventFilter<IncorrectTypeMessageReceivedEvent>;
export interface MessageReceivedEventObject {
    originSender: string;
    originChainId: BigNumber;
    delivered: boolean;
    messageType: number;
    message: string;
    reason: string;
}
export declare type MessageReceivedEvent = TypedEvent<[
    string,
    BigNumber,
    boolean,
    number,
    string,
    string
], MessageReceivedEventObject>;
export declare type MessageReceivedEventFilter = TypedEventFilter<MessageReceivedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ProposalResultsSentEventObject {
    proposalId: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
}
export declare type ProposalResultsSentEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    BigNumber
], ProposalResultsSentEventObject>;
export declare type ProposalResultsSentEventFilter = TypedEventFilter<ProposalResultsSentEvent>;
export interface ProposalVoteConfigurationBridgedEventObject {
    proposalId: BigNumber;
    blockHash: string;
    votingDuration: number;
    voteCreated: boolean;
}
export declare type ProposalVoteConfigurationBridgedEvent = TypedEvent<[
    BigNumber,
    string,
    number,
    boolean
], ProposalVoteConfigurationBridgedEventObject>;
export declare type ProposalVoteConfigurationBridgedEventFilter = TypedEventFilter<ProposalVoteConfigurationBridgedEvent>;
export interface ProposalVoteStartedEventObject {
    proposalId: BigNumber;
    l1BlockHash: string;
    startTime: BigNumber;
    endTime: BigNumber;
}
export declare type ProposalVoteStartedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], ProposalVoteStartedEventObject>;
export declare type ProposalVoteStartedEventFilter = TypedEventFilter<ProposalVoteStartedEvent>;
export interface VoteEmittedEventObject {
    proposalId: BigNumber;
    voter: string;
    support: boolean;
    votingPower: BigNumber;
}
export declare type VoteEmittedEvent = TypedEvent<[
    BigNumber,
    string,
    boolean,
    BigNumber
], VoteEmittedEventObject>;
export declare type VoteEmittedEventFilter = TypedEventFilter<VoteEmittedEvent>;
export interface VotingMachine extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VotingMachineInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        CROSS_CHAIN_CONTROLLER(overrides?: CallOverrides): Promise<[string]>;
        DATA_WAREHOUSE(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        GOVERNANCE(overrides?: CallOverrides): Promise<[string]>;
        L1_VOTING_PORTAL(overrides?: CallOverrides): Promise<[string]>;
        L1_VOTING_PORTAL_CHAIN_ID(overrides?: CallOverrides): Promise<[BigNumber]>;
        NAME(overrides?: CallOverrides): Promise<[string]>;
        REPRESENTATIVES_SLOT(overrides?: CallOverrides): Promise<[BigNumber]>;
        VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        VOTE_SUBMITTED_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        VOTING_ASSET_WITH_SLOT_RAW(overrides?: CallOverrides): Promise<[string]>;
        VOTING_ASSET_WITH_SLOT_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        VOTING_STRATEGY(overrides?: CallOverrides): Promise<[string]>;
        closeAndSendVote(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        decodeMessage(message: BytesLike, overrides?: CallOverrides): Promise<[number, string]>;
        decodeProposalMessage(message: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, string, number]>;
        decodeVoteMessage(message: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            boolean,
            IVotingMachineWithProofs.VotingAssetWithSlotStructOutput[]
        ]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        getGasLimit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getProposalById(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[IVotingMachineWithProofs.ProposalWithoutVotesStructOutput]>;
        getProposalState(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        getProposalVoteConfiguration(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[
            IVotingMachineWithProofs.ProposalVoteConfigurationStructOutput
        ]>;
        getProposalsVoteConfigurationIds(skip: BigNumberish, size: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getUserProposalVote(user: string, proposalId: BigNumberish, overrides?: CallOverrides): Promise<[IVotingMachineWithProofs.VoteStructOutput]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        receiveCrossChainMessage(originSender: string, originChainId: BigNumberish, messageWithType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        startProposalVote(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        submitVote(proposalId: BigNumberish, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        submitVoteAsRepresentative(proposalId: BigNumberish, support: boolean, voter: string, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        submitVoteAsRepresentativeBySignature(proposalId: BigNumberish, voter: string, representative: string, support: boolean, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], signatureParams: IVotingMachineWithProofs.SignatureParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        submitVoteBySignature(proposalId: BigNumberish, voter: string, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateGasLimit(gasLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    CROSS_CHAIN_CONTROLLER(overrides?: CallOverrides): Promise<string>;
    DATA_WAREHOUSE(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    GOVERNANCE(overrides?: CallOverrides): Promise<string>;
    L1_VOTING_PORTAL(overrides?: CallOverrides): Promise<string>;
    L1_VOTING_PORTAL_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
    NAME(overrides?: CallOverrides): Promise<string>;
    REPRESENTATIVES_SLOT(overrides?: CallOverrides): Promise<BigNumber>;
    VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    VOTE_SUBMITTED_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    VOTING_ASSET_WITH_SLOT_RAW(overrides?: CallOverrides): Promise<string>;
    VOTING_ASSET_WITH_SLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    VOTING_STRATEGY(overrides?: CallOverrides): Promise<string>;
    closeAndSendVote(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    decodeMessage(message: BytesLike, overrides?: CallOverrides): Promise<[number, string]>;
    decodeProposalMessage(message: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, string, number]>;
    decodeVoteMessage(message: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        boolean,
        IVotingMachineWithProofs.VotingAssetWithSlotStructOutput[]
    ]>;
    eip712Domain(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        BigNumber,
        string,
        string,
        BigNumber[]
    ] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
    }>;
    getGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
    getProposalById(proposalId: BigNumberish, overrides?: CallOverrides): Promise<IVotingMachineWithProofs.ProposalWithoutVotesStructOutput>;
    getProposalState(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
    getProposalVoteConfiguration(proposalId: BigNumberish, overrides?: CallOverrides): Promise<IVotingMachineWithProofs.ProposalVoteConfigurationStructOutput>;
    getProposalsVoteConfigurationIds(skip: BigNumberish, size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
    getUserProposalVote(user: string, proposalId: BigNumberish, overrides?: CallOverrides): Promise<IVotingMachineWithProofs.VoteStructOutput>;
    owner(overrides?: CallOverrides): Promise<string>;
    receiveCrossChainMessage(originSender: string, originChainId: BigNumberish, messageWithType: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    startProposalVote(proposalId: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    submitVote(proposalId: BigNumberish, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    submitVoteAsRepresentative(proposalId: BigNumberish, support: boolean, voter: string, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    submitVoteAsRepresentativeBySignature(proposalId: BigNumberish, voter: string, representative: string, support: boolean, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], signatureParams: IVotingMachineWithProofs.SignatureParamsStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    submitVoteBySignature(proposalId: BigNumberish, voter: string, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateGasLimit(gasLimit: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        CROSS_CHAIN_CONTROLLER(overrides?: CallOverrides): Promise<string>;
        DATA_WAREHOUSE(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        GOVERNANCE(overrides?: CallOverrides): Promise<string>;
        L1_VOTING_PORTAL(overrides?: CallOverrides): Promise<string>;
        L1_VOTING_PORTAL_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
        NAME(overrides?: CallOverrides): Promise<string>;
        REPRESENTATIVES_SLOT(overrides?: CallOverrides): Promise<BigNumber>;
        VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        VOTE_SUBMITTED_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        VOTING_ASSET_WITH_SLOT_RAW(overrides?: CallOverrides): Promise<string>;
        VOTING_ASSET_WITH_SLOT_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        VOTING_STRATEGY(overrides?: CallOverrides): Promise<string>;
        closeAndSendVote(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        decodeMessage(message: BytesLike, overrides?: CallOverrides): Promise<[number, string]>;
        decodeProposalMessage(message: BytesLike, overrides?: CallOverrides): Promise<[BigNumber, string, number]>;
        decodeVoteMessage(message: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            boolean,
            IVotingMachineWithProofs.VotingAssetWithSlotStructOutput[]
        ]>;
        eip712Domain(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            BigNumber,
            string,
            string,
            BigNumber[]
        ] & {
            fields: string;
            name: string;
            version: string;
            chainId: BigNumber;
            verifyingContract: string;
            salt: string;
            extensions: BigNumber[];
        }>;
        getGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getProposalById(proposalId: BigNumberish, overrides?: CallOverrides): Promise<IVotingMachineWithProofs.ProposalWithoutVotesStructOutput>;
        getProposalState(proposalId: BigNumberish, overrides?: CallOverrides): Promise<number>;
        getProposalVoteConfiguration(proposalId: BigNumberish, overrides?: CallOverrides): Promise<IVotingMachineWithProofs.ProposalVoteConfigurationStructOutput>;
        getProposalsVoteConfigurationIds(skip: BigNumberish, size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber[]>;
        getUserProposalVote(user: string, proposalId: BigNumberish, overrides?: CallOverrides): Promise<IVotingMachineWithProofs.VoteStructOutput>;
        owner(overrides?: CallOverrides): Promise<string>;
        receiveCrossChainMessage(originSender: string, originChainId: BigNumberish, messageWithType: BytesLike, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        startProposalVote(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        submitVote(proposalId: BigNumberish, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: CallOverrides): Promise<void>;
        submitVoteAsRepresentative(proposalId: BigNumberish, support: boolean, voter: string, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: CallOverrides): Promise<void>;
        submitVoteAsRepresentativeBySignature(proposalId: BigNumberish, voter: string, representative: string, support: boolean, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], signatureParams: IVotingMachineWithProofs.SignatureParamsStruct, overrides?: CallOverrides): Promise<void>;
        submitVoteBySignature(proposalId: BigNumberish, voter: string, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateGasLimit(gasLimit: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
        EIP712DomainChanged(): EIP712DomainChangedEventFilter;
        "GasLimitUpdated(uint256)"(gasLimit?: BigNumberish | null): GasLimitUpdatedEventFilter;
        GasLimitUpdated(gasLimit?: BigNumberish | null): GasLimitUpdatedEventFilter;
        "IncorrectTypeMessageReceived(address,uint256,bytes,bytes)"(originSender?: string | null, originChainId?: BigNumberish | null, message?: null, reason?: null): IncorrectTypeMessageReceivedEventFilter;
        IncorrectTypeMessageReceived(originSender?: string | null, originChainId?: BigNumberish | null, message?: null, reason?: null): IncorrectTypeMessageReceivedEventFilter;
        "MessageReceived(address,uint256,bool,uint8,bytes,bytes)"(originSender?: string | null, originChainId?: BigNumberish | null, delivered?: boolean | null, messageType?: null, message?: null, reason?: null): MessageReceivedEventFilter;
        MessageReceived(originSender?: string | null, originChainId?: BigNumberish | null, delivered?: boolean | null, messageType?: null, message?: null, reason?: null): MessageReceivedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "ProposalResultsSent(uint256,uint256,uint256)"(proposalId?: BigNumberish | null, forVotes?: null, againstVotes?: null): ProposalResultsSentEventFilter;
        ProposalResultsSent(proposalId?: BigNumberish | null, forVotes?: null, againstVotes?: null): ProposalResultsSentEventFilter;
        "ProposalVoteConfigurationBridged(uint256,bytes32,uint24,bool)"(proposalId?: BigNumberish | null, blockHash?: BytesLike | null, votingDuration?: null, voteCreated?: boolean | null): ProposalVoteConfigurationBridgedEventFilter;
        ProposalVoteConfigurationBridged(proposalId?: BigNumberish | null, blockHash?: BytesLike | null, votingDuration?: null, voteCreated?: boolean | null): ProposalVoteConfigurationBridgedEventFilter;
        "ProposalVoteStarted(uint256,bytes32,uint256,uint256)"(proposalId?: BigNumberish | null, l1BlockHash?: BytesLike | null, startTime?: null, endTime?: null): ProposalVoteStartedEventFilter;
        ProposalVoteStarted(proposalId?: BigNumberish | null, l1BlockHash?: BytesLike | null, startTime?: null, endTime?: null): ProposalVoteStartedEventFilter;
        "VoteEmitted(uint256,address,bool,uint256)"(proposalId?: BigNumberish | null, voter?: string | null, support?: boolean | null, votingPower?: null): VoteEmittedEventFilter;
        VoteEmitted(proposalId?: BigNumberish | null, voter?: string | null, support?: boolean | null, votingPower?: null): VoteEmittedEventFilter;
    };
    estimateGas: {
        CROSS_CHAIN_CONTROLLER(overrides?: CallOverrides): Promise<BigNumber>;
        DATA_WAREHOUSE(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        GOVERNANCE(overrides?: CallOverrides): Promise<BigNumber>;
        L1_VOTING_PORTAL(overrides?: CallOverrides): Promise<BigNumber>;
        L1_VOTING_PORTAL_CHAIN_ID(overrides?: CallOverrides): Promise<BigNumber>;
        NAME(overrides?: CallOverrides): Promise<BigNumber>;
        REPRESENTATIVES_SLOT(overrides?: CallOverrides): Promise<BigNumber>;
        VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        VOTE_SUBMITTED_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        VOTING_ASSET_WITH_SLOT_RAW(overrides?: CallOverrides): Promise<BigNumber>;
        VOTING_ASSET_WITH_SLOT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        VOTING_STRATEGY(overrides?: CallOverrides): Promise<BigNumber>;
        closeAndSendVote(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        decodeMessage(message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decodeProposalMessage(message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        decodeVoteMessage(message: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;
        getGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        getProposalById(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalState(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalVoteConfiguration(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getProposalsVoteConfigurationIds(skip: BigNumberish, size: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUserProposalVote(user: string, proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        receiveCrossChainMessage(originSender: string, originChainId: BigNumberish, messageWithType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        startProposalVote(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        submitVote(proposalId: BigNumberish, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        submitVoteAsRepresentative(proposalId: BigNumberish, support: boolean, voter: string, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        submitVoteAsRepresentativeBySignature(proposalId: BigNumberish, voter: string, representative: string, support: boolean, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], signatureParams: IVotingMachineWithProofs.SignatureParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        submitVoteBySignature(proposalId: BigNumberish, voter: string, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateGasLimit(gasLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        CROSS_CHAIN_CONTROLLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DATA_WAREHOUSE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        GOVERNANCE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_VOTING_PORTAL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        L1_VOTING_PORTAL_CHAIN_ID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        REPRESENTATIVES_SLOT(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTE_SUBMITTED_BY_REPRESENTATIVE_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTE_SUBMITTED_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTING_ASSET_WITH_SLOT_RAW(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTING_ASSET_WITH_SLOT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        VOTING_STRATEGY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        closeAndSendVote(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        decodeMessage(message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeProposalMessage(message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decodeVoteMessage(message: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalById(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalState(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalVoteConfiguration(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProposalsVoteConfigurationIds(skip: BigNumberish, size: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUserProposalVote(user: string, proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        receiveCrossChainMessage(originSender: string, originChainId: BigNumberish, messageWithType: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        startProposalVote(proposalId: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        submitVote(proposalId: BigNumberish, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        submitVoteAsRepresentative(proposalId: BigNumberish, support: boolean, voter: string, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        submitVoteAsRepresentativeBySignature(proposalId: BigNumberish, voter: string, representative: string, support: boolean, proofOfRepresentation: BytesLike, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], signatureParams: IVotingMachineWithProofs.SignatureParamsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        submitVoteBySignature(proposalId: BigNumberish, voter: string, support: boolean, votingBalanceProofs: IVotingMachineWithProofs.VotingBalanceProofStruct[], v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateGasLimit(gasLimit: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=VotingMachine.d.ts.map