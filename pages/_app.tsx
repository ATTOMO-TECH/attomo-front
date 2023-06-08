import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createContext, useEffect } from 'react';
import { appWithTranslation } from 'next-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import TagManager from 'react-gtm-module';
import { AuthProvider } from '../context/AuthContext';
import '../styles/globals.css';

const queryClient = new QueryClient();
export const GlobalContext = createContext({});

const tagManagerArgs = {
  gtmId: 'GTM-PK7QVJG',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <>
      <Head>
        <title>ATTOMO - Consultora Digital </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="Favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Merriweather+Sans:wght@300;500;600;700;800&family=Merriweather:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        {/*
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ATTOMO - Consultora de Transformación Digital"
        />
        <meta
          property="og:description"
          content=" ATTOMO - Consultora de Transformación Digital - Ayudamos a las empresas privadas y administraciones públicas en todo su proceso de digitalización."
        />
        <meta property="og:url" content="https://www.attomo.digital" />
        <meta
          property="og:site_name"
          content="ATTOMO - Consultora de Transformación Digital"
        /> 
        */}
      </Head>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
