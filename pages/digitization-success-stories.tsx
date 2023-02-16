import { GetServerSideProps } from 'next';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import Cases from '../screens/casos';
import { getServerSidePropsAllCases } from '../lib/serverSide';

export const getServerSideProps: GetServerSideProps =
  getServerSidePropsAllCases;

export default function index(props: any) {
  const { metadata, locale, data, tags } = props;
  const metadataInfo = translateHeader(metadata, locale || 'en');

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Cases data={data} locale={locale} tags={tags} />
    </>
  );
}
