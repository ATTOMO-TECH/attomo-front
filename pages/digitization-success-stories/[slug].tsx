import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Cases from '../../screens/casos-exito-detail';
import { getServerSidePropsCases } from '../../lib/serverSide';
import ErrorView from '../../screens/404';
import Background from '../../components/animations/background';

export const getServerSideProps: GetServerSideProps = getServerSidePropsCases;

export default function index(props: any) {
  const { data, locale, statusCode } = props;
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
        <link rel="canonical" href={data.attributes?.canonicalEN} />
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
      {statusCode.statusCode ? (
        <>
          <Background />
          <ErrorView locale={locale} />
        </>
      ) : (
        <Cases data={data} locale={locale} />
      )}
    </>
  );
}
