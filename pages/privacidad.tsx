import { GetStaticProps } from 'next';
import Head from 'next/head';
import Background from '../components/animations/background';
import { getAPrivacy } from '../domain/usePolicy';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data } = await getAPrivacy(locale || 'es');
  return {
    props: {
      locale,
      data,
    },
  };
};

export default function index() {
  return (
    <>
      <Head>
        <title>Politica de Privacidad - ATTOMO ESTUDIO</title>
        <meta name="robots" content="noindex follow" />
      </Head>
      <Background />
      <p className="text-white">
        ESTAMOS EN MANTENIMIENTO Y ESTA PÁGINA NO ESTÁ DISPONIBLE EN ESTE
        MOMENTO
      </p>
    </>
  );
}
