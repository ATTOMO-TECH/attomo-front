import Head from 'next/head';
// import { useState, useEffect } from 'react';
// import { getENLangLink, getESLangLink } from '../../functions/getHreflangPath';

interface Props {
  screen: any;
  canonicalLinks?: any;
  locale: any;
}

export function MetadataSSR({ screen, canonicalLinks, locale }: Props) {
  // if(typeof window !== 'undefined') console.log(window.location)
  // if(typeof window !== 'undefined') console.log(window.location.href)
  // if(typeof window !== 'undefined') console.log(window.location.pathname)
  // if(typeof window !== 'undefined') {
  //   const path = window.location.href.split('/')
  //   console.log(path)
  // }
  // const [spanishUrl, setSpanishUrl] = useState('');
  // const [englishhUrl, seteEglishUrl] = useState('');

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const separatedURL = window.location.href.split('/');
  //     console.log(separatedURL);
  //     if (window.location.pathname.includes('/en')) {
  //       const structuralURL = getESLangLink(separatedURL[4]);
  //       console.log(structuralURL);
  //       // const urlFinal = separatedURL.slice()
  //       const esURL = `https://attomo.digital/${structuralURL}`;
  //       const engURL = `https://attomo.digital${window.location.pathname}`;
  //       setSpanishUrl(esURL);
  //       seteEglishUrl(engURL);
  //     } else {
  //       const structuralURL = getENLangLink(separatedURL[3]);
  //       console.log(structuralURL);
  //       // const urlFinal = separatedURL.slice()
  //       const engURL = `https://attomo.digital/en/${structuralURL}`;
  //       const esURL = `https://attomo.digital${window.location.pathname}`;
  //       setSpanishUrl(esURL);
  //       seteEglishUrl(engURL);
  //     }
  //   }
  // }, []);

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
        href={
          locale === 'es'
            ? canonicalLinks[0]?.attributes?.canonicalES
            : canonicalLinks[0]?.attributes?.canonicalEN
        }
      />
      <link
        rel="alternate"
        hrefLang="es"
        href={canonicalLinks[0]?.attributes?.hrefLangES}
      />
      <link
        rel="alternate"
        hrefLang="en"
        href={canonicalLinks[0]?.attributes?.hrefLangEN}
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
