import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import ErrorView from '../screens/404';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.HOME : MENU_SCREENS_EN.HOME,
    locale,
  );

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
      <MetadataSSR screen={metadataInfo} canonicalLinks={[]} locale={locale} />
      <Background />
      <ErrorView locale={locale} />
    </>
  );
}
