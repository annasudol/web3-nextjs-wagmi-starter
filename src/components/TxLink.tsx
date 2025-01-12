import type { Chain } from 'viem';
import { sepolia } from 'viem/chains';

interface TxLinkProps {
  hash: string;
  chain?: Chain;
}

export function TxLink({ hash, chain = sepolia }: TxLinkProps): JSX.Element {
  const href = `${chain.blockExplorers?.default.url}/tx/${hash}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="my-4 text-blue-500 underline"
    >
      View on {chain.blockExplorers?.default.name}
    </a>
  );
}
