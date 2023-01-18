import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Cases from '../../screens/casos-exito-detail';
import { getServerSidePropsCases } from '../../lib/serverSide';

export const getServerSideProps: GetServerSideProps = getServerSidePropsCases;

export default function index(props: any) {
  const { data, locale } = props;

  return (
    <>
      <Head>
        <title>{props?.data?.attributes.screenTitle}</title>
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {data?.attributes.metadata && (
          <meta name="description" content={props?.data?.attributes.metadata} />
        )}
        <meta name="keywords" content={props?.data?.attributes.metadata} />
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <meta name="type" content="website" />
        <meta
          name="copyright"
          content={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <meta name="robots" content="index" />
        <meta name="image" content="/FaviconLight.svg" />
      </Head>

      <Cases data={data} locale={locale} />
    </>
  );
}
