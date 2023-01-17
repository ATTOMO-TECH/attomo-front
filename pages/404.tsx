import { GetStaticProps } from 'next';
import { MENU_SCREENS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import ErrorView from '../screens/404';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(MENU_SCREENS.HOME, locale);

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
      <ErrorView locale={locale} />
    </>
  );
}
