import React from 'react';
import { useAccount } from 'wagmi';

import { SubmitButton } from '@/components/button/SubmitButton';
import { TxAlert } from '@/components/TxAlert';
import { useFacetToken } from '@/hooks/mutations/useFacetToken';
import { useReadData } from '@/hooks/useReadVault';

import { Loading } from '../Loading';

export const FacetForm = () => {
  const { token } = useReadData();
  const { chain } = useAccount();
  const tokenSymbol = token.value?.symbol;

  const { handleFacet, hash, mutateStatus } = useFacetToken();

  if (hash) {
    if (mutateStatus?.isLoading) {
      return (
        <div className="flex h-64 flex-col items-stretch">
          <TxAlert
            message="Transaction is pending"
            color="primary"
            hash={hash}
            chain={chain}
          />
        </div>
      );
    }
    if (mutateStatus?.isError) {
      return (
        <div className="flex h-64 flex-col items-stretch">
          <TxAlert
            message="Receiving token failed. You can request 1 token every 24h"
            color="danger"
            hash={hash}
            chain={chain}
          />
        </div>
      );
    }

    if (mutateStatus?.isSuccess) {
      return (
        <div className="flex h-64 flex-col items-stretch">
          <TxAlert
            message={`You have received 1 ${token.value?.symbol}`}
            color="success"
            hash={hash}
            chain={chain}
          />
        </div>
      );
    }
  }
  return (
    <div>
      {tokenSymbol && (
        <p className="text-sm text-gray-400">
          To request {tokenSymbol} funds, click button. You can request 1
          {tokenSymbol} every 24h!
          {tokenSymbol} tokens is a currency that allows you to swap sETH to{' '}
          {tokenSymbol === 'sETH' ? 'tBSC' : 'sETH'}{' '}
        </p>
      )}
      <SubmitButton onPress={() => handleFacet()}>
        {`Click to receive ${token.value?.symbol ? token.value?.symbol : <Loading dots={true} />}`}
      </SubmitButton>
    </div>
  );
};
