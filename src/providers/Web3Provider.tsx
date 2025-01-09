'use client';

import '@rainbow-me/rainbowkit/styles.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import type { State } from 'wagmi';
import { WagmiProvider } from 'wagmi';

import { rainbowConfig } from '@/config/rainbowConfig';

interface Props extends PropsWithChildren {
  initialState?: State;
}

const queryClient = new QueryClient();

export function Web3Provider(props: Props) {
  return (
    <>
      <WagmiProvider config={rainbowConfig} initialState={props.initialState}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{props.children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}
