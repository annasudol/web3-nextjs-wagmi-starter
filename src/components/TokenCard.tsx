'use client';

import { useAccount } from 'wagmi';

import { Loading } from '@/components/Loading';
import { useReadData } from '@/hooks/useReadData';

export function TokenCard({ children }: { children: React.ReactNode }) {
  const { balance, token } = useReadData();
  const { address, chain } = useAccount();

  return (
    <div className="flex h-64 flex-col justify-between py-4 sm:px-4">
      <div className="text-sm text-white">
        {address && chain?.id && (
          <>
            <div className="flex justify-start text-white">
              Your balance:
              {balance.status.isLoading && (
                <>
                  <Loading dots={true} /> {token.value?.symbol}
                </>
              )}
              <span className="ml-2">
                {balance?.value?.int} {token.value?.symbol}
              </span>
            </div>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
