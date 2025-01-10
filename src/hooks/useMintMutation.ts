import { useMutation } from '@tanstack/react-query';
import type { Address } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';

import { rainbowConfig } from '@/config/rainbowConfig';
import { siteConfig } from '@/config/siteConfig';
import { useReadData } from '@/hooks/useReadData';
import { logger } from '@/lib/logger';
import { useWriteTtFacet } from '@/lib/wagmi-cli/generated';
import { useTransactionManager } from '@/providers/TransactionProvider';

export const useMintMutation = () => {
  const { writeContractAsync } = useWriteTtFacet();
  const { token, handleRefetchBalance } = useReadData();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();

  return useMutation({
    mutationFn: async () => {
      let hash: Address | undefined;

      try {
        hash = await writeContractAsync({});

        addTransaction({
          hash,
          state: 'pending',
          title: 'Your transaction is pending',
          button: {
            disabled: true,
            text: 'Transaction finalizing...',
          },
        });

        const txReceipt = await waitForTransactionReceipt(
          rainbowConfig.getClient(),
          {
            hash,
            confirmations: siteConfig.txConfirmations,
          },
        );

        if (txReceipt.status === 'success') {
          handleRefetchBalance();
          updateTransaction({
            state: 'success',
            title: 'Success!',
            description: `You have received ${token}.`,
            button: {
              text: 'Reset',
              onClick: async () => {
                clearTransaction();
              },
            },
          });
        } else {
          updateTransaction({
            state: 'failed',
            title: 'Oh no!',
            description: 'Please try again.',
            button: {
              text: 'Retry',
              onClick: () => clearTransaction(),
            },
          });
        }

        // return txReceipt;
      } catch (error) {
        logger.error(error);
      }
    },
    throwOnError: false,
  });
};
