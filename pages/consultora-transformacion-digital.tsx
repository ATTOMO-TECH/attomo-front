import { GetStaticProps } from 'next';
import { MENU_SCREENS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import Services from '../screens/consultora';
import { getAllServices } from '../domain/useServices';

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
      <Services data={data} locale={locale} />
    </>
  );
}
