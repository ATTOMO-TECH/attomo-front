import Head from 'next/head';

interface Props {
  screen: any;
}

export function MetadataSSR({ screen }: Props) {
  return (
    <Head>
      <title>{screen?.screenTitle}</title>
      <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
      <meta name="description" content={screen?.metadata && screen?.metadata} />
      <meta property="og:title" content={screen?.screenTitle} />
      <meta
        property="og:description"
        content={screen?.metadata && screen?.metadata}
      />

      <meta
        property="og:url"
        content={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <meta
        property="og:image"
        content="https://attomo-test.s3.eu-west-3.amazonaws.com/logo_attomo_b1ea60f7cb.jpeg?updated_at=2022-12-19T13:12:57.635Z"
      />
      <link
        rel="canonical"
        href={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <meta name="type" content="website" />
      <meta
        name="copyright"
        content={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <meta name="robots" content="index" />
    </Head>
  );
}
