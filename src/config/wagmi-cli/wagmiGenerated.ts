import {
  createUseReadContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
  createUseWriteContract,
} from 'wagmi/codegen';

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ens
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const ensAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_name', internalType: 'string', type: 'string' },
      { name: '_symbol', internalType: 'string', type: 'string' },
      { name: '_decimal', internalType: 'uint8', type: 'uint8' },
      { name: 'eth_per_token_', internalType: 'uint256', type: 'uint256' },
      { name: 'discount_rate_', internalType: 'uint256', type: 'uint256' },
      { name: 'total_num_bond_', internalType: 'uint256', type: 'uint256' },
      { name: 'maturity_number_', internalType: 'uint256', type: 'uint256' },
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
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'num_of_bond',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'total_face_value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'date_of_issue',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'date_of_maturity',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'total_return',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'show',
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
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'purchase_bond', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'investment',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'investorlist',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'investors_info',
    outputs: [
      { name: 'investor_address', internalType: 'address', type: 'address' },
      { name: 'total_face_value', internalType: 'uint256', type: 'uint256' },
      {
        name: 'total_bond_purchased',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'date_of_issue', internalType: 'uint256', type: 'uint256' },
      { name: 'date_of_maturity', internalType: 'uint256', type: 'uint256' },
      { name: 'total_return', internalType: 'uint256', type: 'uint256' },
    ],
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
    name: 'remaining_bond',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'total_supply',
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
] as const;

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const ensAddress = {
  11155111: '0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c',
} as const;

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const ensConfig = { address: ensAddress, abi: ensAbi } as const;

/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
/// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsAllowanceread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'allowance',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsBalanceOfread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsDecimalsread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'decimals',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"investorlist"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsInvestorlistread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'investorlist',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"investors_info"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsInvestorsInforead = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'investors_info',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsNameread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"remaining_bond"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsRemainingBondread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'remaining_bond',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsSymbolread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTotalSupplyread = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"total_supply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTotalSupplyread1 = /* #__PURE__ */ createUseReadContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'total_supply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnswrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsApprovewrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsBurnwrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'burn',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"investment"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsInvestmentwrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'investment',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsMintwrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'mint',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTransferwrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'transfer',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTransferFromwrite = /* #__PURE__ */ createUseWriteContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'transferFrom',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnssimulate = /* #__PURE__ */ createUseSimulateContract({
  abi: ensAbi,
  address: ensAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsApprovesimulate = /* #__PURE__ */ createUseSimulateContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsBurnsimulate = /* #__PURE__ */ createUseSimulateContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'burn',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"investment"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsInvestmentsimulate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ensAbi,
    address: ensAddress,
    functionName: 'investment',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsMintsimulate = /* #__PURE__ */ createUseSimulateContract({
  abi: ensAbi,
  address: ensAddress,
  functionName: 'mint',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTransfersimulate = /* #__PURE__ */ createUseSimulateContract(
  {
    abi: ensAbi,
    address: ensAddress,
    functionName: 'transfer',
  },
);

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ensAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTransferFromsimulate =
  /* #__PURE__ */ createUseSimulateContract({
    abi: ensAbi,
    address: ensAddress,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnswatch = /* #__PURE__ */ createUseWatchContractEvent({
  abi: ensAbi,
  address: ensAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsApprovalwatch = /* #__PURE__ */ createUseWatchContractEvent({
  abi: ensAbi,
  address: ensAddress,
  eventName: 'Approval',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsTransferwatch = /* #__PURE__ */ createUseWatchContractEvent({
  abi: ensAbi,
  address: ensAddress,
  eventName: 'Transfer',
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ensAbi}__ and `eventName` set to `"show"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xEb8a559c7F317C24f08405B40e6b1f3c83CDC76c)
 */
export const useEnsShowwatch = /* #__PURE__ */ createUseWatchContractEvent({
  abi: ensAbi,
  address: ensAddress,
  eventName: 'show',
});
