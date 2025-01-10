import {
  createReadContract,
  createSimulateContract,
  createWatchContractEvent,
  createWriteContract,
} from '@wagmi/core/codegen';
import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TT
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tx_hash',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'RedeemInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SwapInitialized',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'tx_hash', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'signatures',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const;

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttAddress = {
  11155111: '0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF',
} as const;

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttConfig = { address: ttAddress, abi: ttAbi } as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenTransactions
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenTransactionsAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_token', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tx_hash',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'RedeemInitialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'from',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'symbol',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'SwapInitialized',
  },
  {
    type: 'function',
    inputs: [],
    name: 'facet',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'tx_hash', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'redeem',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'signatures',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'symbol', internalType: 'string', type: 'string' },
    ],
    name: 'swap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTt = /* #__PURE__ */ createReadContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"signatures"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTtSignatures = /* #__PURE__ */ createReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'signatures',
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTtToken = /* #__PURE__ */ createReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'token',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTt = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtFacet = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtRedeem = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtSwap = /* #__PURE__ */ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTt = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtFacet = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtRedeem = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtSwap = /* #__PURE__ */ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtEvent = /* #__PURE__ */ createWatchContractEvent({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"RedeemInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtRedeemInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"SwapInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtSwapInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'SwapInitialized',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const readTokenTransactions = /* #__PURE__ */ createReadContract({
  abi: tokenTransactionsAbi,
});

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"signatures"`
 */
export const readTokenTransactionsSignatures =
  /* #__PURE__ */ createReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'signatures',
  });

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"token"`
 */
export const readTokenTransactionsToken = /* #__PURE__ */ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'token',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const writeTokenTransactions = /* #__PURE__ */ createWriteContract({
  abi: tokenTransactionsAbi,
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"facet"`
 */
export const writeTokenTransactionsFacet = /* #__PURE__ */ createWriteContract({
  abi: tokenTransactionsAbi,
  functionName: 'facet',
});

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"redeem"`
 */
export const writeTokenTransactionsRedeem = /* #__PURE__ */ createWriteContract(
  {
    abi: tokenTransactionsAbi,
    functionName: 'redeem',
  },
);

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"swap"`
 */
export const writeTokenTransactionsSwap = /* #__PURE__ */ createWriteContract({
  abi: tokenTransactionsAbi,
  functionName: 'swap',
});

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const simulateTokenTransactions = /* #__PURE__ */ createSimulateContract(
  {
    abi: tokenTransactionsAbi,
  },
);

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"facet"`
 */
export const simulateTokenTransactionsFacet =
  /* #__PURE__ */ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'facet',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateTokenTransactionsRedeem =
  /* #__PURE__ */ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'redeem',
  });

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"swap"`
 */
export const simulateTokenTransactionsSwap =
  /* #__PURE__ */ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'swap',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const watchTokenTransactionsEvent =
  /* #__PURE__ */ createWatchContractEvent({ abi: tokenTransactionsAbi });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"RedeemInitialized"`
 */
export const watchTokenTransactionsRedeemInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"SwapInitialized"`
 */
export const watchTokenTransactionsSwapInitializedEvent =
  /* #__PURE__ */ createWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'SwapInitialized',
  });

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTt = /* #__PURE__ */ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"signatures"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTtSignatures = /* #__PURE__ */ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'signatures',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTtToken = /* #__PURE__ */ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'token',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTt = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtFacet = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtRedeem = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtSwap = /* #__PURE__ */ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTt = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtFacet = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtRedeem = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtSwap = /* #__PURE__ */ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtEvent = /* #__PURE__ */ createUseWatchContractEvent({
  abi: ttAbi,
  address: ttAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"RedeemInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtRedeemInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"SwapInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtSwapInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'SwapInitialized',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useReadTokenTransactions = /* #__PURE__ */ createUseReadContract({
  abi: tokenTransactionsAbi,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"signatures"`
 */
export const useReadTokenTransactionsSignatures =
  /* #__PURE__ */ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'signatures',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"token"`
 */
export const useReadTokenTransactionsToken =
  /* #__PURE__ */ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'token',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useWriteTokenTransactions = /* #__PURE__ */ createUseWriteContract(
  {
    abi: tokenTransactionsAbi,
  },
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"facet"`
 */
export const useWriteTokenTransactionsFacet =
  /* #__PURE__ */ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'facet',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteTokenTransactionsRedeem =
  /* #__PURE__ */ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'redeem',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"swap"`
 */
export const useWriteTokenTransactionsSwap =
  /* #__PURE__ */ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'swap',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useSimulateTokenTransactions =
  /* #__PURE__ */ createUseSimulateContract({ abi: tokenTransactionsAbi });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"facet"`
 */
export const useSimulateTokenTransactionsFacet =
  /* #__PURE__ */ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'facet',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateTokenTransactionsRedeem =
  /* #__PURE__ */ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'redeem',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"swap"`
 */
export const useSimulateTokenTransactionsSwap =
  /* #__PURE__ */ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'swap',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useWatchTokenTransactionsEvent =
  /* #__PURE__ */ createUseWatchContractEvent({ abi: tokenTransactionsAbi });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"RedeemInitialized"`
 */
export const useWatchTokenTransactionsRedeemInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'RedeemInitialized',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"SwapInitialized"`
 */
export const useWatchTokenTransactionsSwapInitializedEvent =
  /* #__PURE__ */ createUseWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'SwapInitialized',
  });
