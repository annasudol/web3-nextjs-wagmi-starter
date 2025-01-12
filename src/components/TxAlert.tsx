import { Alert } from '@nextui-org/react';
import type { Chain } from 'viem';

import { TxLink } from '@/components/TxLink';
import type {
  TransactionMessage,
  TransactionStatus,
} from '@/providers/TransactionProvider';

import { MyButton } from './button/MyButton';

export interface TxAlertProps extends TransactionMessage {
  chain?: Chain;
}
export function TxAlert({
  title,
  description,
  hash,
  chain,
  state,
  button,
}: TxAlertProps) {
  const getColor = (txState: TransactionStatus) => {
    if (txState === 'success') return 'success';
    if (txState === 'failed') return 'danger';
    return 'primary';
  };
  return (
    <div className="my-3 flex w-full flex-col items-center gap-2">
      <Alert color={getColor(state)} title={title} description={description} />
      <TxLink hash={hash} chain={chain} />
      {button && (
        <MyButton
          isDisabled={button.disabled}
          onPress={button.onClick}
          variant="solid"
          className="w-full"
          iconRight={button.iconRight}
          iconLeft={button.iconLeft}
          isLoading={button.loading}
        >
          {button.text}
        </MyButton>
      )}
    </div>
  );
}
