import { GetStaticProps } from 'next';
import Head from 'next/head';
import Background from '../components/animations/background';
import Privacidad from '../screens/privacidad';
import { getAPrivacy } from '../domain/usePolicy';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data } = await getAPrivacy(locale || 'en');
  return {
    props: {
      locale,
      data,
    },
  };
};

export default function index(props: any) {
  const { locale, data } = props;

  return (
    <>
      <Head>
        <title>Politica de Privacidad - ATTOMO ESTUDIO</title>
        <meta name="robots" content="noindex follow" />
      </Head>
      <Background />
      <Privacidad locale={locale} data={data} />
    </>
  );
}
