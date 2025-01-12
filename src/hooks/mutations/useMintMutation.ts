import { useMutation } from '@tanstack/react-query';
import type { Address, Hash } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';
import { useAccount } from 'wagmi';

import { rainbowConfig } from '@/config/rainbowConfig';
import { siteConfig } from '@/config/siteConfig';
import { useEnsMintwrite } from '@/config/wagmi-cli/wagmiGenerated';
import { useReadData } from '@/hooks/useReadData';
import { pareseToBigInt } from '@/lib/format/formatBigInt';
import { logger } from '@/lib/logger';
import { useTransactionManager } from '@/providers/TransactionProvider';

interface MintMutation {
  amount: string;
}
export const useMintMutation = () => {
  const { writeContractAsync } = useEnsMintwrite();
  const { token, handleRefetchBalance } = useReadData();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();
  const { address } = useAccount();

  return useMutation({
    mutationFn: async ({ amount }: MintMutation) => {
      let hash: Address | undefined;
      const amountBint = pareseToBigInt(
        amount,
        token?.value?.decimals as number,
      );
      try {
        hash = await writeContractAsync({
          args: [address as Address, amountBint],
        });

        addTransaction({
          hash: hash as Hash,
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
            hash: hash as Hash,
            confirmations: siteConfig.txConfirmations,
          },
        );

        if (txReceipt.status === 'success') {
          handleRefetchBalance();
          updateTransaction({
            state: 'success',
            title: 'Success!',
            description: `You have received ${token.value?.symbol}.`,
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
            title: 'Oh no! Something went wrong.',
            description: 'Please try again.',
            button: {
              text: 'Retry',
              onClick: () => clearTransaction(),
            },
          });
        }
      } catch (error) {
        logger.error(error);
      }
    },
    throwOnError: false,
  });
};
