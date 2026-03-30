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

  try {
    // Intentamos traernos todos los datos de Strapi
    const { data: metadata } = await getScreensId(
      locale === 'es' ? MENU_SCREENS_ES.HOME : MENU_SCREENS_EN.HOME,
      locale,
    );
    const { data } = await getAllCases(queryObjectHome(locale));
    const canonical = await getScreensCanonical();
    const canonicalHref = canonical.data;

    // Si todo va bien, devolvemos los props normales
    return {
      props: {
        metadata,
        data,
        locale,
        canonicalHref,
      },
    };
  } catch (error) {
    // Si Strapi da un 404 en la versión en inglés, entramos aquí
    console.error(`Error construyendo la Home para el idioma: ${locale}`);

    // Le decimos a Next.js: "Tranquilo, pon un 404 y sigue con el despliegue"
    return {
      notFound: true,
    };
  }
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
