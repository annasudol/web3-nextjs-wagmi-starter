import { useCallback } from 'react';
import type { Address } from 'viem';
import { useAccount } from 'wagmi';

import {
  useEnsBalanceOfread,
  useEnsDecimalsread,
  useEnsSymbolread,
} from '@/config/wagmi-cli/wagmiGenerated';
import { formatBigInt } from '@/lib/format/formatBigInt';
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
    data: symbol,
    isError: symbolError,
    isLoading: symbolLoading,
  } = useEnsSymbolread();

  const {
    data: decimals,
    isError: decimalsError,
    isLoading: decimalsLoading,
  } = useEnsDecimalsread();

  const {
    data: balanceBInt,
    isLoading: balanceBIntLoading,
    isError: balanceBIntError,
    refetch: refetchBalance,
  } = useEnsBalanceOfread({
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
        isLoading: balanceBIntLoading || decimalsLoading,
        isError: balanceBIntError || decimalsError,
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
