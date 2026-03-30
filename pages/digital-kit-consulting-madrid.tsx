import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import {
  getScreensCanonical,
  getScreensId,
} from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import ConsultingKit from '../screens/consultingKit';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  try {
    const { data: metadata } = await getScreensId(
      locale === 'es' ? MENU_SCREENS_ES.KIT : MENU_SCREENS_EN.KIT,
      locale,
    );
    const canonical = await getScreensCanonical();
    const canonicalHref = canonical.data;

    return {
      props: {
        metadata,
        locale,
        canonicalHref,
      },
    };
  } catch (error) {
    console.error(
      `Error construyendo la página Consulting Kit para el idioma: ${locale}`,
    );

    // Nuestro salvavidas oficial para que Netlify no se enfade
    return {
      notFound: true,
    };
  }
};

export default function index(props: any) {
  const { metadata, locale, canonicalHref } = props;
  const metadataInfo = translateHeader(metadata, locale);
  const canonicalLinks = canonicalHref.filter(
    (item: any) => item.attributes.page === 'kit',
  );

  return (
    <>
      <MetadataSSR
        screen={metadataInfo}
        canonicalLinks={canonicalLinks}
        locale={locale}
      />
      <Background />
      <ConsultingKit locale={locale} />
    </>
  );
}
