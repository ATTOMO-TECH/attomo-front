import { GetServerSideProps } from 'next';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import Services from '../screens/consultora';
import { translateHeader } from '../hook/utils';
import { getServerSidePropsServices } from '../lib/serverSide';

export const getServerSideProps: GetServerSideProps =
  getServerSidePropsServices;

export default function index(props: any) {
  const { metadata, locale, data, relatedPost } = props;
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Services data={data} locale={locale} relatedPost={relatedPost} />
    </>
  );
}
