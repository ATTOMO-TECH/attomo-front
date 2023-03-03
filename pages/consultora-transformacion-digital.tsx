import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import { GetServerSideProps } from 'next';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import Services from '../screens/consultora';
import { translateHeader } from '../hook/utils';
import { getServerSidePropsServices } from '../lib/serverSide';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.SERVICES : MENU_SCREENS_EN.SERVICES,
    locale,
  );
  const { data } = await getAllServices(locale);

  return {
    props: {
      metadata,
      locale,
      data,
    },
  };
};
export const getServerSideProps: GetServerSideProps =
  getServerSidePropsServices;

export default function index(props: any) {
  const { metadata, locale, data, relatedPost } = props;
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Services data={data} locale={locale} relatedPost={relatedPost} />
    </>
  );
}
