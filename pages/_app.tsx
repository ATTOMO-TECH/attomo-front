import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createContext } from 'react';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

const queryClient = new QueryClient();
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>ATTOMO - Consultora Digital </title>
      <link rel="icon" type="image/x-icon" href="Favicon.svg" />
    </Head>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  </>
);

export default appWithTranslation(MyApp);
