import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Background from '../../components/animations/background';
import { getServerSidePropsConsultora } from '../../lib/serverSide';
import DetailsServices from '../../screens/consultora/detail';

export const getServerSideProps: GetServerSideProps =
  getServerSidePropsConsultora;

export default function index(props: any) {
  const { data, locale, param } = props;
  const valueFilter = data.flatMap((tab: any) => {
    const some = tab.attributes?.subservices?.data?.filter(
      ({ attributes: { URLSlug } }: any) => {
        const nameParse = URLSlug;
        return nameParse === param;
      },
    );

    return some;
  });

  return (
    <>
      <Head>
        <title>
          Servicios ATTOMO - Nuestros servicios -
          {valueFilter[0]?.attributes.screenTitle}
        </title>
        <meta
          name="title"
          content={`Servicios ATTOMO - Nuestros servicios - ${valueFilter[0]?.attributes.screenTitle}`}
        />
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        <meta
          name="description"
          content={valueFilter[0]?.attributes.metadata}
        />
        <meta name="keywords" content={valueFilter[0]?.attributes.metadata} />
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
      <DetailsServices data={data} locale={locale} />
    </>
  );
}
