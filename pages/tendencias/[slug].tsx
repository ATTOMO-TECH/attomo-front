import { GetServerSideProps } from 'next';
import Head from 'next/head';
// import { useEffect, useState } from 'react';
import Background from '../../components/animations/background';
import { getServerSidePropsTendencias } from '../../lib/serverSide';
import ErrorView from '../../screens/404';
import New from '../../screens/tendencias/detail';

export const getServerSideProps: GetServerSideProps =
  getServerSidePropsTendencias;

export default function index(props: any) {
  const { data, relatedPost, locale, statusCode } = props;
  // const [canonicalURL, setCanonicalURL] = useState('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const canonical = window.location.href.split('?');
  //     setCanonicalURL(canonical[0]);
  //     console.log(canonical);
  //   }
  // }, []);

  return (
    <>
      <Head>
        <title>{props?.data?.attributes?.screenTitle}</title>

        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {!statusCode.statusCode && data?.attributes.metadata && (
          <meta
            name="description"
            content={props?.data?.attributes?.metadata}
          />
        )}
        <link rel="canonical" href={data.attributes?.canonicalES} />
        <link
          rel="alternate"
          hrefLang="es"
          href={data.attributes?.hrefLangES}
        />
        <link
          rel="alternate"
          hrefLang="en"
          href={data.attributes?.hrefLangEN}
        />

        <meta name="type" content="website" />
        <meta
          name="copyright"
          content={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <meta name="robots" content="index" />
        <meta name="image" content="/FaviconLight.svg" />
      </Head>
      <Background />
      {statusCode.statusCode ? (
        <ErrorView locale={locale} />
      ) : (
        <New data={data} locale={locale} relatedPost={relatedPost} />
      )}
    </>
  );
}
