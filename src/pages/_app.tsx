import '../styles/global.css';

import type { AppProps } from 'next/app';

import { UIProvider } from '@/providers/UIProvider';
import { Web3Provider } from '@/providers/Web3Provider';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Web3Provider>
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  </Web3Provider>
);

export default MyApp;
