import Head from 'next/head';
import logoAttomo from '../../public/logo-attomo.jpg';

interface Props {
  screen: any;
}

export function Metadata({ screen }: Props) {
  return (
    <Head>
      <title>{screen.data?.attributes.screenTitle}</title>
      <meta name="title" content={screen.data?.attributes.screenTitle} />
      <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:type"
        content="website"
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:title"
        content="ATTOMO - Consultora de Transformación Digital"
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:description"
        content=" ATTOMO - Consultora de Transformación Digital - Ayudamos a las empresas privadas y administraciones públicas en todo su proceso de digitalización."
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:url"
        content="https://www.attomo.digital"
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:site_name"
        content="ATTOMO - Consultora de Transformación Digital"
      />
      <meta
        prefix="og: http://ogp.me/ns#"
        property="og:image"
        content={`${logoAttomo}`}
      />
      <link rel="canonical" href={document.location.href} />
      <meta name="type" content="website" />
      <meta name="copyright" content={document.location.href} />
      <meta name="robots" content="index" />
      {screen.data?.attributes.metadata && (
        <meta name="description" content={screen.data?.attributes.metadata} />
      )}
    </Head>
  );
}
