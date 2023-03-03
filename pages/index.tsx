import { GetStaticProps } from 'next';
import Home from '../screens/home';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { getAllCases } from '../domain/useCasesDetails';
import { queryObjectHome } from '../lib/queryServer';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.HOME : MENU_SCREENS_EN.HOME,
    locale,
  );
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
