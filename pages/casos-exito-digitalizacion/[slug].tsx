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
        <title>
          Casos de éxito ATTOMO - Clientes -{data?.attributes.screenTitle}
        </title>

        <meta
          name="title"
          content={`Casos de éxito ATTOMO - Clientes - ${data?.attributes.screenTitle}`}
        />
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {data?.attributes.metadata && (
          <meta name="description" content={data?.attributes.metadata} />
        )}
        <meta name="keywords" content={data?.attributes.metadata} />
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
