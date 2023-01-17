import { GetStaticProps } from 'next';
import Home from '../screens/home';
import { MENU_SCREENS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { getAllCases } from '../domain/useCasesDetails';
import { queryObjectHome } from '../lib/queryServer';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';

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
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Home data={data} locale={locale} />
    </>
  );
}
