import { GetStaticProps } from 'next';
import Home from '../screens/home';
import { MENU_SCREENS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { getAllCases } from '../domain/useCasesDetails';
import { queryObjectHome } from '../lib/queryServer';
import { MetadataSSR } from '../components/head/metadataSSR';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(MENU_SCREENS.HOME, locale);
  const { data } = await getAllCases(queryObjectHome(locale));

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
  const localeStrapi = metadata?.attributes?.locale;
  const title =
    locale === localeStrapi
      ? metadata?.attributes?.screenTitle
      : metadata?.attributes?.localizations?.data[0]?.attributes?.screenTitle;

  const description =
    locale === localeStrapi
      ? metadata?.attributes?.metadata
      : metadata?.attributes?.localizations?.data[0]?.attributes?.metadata;

  const metadataInfo = {
    screenTitle: title,
    metadata: description,
  };

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Home data={data} />
    </>
  );
}
