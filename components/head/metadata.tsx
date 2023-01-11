import Head from 'next/head';

interface Props {
  screen: any;
}

export function Metadata({ screen }: Props) {
  return (
    <Head>
      <title>{screen.data?.attributes.screenTitle}</title>
      <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
      {screen.data?.attributes.metadata && (
        <meta name="description" content={screen.data?.attributes.metadata} />
      )}
      <meta property="og:title" content={screen.data?.attributes.screenTitle} />
      {screen.data?.attributes.metadata && (
        <meta
          property="og:description"
          content={screen.data?.attributes.metadata}
        />
      )}
      <meta property="og:url" content={document.location.origin} />
      <meta
        property="og:image:secure_url"
        content="https://attomo-test.s3.eu-west-3.amazonaws.com/logo_attomo_og_image_e0ce1b754e.jpeg?updated_at=2023-01-11T11:41:23.681Z"
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
      <link rel="canonical" href={document.location.href} />
      <meta name="type" content="website" />
      <meta name="copyright" content={document.location.href} />
      <meta name="robots" content="index" />
    </Head>
  );
}
