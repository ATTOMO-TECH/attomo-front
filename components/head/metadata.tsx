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
      <meta name="keywords" content={screen.data?.attributes.screenTitle} />
      <link rel="canonical" href="https://attomo.digital" />
      <meta name="type" content="website" />
      <meta name="copyright" content="https://attomo.digital" />
      <meta name="robots" content="index" />
    </Head>
  );
}
