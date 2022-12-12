/// <reference types="react" />
import * as sdk from '@ladder/sdk';
import { Token, ChainId, Currency, TradeType, Trade } from '@ladder/sdk';
import { TokenInfo } from '@uniswap/token-lists';
export { TokenInfo } from '@uniswap/token-lists';
import { ErrorInfo } from 'react';
import { TransactionReceipt, TransactionResponse } from '@ethersproject/abstract-provider';
export { Provider as EthersProvider } from '@ethersproject/abstract-provider';
import { TradeType as TradeType$1, Percent, CurrencyAmount, Currency as Currency$1 } from '@uniswap/sdk-core';
export { Currency, TradeType } from '@uniswap/sdk-core';
import { JsonRpcProvider } from '@ethersproject/providers';
export { JsonRpcProvider } from '@ethersproject/providers';
import { Provider } from '@web3-react/types';
export { Provider as Eip1193Provider } from '@web3-react/types';

/**
 * Represents an ERC721 token with a unique address and some metadata.
 */
declare class Token721 extends Token {
    readonly tokenId: string | number | undefined;
    readonly is721: true;
    name?: string;
    uri?: string;
    symbol?: string;
    constructor(chainId: ChainId, address: string, tokenId: string | number | undefined, metadata?: {
        name?: string;
        symbol?: string;
        uri?: string;
    });
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token721): boolean;
    setUri(uri: string): void;
}

/**
 * Represents an ERC1155 token with a unique address and some metadata.
 */
declare class Token1155 extends Token {
    readonly tokenId: string | number;
    readonly is1155: boolean;
    name?: string;
    uri?: string;
    symbol?: string;
    constructor(chainId: ChainId, address: string, tokenId: string | number, metadata?: {
        name?: string;
        symbol?: string;
        uri?: string;
    });
    /**
     * Returns true if the two tokens are equivalent, i.e. have the same chainId and address.
     * @param other other token to compare
     */
    equals(other: Token1155): boolean;
    setUri(uri: string): void;
}

declare module '@ladder/sdk' {
    interface Currency {
        tokenId: string | number | undefined;
        chainId: sdk.ChainId | undefined;
    }
}
declare type AllTokens = Currency | Token1155 | Token;

interface Slippage {
    max: string | undefined;
}
interface Settings {
    slippage: Slippage;
    transactionTtl: number | undefined;
    userSingleHopOnly: boolean;
}

declare enum Field {
    INPUT = "INPUT",
    OUTPUT = "OUTPUT"
}
interface Swap {
    type: TradeType;
    amount: string;
    [Field.INPUT]?: AllTokens;
    [Field.OUTPUT]?: AllTokens;
    tokenIdsIn?: Token721[] | undefined;
    tokenIdsOut?: Token721[] | undefined;
}
/** An integration hook called when the user resets settings. */
declare type OnSettingsReset = () => void;
/** An integration hook called when the user changes slippage settings. */
declare type OnSlippageChange = (slippage: Slippage) => void;
/** An integration hook called when the user changes transaction deadline settings. */
declare type OnTransactionDeadlineChange = (ttl: number | undefined) => void;
interface SettingsEventHandlers {
    onSettingsReset?: OnSettingsReset;
    onSlippageChange?: OnSlippageChange;
    onTransactionDeadlineChange?: OnTransactionDeadlineChange;
}
/** An integration hook called when the user selects a new token. */
declare type OnTokenChange = (field: Field, token: Currency) => void;
/**
 * An integration hook called when the user enters a new amount.
 * If the amount changed from the user clicking Max, origin will be set to 'max'.
 */
declare type OnAmountChange = (field: Field, amount: string) => void;
/** An integration hook called when the user switches the tokens. */
declare type OnSwitchTokens = () => void;
/**
 * An integration hook called when the user clicks the token selector.
 * If the hook resolve to false or rejects, the token selector will not open.
 */
declare type OnTokenSelectorClick = (field: Field) => void | boolean | Promise<boolean>;
interface InputEventHandlers {
    onTokenChange?: OnTokenChange;
    onAmountChange?: OnAmountChange;
    onSwitchTokens?: OnSwitchTokens;
    onTokenSelectorClick?: OnTokenSelectorClick;
    onSubTokenSwapChange?: onSubTokenSwapChange;
}
/** An integration hook called when the user approves a token, either through allowance or permit. */
declare type OnSwapApprove = () => void;
/** An integration hook called when the user receives an initial quote for a set of inputs. */
declare type OnInitialSwapQuote = (trade: TradeType) => void;
/** An integration hook called when the user acks a quote's price update. */
declare type OnSwapPriceUpdateAck = (stale: TradeType, update: TradeType) => void;
/** An integration hook called when the user expands a swap's details. */
declare type OnExpandSwapDetails = () => void;
/**
 * An integration hook called when the user clicks 'Review swap'.
 * If the hook resolves to false or rejects, the review dialog will not open.
 */
declare type OnReviewSwapClick = () => void | boolean | Promise<boolean>;
/** An integration hook called when the user confirms a swap, but before it is submitted. */
declare type OnSubmitSwapClick = (trade: TradeType) => void;
declare type onSubTokenSwapChange = (field: Field, subToken: Token721[]) => void;
interface SwapEventHandlers extends SettingsEventHandlers, InputEventHandlers {
    onSwapApprove?: OnSwapApprove;
    onInitialSwapQuote?: OnInitialSwapQuote;
    onSwapPriceUpdateAck?: OnSwapPriceUpdateAck;
    onExpandSwapDetails?: OnExpandSwapDetails;
    onReviewSwapClick?: OnReviewSwapClick;
    onSubmitSwapClick?: OnSubmitSwapClick;
}

interface SwapController {
    value?: Swap;
    settings?: Settings;
}

interface FeeOptions {
    convenienceFee?: number;
    convenienceFeeRecipient?: string | string | {
        [chainId: number]: string;
    };
}

interface SwapProps extends FeeOptions, SwapController, SwapEventHandlers {
    hideConnectionUI?: boolean;
}

declare type OnError = (error: Error, info: ErrorInfo) => void;

declare const SUPPORTED_LOCALES: string[];
declare type SupportedLocale = typeof SUPPORTED_LOCALES[number] | 'pseudo';
declare const DEFAULT_LOCALE: SupportedLocale;

declare enum TransactionType {
    APPROVAL = 0,
    SWAP = 1,
    WRAP = 2,
    UNWRAP = 3,
    MINT = 4
}
interface BaseTransactionInfo {
    type: TransactionType;
    response: TransactionResponse;
    summary?: string;
}
interface ApprovalTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.APPROVAL;
    tokenAddress: string;
    spenderAddress: string;
}
interface SwapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.SWAP;
    tradeType?: TradeType$1;
    trade?: Trade;
    slippageTolerance?: Percent;
}
interface ExactInputSwapTransactionInfo extends SwapTransactionInfo {
    tradeType: TradeType$1.EXACT_INPUT;
}
interface ExactOutputSwapTransactionInfo extends SwapTransactionInfo {
    tradeType: TradeType$1.EXACT_OUTPUT;
}
interface WrapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.WRAP;
    amount: CurrencyAmount<Currency$1>;
}
interface UnwrapTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.UNWRAP;
    amount: CurrencyAmount<Currency$1>;
}
interface MintTransactionInfo extends BaseTransactionInfo {
    type: TransactionType.MINT;
}
declare type TransactionInfo = ApprovalTransactionInfo | SwapTransactionInfo | WrapTransactionInfo | UnwrapTransactionInfo | MintTransactionInfo;
interface Transaction<T extends TransactionInfo = TransactionInfo> {
    addedTime: number;
    lastCheckedBlockNumber?: number;
    receipt?: TransactionReceipt;
    info: T;
}

declare type OnTxSubmit = (hash: string, tx: Transaction) => void;
declare type OnTxSuccess = (hash: string, receipt: TransactionReceipt) => void;
declare type OnTxFail = (hash: string, receipt: TransactionReceipt) => void;
interface TransactionEventHandlers {
    onTxSubmit?: OnTxSubmit;
    onTxSuccess?: OnTxSuccess;
    onTxFail?: OnTxFail;
}

interface BrandingSettings {
    disableBranding?: boolean;
}

/**
 * List of all the networks supported by the Uniswap Interface
 */
declare enum SupportedChainId {
    MAINNET = 1,
    GOERLI = 5,
    SEPOLIA = 11155111
}

/** Defined by EIP-3085. */
interface AddEthereumChainParameter {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    blockExplorerUrls: [string];
    rpcUrls: string[];
}
/**
 * An integration hook called when the user tries to switch chains.
 * If the hook returns a Promise, it is assumed the integrator is attempting to switch the chain, and no further attempts will be made.
 * If that Promise rejects, the error will be ignored so as not to crash the widget.
 */
declare type OnSwitchChain = (addChainParameter: AddEthereumChainParameter) => void | Promise<void>;

declare type OnConnectWalletClick = () => void | boolean | Promise<boolean>;

interface WidgetEventHandlers {
    onConnectWalletClick?: OnConnectWalletClick;
    onError?: OnError;
    onSwitchChain?: OnSwitchChain;
}

declare type JsonRpcConnectionMap = {
    [chainId: number]: string | string[] | JsonRpcProvider | JsonRpcProvider[];
};

interface ProviderProps {
    defaultChainId?: SupportedChainId;
    jsonRpcUrlMap?: JsonRpcConnectionMap;
    /**
     * If null, no auto-connection (MetaMask or WalletConnect) will be attempted.
     * This is appropriate for integrations which wish to control the connected provider.
     */
    provider?: Provider | JsonRpcProvider | null;
}

interface Colors {
    accent: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    success: string;
    warning: string;
    error: string;
    currentColor: 'currentColor';
}
interface Attributes {
    borderRadius: boolean | number;
    fontFamily: string | {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
}
interface Theme extends Partial<Attributes>, Partial<Colors> {
}

declare const lightTheme: Colors;
declare const darkTheme: Colors;
declare const defaultTheme: {
    accent: string;
    container: string;
    module: string;
    interactive: string;
    outline: string;
    dialog: string;
    primary: string;
    onAccent: string;
    secondary: string;
    hint: string;
    onInteractive: string;
    active: string;
    success: string;
    warning: string;
    error: string;
    currentColor: "currentColor";
    borderRadius: number;
    fontFamily: {
        font: string;
        variable: string;
    };
    fontFamilyCode: string;
    tokenColorExtraction: boolean;
};

interface UserTokenLists {
    erc1155: {
        [chainId in ChainId]?: {
            address: string;
            tokenId: string | number;
            metadata?: {
                name?: string;
                symbol?: string;
                uri?: string;
            };
        }[];
    };
    erc721: {
        [chainId in ChainId]?: {
            address: string;
            tokenId?: string | number;
            metadata?: {
                name?: string;
                symbol?: string;
                uri?: string;
            };
        }[];
    };
    erc20: {
        [chainId in ChainId]?: {
            address: string;
            decimals: number;
            symbol: string;
            name: string;
            uri?: string;
        }[];
    };
}

interface WidgetProps$1 extends BrandingSettings, TransactionEventHandlers, ProviderProps, WidgetEventHandlers {
    theme?: Theme;
    locale?: SupportedLocale;
    tokenList?: string | TokenInfo[];
    width?: string | number;
    dialog?: HTMLDivElement | null;
    className?: string;
    onError?: OnError;
}
interface LadderProps extends BrandingSettings, TransactionEventHandlers, ProviderProps, WidgetEventHandlers {
    tokenLists?: UserTokenLists;
}

interface SwapWidgetSkeletonProps {
    theme?: Theme;
    width?: string | number;
}
declare function SwapWidgetSkeleton({ theme, width }: SwapWidgetSkeletonProps): JSX.Element;

declare function invertTradeType(tradeType: TradeType$1): TradeType$1;
declare function toTradeType(modifiedField: Field): TradeType$1;

declare type WidgetProps = WidgetProps$1;
declare function LadderWidget(props: WidgetProps & LadderProps): JSX.Element;
declare function SwapWidget(props: WidgetProps & SwapProps): JSX.Element;

export { AddEthereumChainParameter, ApprovalTransactionInfo, DEFAULT_LOCALE, ExactInputSwapTransactionInfo, ExactOutputSwapTransactionInfo, FeeOptions, Field, JsonRpcConnectionMap, LadderWidget, OnAmountChange, OnConnectWalletClick, OnError, OnExpandSwapDetails, OnInitialSwapQuote, OnReviewSwapClick, OnSettingsReset, OnSlippageChange, OnSubmitSwapClick, OnSwapApprove, OnSwapPriceUpdateAck, OnSwitchChain, OnSwitchTokens, OnTokenChange, OnTokenSelectorClick, OnTransactionDeadlineChange, OnTxFail, OnTxSubmit, OnTxSuccess, SUPPORTED_LOCALES, Slippage, SupportedChainId, SupportedLocale, SwapController, SwapEventHandlers, SwapTransactionInfo, SwapWidget, SwapWidgetSkeleton, SwapWidgetSkeletonProps, Theme, Transaction, TransactionEventHandlers, TransactionInfo, TransactionType, UnwrapTransactionInfo, WidgetEventHandlers, WidgetProps, WrapTransactionInfo, darkTheme, defaultTheme, invertTradeType, lightTheme, toTradeType };
