import { GetStaticProps } from 'next';
import { MENU_SCREENS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import Us from '../screens/nosotros';
import { translateHeader } from '../hook/utils';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(MENU_SCREENS.ABOUT, locale);

  return {
    props: {
      metadata,
      locale,
    },
  };
};

export default function index(props: any) {
  const { metadata, locale } = props;
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Us locale={locale} />
    </>
  );
}
