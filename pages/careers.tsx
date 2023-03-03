import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import Carrers from '../screens/ofertas';
import { getAllCareer } from '../domain/useCareers';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.CAREERS : MENU_SCREENS_EN.CAREERS,
    locale,
  );
  const { data } = await getAllCareer(locale);

  return {
    props: {
      metadata,
      data,
      locale,
    },
  };
};

export default function index(props: any) {
  const { metadata, data, locale } = props;
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Carrers data={data} locale={locale} />
    </>
  );
}
