import { GetStaticProps } from 'next';
import Home from '../screens/home';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import {
  getScreensCanonical,
  getScreensId,
} from '../domain/useScreensMetadata';
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
  const canonical = await getScreensCanonical();
  const canonicalHref = canonical.data;
  return {
    props: {
      metadata,
      data,
      locale,
      canonicalHref,
    },
  };
};

export default function index(props: any) {
  const { metadata, data, locale, canonicalHref } = props;
  const metadataInfo = translateHeader(metadata, locale);
  const canonicalLinks = canonicalHref.filter(
    (item: any) => item.attributes.page === 'home',
  );
  return (
    <>
      <MetadataSSR
        screen={metadataInfo}
        canonicalLinks={canonicalLinks}
        locale={locale}
      />
      <Background />
      <Home data={data} locale={locale} />
    </>
  );
}
