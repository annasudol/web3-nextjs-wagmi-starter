import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  okxWallet,
  rabbyWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { http } from 'viem';
import { bscTestnet, sepolia } from 'viem/chains';

import { envs } from '@/lib/envs';

import { siteConfig } from './siteConfig';

export const T_SEPOLIA_RPC_URL = `https://sepolia.gateway.tenderly.co/${envs.NEXT_PUBLIC_TENDERLY_PROJECT_ID}`;

export const rainbowConfig = getDefaultConfig({
  appName: siteConfig.title,
  projectId: envs.NEXT_PUBLIC_RAINBOWKIT_PROJECT_ID,
  chains: [sepolia, bscTestnet],
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, rabbyWallet, okxWallet],
    },
  ],
  ssr: false,

  transports: {
    [sepolia.id]: http(
      envs.NEXT_PUBLIC_TENDERLY_VNETS_ENABLED ? T_SEPOLIA_RPC_URL : '',
    ),
  },
});

export const initialChain = rainbowConfig.chains[0];
