import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Background from '../../components/animations/background';
import { getServerSidePropsTendencias } from '../../lib/serverSide';
import New from '../../screens/tendencias/detail';

export const getServerSideProps: GetServerSideProps =
  getServerSidePropsTendencias;

export default function index(props: any) {
  const { data, locale } = props;

  return (
    <>
      <Head>
        <title>{props?.data?.attributes?.screenTitle}</title>

        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {data?.attributes.metadata && (
          <meta
            name="description"
            content={props?.data?.attributes?.metadata}
          />
        )}
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
      <Background />
      <New data={data} locale={locale} />
    </>
  );
}
