import type { Chain, Hash } from 'viem';
import { mainnet } from 'viem/chains';

export const getTxExplorerUrl = (hash?: Hash, chain?: Chain) => {
  const network = chain ?? mainnet;
  if (!hash) return '';
  return `${network.blockExplorers?.default.url}/tx/${hash}`;
};
