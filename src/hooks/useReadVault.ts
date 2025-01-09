import { useCallback } from 'react';
import type { Address } from 'viem';
import { erc20Abi } from 'viem';
import { useAccount, useReadContract } from 'wagmi';

import { envs } from '@/lib/envs';
import { formatBigInt } from '@/lib/formatBigInt';
import type { CallContractStatus } from '@/types';

export interface TokenValue {
  int?: string;
  bigInt?: bigint;
}

export interface TokenInfo {
  symbol: string;
  decimals: number;
}

interface ReadDataReturn {
  balance: {
    value?: TokenValue;
    status: CallContractStatus;
  };
  token: {
    value?: TokenInfo;
    status: CallContractStatus;
  };
  handleRefetchBalance: () => void;
}

export function useReadData(): ReadDataReturn {
  const { address } = useAccount();

  const {
    data: tokenAddress,
    isLoading: tokenAddressLoading,
    isError: tokenAddressError,
  } = useReadContract({
    abi: [
      {
        inputs: [],
        name: 'token',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        stateMutability: 'view',
        type: 'function',
      },
    ],
    functionName: 'token',
    address: envs.NEXT_PUBLIC_CONTRACT_SEPOLIA_ADDRESS,
  });
  const {
    data: symbol,
    isLoading: symbolLoading,
    isError: symbolError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'symbol',
  });

  const {
    data: decimals,
    isLoading: decimalsLoading,
    isError: decimalsError,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'decimals',
  });

  const {
    data: balanceBInt,
    isLoading: balanceBIntLoading,
    isError: balanceBIntError,
    refetch: refetchBalance,
  } = useReadContract({
    abi: erc20Abi,
    address: tokenAddress,
    functionName: 'balanceOf',
    args: [address as Address],
  });

  const handleRefetchBalance = useCallback(() => refetchBalance(), []);

  const balance: TokenValue | undefined =
    balanceBInt !== undefined && decimals
      ? {
          bigInt: balanceBInt,
          int: formatBigInt(balanceBInt, decimals),
        }
      : undefined;
  const token =
    symbol && decimals
      ? {
          symbol,
          decimals,
        }
      : undefined;
  return {
    balance: {
      value: balance,
      status: {
        isLoading: balanceBIntLoading || decimalsLoading || tokenAddressLoading,
        isError: balanceBIntError || decimalsError || tokenAddressError,
        isSuccess: balance !== undefined,
      },
    },
    token: {
      value: token,
      status: {
        isLoading: symbolLoading,
        isError: symbolError,
        isSuccess: symbol !== undefined,
      },
    },
    handleRefetchBalance,
  };
}
