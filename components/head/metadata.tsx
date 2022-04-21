import Head from 'next/head';

interface Props {
  screen: any;
}

export function Metadata({ screen }: Props) {
  return (
    <Head>
      <title>{screen.data.attributes.screenTitle}</title>
      <meta property="og:title" content={screen.data.attributes.screenTitle} />
      <meta property="og:image" content="/Favicon.svg" />
      {screen.data.attributes.metadata && (
        <meta
          property="og:description"
          content={screen.data.attributes.metadata}
        />
      )}
      <link rel="canonical" href="https://attomo.digital" />
      <meta property="og:type" content="website" />
    </Head>
  );
}
