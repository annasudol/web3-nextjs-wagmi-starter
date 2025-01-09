import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttAddress = {
  11155111: '0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const ttConfig = { address: ttAddress, abi: ttAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenTransactions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenTransactionsAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_decimals', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTt = /*#__PURE__*/ createReadContract({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"signatures"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTtSignatures = /*#__PURE__*/ createReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'signatures',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const readTtToken = /*#__PURE__*/ createReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTt = /*#__PURE__*/ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtFacet = /*#__PURE__*/ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtRedeem = /*#__PURE__*/ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const writeTtSwap = /*#__PURE__*/ createWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTt = /*#__PURE__*/ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtFacet = /*#__PURE__*/ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtRedeem = /*#__PURE__*/ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const simulateTtSwap = /*#__PURE__*/ createSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"RedeemInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtRedeemInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'RedeemInitialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"SwapInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const watchTtSwapInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'SwapInitialized',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const readTokenTransactions = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"allowance"`
 */
export const readTokenTransactionsAllowance = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readTokenTransactionsBalanceOf = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"decimals"`
 */
export const readTokenTransactionsDecimals = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"name"`
 */
export const readTokenTransactionsName = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"owner"`
 */
export const readTokenTransactionsOwner = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"symbol"`
 */
export const readTokenTransactionsSymbol = /*#__PURE__*/ createReadContract({
  abi: tokenTransactionsAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readTokenTransactionsTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const writeTokenTransactions = /*#__PURE__*/ createWriteContract({
  abi: tokenTransactionsAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"approve"`
 */
export const writeTokenTransactionsApprove = /*#__PURE__*/ createWriteContract({
  abi: tokenTransactionsAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"burn"`
 */
export const writeTokenTransactionsBurn = /*#__PURE__*/ createWriteContract({
  abi: tokenTransactionsAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"mint"`
 */
export const writeTokenTransactionsMint = /*#__PURE__*/ createWriteContract({
  abi: tokenTransactionsAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transfer"`
 */
export const writeTokenTransactionsTransfer = /*#__PURE__*/ createWriteContract(
  { abi: tokenTransactionsAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeTokenTransactionsTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const simulateTokenTransactions = /*#__PURE__*/ createSimulateContract({
  abi: tokenTransactionsAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"approve"`
 */
export const simulateTokenTransactionsApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"burn"`
 */
export const simulateTokenTransactionsBurn =
  /*#__PURE__*/ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"mint"`
 */
export const simulateTokenTransactionsMint =
  /*#__PURE__*/ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateTokenTransactionsTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateTokenTransactionsTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const watchTokenTransactionsEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: tokenTransactionsAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"Approval"`
 */
export const watchTokenTransactionsApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchTokenTransactionsTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'Transfer',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTt = /*#__PURE__*/ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"signatures"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTtSignatures = /*#__PURE__*/ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'signatures',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"token"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useReadTtToken = /*#__PURE__*/ createUseReadContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTt = /*#__PURE__*/ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtFacet = /*#__PURE__*/ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWriteTtSwap = /*#__PURE__*/ createUseWriteContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTt = /*#__PURE__*/ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"facet"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtFacet = /*#__PURE__*/ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'facet',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtRedeem = /*#__PURE__*/ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ttAbi}__ and `functionName` set to `"swap"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useSimulateTtSwap = /*#__PURE__*/ createUseSimulateContract({
  abi: ttAbi,
  address: ttAddress,
  functionName: 'swap',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ttAbi,
  address: ttAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"RedeemInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtRedeemInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'RedeemInitialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ttAbi}__ and `eventName` set to `"SwapInitialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x43bAeD0FA2AA5a5eA269B49EAF26821C6c0B22EF)
 */
export const useWatchTtSwapInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ttAbi,
    address: ttAddress,
    eventName: 'SwapInitialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useReadTokenTransactions = /*#__PURE__*/ createUseReadContract({
  abi: tokenTransactionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadTokenTransactionsAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadTokenTransactionsBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadTokenTransactionsDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"name"`
 */
export const useReadTokenTransactionsName = /*#__PURE__*/ createUseReadContract(
  { abi: tokenTransactionsAbi, functionName: 'name' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"owner"`
 */
export const useReadTokenTransactionsOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadTokenTransactionsSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadTokenTransactionsTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenTransactionsAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useWriteTokenTransactions = /*#__PURE__*/ createUseWriteContract({
  abi: tokenTransactionsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteTokenTransactionsApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteTokenTransactionsBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteTokenTransactionsMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteTokenTransactionsTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteTokenTransactionsTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenTransactionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useSimulateTokenTransactions =
  /*#__PURE__*/ createUseSimulateContract({ abi: tokenTransactionsAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateTokenTransactionsApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateTokenTransactionsBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateTokenTransactionsMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateTokenTransactionsTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateTokenTransactionsTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenTransactionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__
 */
export const useWatchTokenTransactionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: tokenTransactionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchTokenTransactionsApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenTransactionsAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchTokenTransactionsTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenTransactionsAbi,
    eventName: 'Transfer',
  })
