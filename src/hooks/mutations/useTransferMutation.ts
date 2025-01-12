import { useMutation } from '@tanstack/react-query';
import type { Address, Hash } from 'viem';
import { waitForTransactionReceipt } from 'viem/actions';

import { ButtonLeftIcon } from '@/components/button/MyButton';
import { rainbowConfig } from '@/config/rainbowConfig';
import { siteConfig } from '@/config/siteConfig';
import { useEnsTransferwrite } from '@/config/wagmi-cli/wagmiGenerated';
import { useReadData } from '@/hooks/useReadData';
import { pareseToBigInt } from '@/lib/format/formatBigInt';
import { logger } from '@/lib/logger';
import { useTransactionManager } from '@/providers/TransactionProvider';

export interface TransferMutation {
  amount: string;
  address: Address;
}
export const useTransferMutation = () => {
  const { writeContractAsync } = useEnsTransferwrite();
  const { token, handleRefetchBalance } = useReadData();
  const { addTransaction, updateTransaction, clearTransaction } =
    useTransactionManager();

  return useMutation({
    mutationFn: async ({ amount, address }: TransferMutation) => {
      let hash: Address | undefined;
      const amountBint = pareseToBigInt(
        amount,
        token?.value?.decimals as number,
      );
      try {
        hash = await writeContractAsync({
          args: [address, amountBint],
        });

        addTransaction({
          hash: hash as Hash,
          state: 'pending',
          title: 'Your transaction is pending',
          button: {
            disabled: true,
            loading: true,
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
            description: `You sent ${amount} ${token.value?.symbol}.`,
            button: {
              text: 'Go Back',
              iconLeft: ButtonLeftIcon.ArrowLeft,
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
              iconLeft: ButtonLeftIcon.ArrowLeft,
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
