import '../styles/global.css';

import type { AppProps } from 'next/app';

import { TransactionProvider } from '@/providers/TransactionProvider';
import { UIProvider } from '@/providers/UIProvider';
import { Web3Provider } from '@/providers/Web3Provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3Provider>
    <TransactionProvider>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </TransactionProvider>
  </Web3Provider>
);

export default MyApp;
