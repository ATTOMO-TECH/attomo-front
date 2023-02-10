import { GetServerSideProps } from 'next';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import News from '../screens/tendencias';
import { getServerSidePropsTrend } from '../lib/serverSide';

export const getServerSideProps: GetServerSideProps = getServerSidePropsTrend;

export default function index(props: any) {
  const { metadata, locale, data, tags } = props;
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <News data={data} locale={locale} tags={tags} />
    </>
  );
}
