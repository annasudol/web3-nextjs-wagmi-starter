'use client';

import { useAccount } from 'wagmi';

import { siteConfig } from '@/config/siteConfig';
import { useReadData } from '@/hooks/useReadData';

import { Loading } from './Loading';

export function BalanceUIwrapper({ children }: { children: React.ReactNode }) {
  const { balance, token } = useReadData();
  const { address, chain } = useAccount();

  return (
    <div className="flex h-80 flex-col justify-between py-4 sm:px-4">
      <div className="text-sm text-white">
        {address && chain?.id && (
          <>
            <div className="flex justify-center text-white">
              Your balance:
              {balance.status.isLoading && (
                <>
                  <Loading dots={true} /> {token.value?.symbol}
                </>
              )}
              <span className="ml-2">
                {' '}
                {Number(balance?.value?.int).toFixed(
                  siteConfig.toFixedString,
                )}{' '}
                {token.value?.symbol}
              </span>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
