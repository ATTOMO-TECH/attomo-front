import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES } from '../const/const';
import {
  getScreensCanonical,
  getScreensId,
} from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import KitDigital from '../screens/digitalKit';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;

  try {
    // 1. Intentamos traer los datos normalmente
    const { data: metadata } = await getScreensId(
      locale === 'es' ? MENU_SCREENS_ES.KIT : MENU_SCREENS_EN.KIT,
      locale,
    );
    const canonical = await getScreensCanonical();
    const canonicalHref = canonical.data;

    // 2. Si Strapi responde bien, devolvemos los props
    return {
      props: {
        metadata,
        locale,
        canonicalHref,
      },
    };
  } catch (error) {
    // 3. ¡EL ESCUDO! Si Strapi da error (ej. 404 en inglés), entramos aquí
    console.error(
      `Error construyendo la página Agente Digitalizador para el idioma: ${locale}`,
    );

    // Le decimos a Next.js que ignore el fallo, cree un 404 para esta ruta y siga con el build
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
      <KitDigital locale={locale} />
    </>
  );
}
