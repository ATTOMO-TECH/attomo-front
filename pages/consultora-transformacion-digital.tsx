import { GetStaticProps } from 'next';
import { MENU_SCREENS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import Services from '../screens/consultora';
import { getAllServices } from '../domain/useServices';
import { translateHeader } from '../hook/utils';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(MENU_SCREENS.SERVICES, locale);
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
