import { Alert } from '@nextui-org/react';
import type { Chain } from 'viem';

import { TxLink } from './TxLink';

interface TxAlertProps {
  message: string;
  hash: string;
  chain?: Chain;
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
}

export function TxAlert({
  message,
  hash,
  chain,
  color = 'primary',
}: TxAlertProps) {
  return (
    <div className="my-3 flex w-full items-center">
      <Alert
        color={color}
        title={message}
        description={<TxLink hash={hash} chain={chain} />}
      />
    </div>
  );
}
