import { GetStaticProps } from 'next';
import Head from 'next/head';
import Background from '../components/animations/background';
import { getATerms } from '../domain/usePolicy';
import Terminos from '../screens/terminos';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data } = await getATerms(locale);
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
        <title>ATTOMO - Terminos y condicciones</title>
        <meta name="robots" content="noindex follow" />
      </Head>
      <Background />
      <Terminos locale={locale} data={data} />
    </>
  );
}
