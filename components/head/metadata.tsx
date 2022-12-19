import Head from 'next/head';

interface Props {
  screen: any;
}

export function Metadata({ screen }: Props) {
  return (
    <Head>
      <title>{screen.data?.attributes.screenTitle}</title>
      <meta name="title" content={screen.data?.attributes.screenTitle} />
      <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
      {screen.data?.attributes.metadata && (
        <meta name="description" content={screen.data?.attributes.metadata} />
      )}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="ATTOMO - Consultora de Transformación Digital"
      />
      {screen.data?.attributes.metadata && (
        <meta
          property="og:description"
          content="* ATTOMO - Consultora de Transformación Digital *
          Ayudamos a las empresas privadas y administraciones públicas en todo su proceso de digitalización."
        />
      )}
      <meta property="og:url" content="https://www.attomo.digital" />
      <meta
        property="og:site_name"
        content="ATTOMO - Consultora de Transformación Digital"
      />
      <meta
        property="og:image"
        content="https://attomo-test.s3.eu-west-3.amazonaws.com/logo_attomo_b1ea60f7cb.jpeg?updated_at=2022-12-19T13:12:57.635Z"
      />
      <link rel="canonical" href={document.location.href} />
      <meta name="type" content="website" />
      <meta name="copyright" content={document.location.href} />
      <meta name="robots" content="index" />
    </Head>
  );
}
