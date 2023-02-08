import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import Services from '../screens/consultora';
import { getAllServices } from '../domain/useServices';
import { translateHeader } from '../hook/utils';

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

export default function index(props: any) {
  const { metadata, locale, data } = props;
  const metadataInfo = translateHeader(metadata, locale);
  // console.log(data)
  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Services data={data} locale={locale} />
    </>
  );
}
