import type { AppProps } from 'next/app';
import { createContext } from 'react';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

const queryClient = new QueryClient();
export const GlobalContext = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather+Sans:ital,wght@0,300;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>ATTOMO - Estudio</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </AuthProvider>
);

export default appWithTranslation(MyApp);
