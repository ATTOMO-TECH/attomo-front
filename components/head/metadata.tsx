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
      <meta property="og:title" content={screen.data?.attributes.screenTitle} />
      <meta
        property="og:description"
        content={screen.data?.attributes.metadata}
      />
      <meta property="og:url" content={document.location.origin} />
      <meta property="og:image" content="/Favicon.svg" />
      <link rel="canonical" href={document.location.href} />
      <meta name="type" content="website" />
      <meta name="copyright" content={document.location.href} />
      <meta name="robots" content="index" />
    </Head>
  );
}
