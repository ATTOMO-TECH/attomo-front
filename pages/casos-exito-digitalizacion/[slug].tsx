import { GetServerSideProps } from 'next';
// import { useEffect, useState } from 'react';
import Head from 'next/head';
import Cases from '../../screens/casos-exito-detail';
import { getServerSidePropsCases } from '../../lib/serverSide';
import ErrorView from '../../screens/404';
import Background from '../../components/animations/background';
// import { getENLangLink, getESLangLink } from '../../functions/getHreflangPath';

export const getServerSideProps: GetServerSideProps = getServerSidePropsCases;

export default function index(props: any) {
  const { data, locale, statusCode } = props;
  // const [spanishUrl, setSpanishUrl] = useState('')
  // const [englishhUrl, seteEglishUrl] = useState('')
  // useEffect(()=>{
  //   if(typeof window !== 'undefined'){
  //       const separatedURL = window.location.href.split('/')
  //       console.log(separatedURL)
  //     if(window.location.pathname.includes('/en')){
  //         const structuralURL = getESLangLink(separatedURL[4])
  //         console.log(structuralURL)
  //         // const urlFinal = separatedURL.slice()
  //         const esURL = `https://attomo.digital/${structuralURL}/${separatedURL[5]}` // incluir el final de la URL
  //         const engURL = `https://attomo.digital${window.location.pathname}`
  //         setSpanishUrl(esURL)
  //         seteEglishUrl(engURL)
  //     } else{
  //         const structuralURL = getENLangLink(separatedURL[3])
  //         console.log(structuralURL)
  //         // const urlFinal = separatedURL.slice()
  //         const engURL = `https://attomo.digital/en/${structuralURL}/${separatedURL[4]}` // incluir el final de la URL
  //         const esURL = `https://attomo.digital${window.location.pathname}`
  //         setSpanishUrl(esURL)
  //         seteEglishUrl(engURL)
  //     }
  //   }
  // },[])

  return (
    <>
      <Head>
        <title>{props?.data?.attributes?.screenTitle}</title>
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {!statusCode.statusCode && data?.attributes.metadata && (
          <meta
            name="description"
            content={props?.data?.attributes?.metadata}
          />
        )}
        <link
          rel="canonical"
          href={typeof window !== 'undefined' ? window.location.href : ''}
        />
        {/* <link rel="alternate" hrefLang='es' href={ spanishUrl }/> */}
        {/* <link rel="alternate" hrefLang='en' href={ englishhUrl }/> */}
        <meta name="type" content="website" />
        <meta
          name="copyright"
          content={typeof window !== 'undefined' ? window.location.href : ''}
        />
        <meta name="robots" content="index" />
        <meta name="image" content="/FaviconLight.svg" />
      </Head>
      {statusCode.statusCode ? (
        <>
          <Background />
          <ErrorView locale={locale} />
        </>
      ) : (
        <Cases data={data} locale={locale} />
      )}
    </>
  );
}
