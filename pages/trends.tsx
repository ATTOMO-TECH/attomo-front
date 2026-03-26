import { GetServerSideProps } from 'next';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import News from '../screens/tendencias';
import { getServerSidePropsTrend } from '../lib/serverSide';

export const getServerSideProps: GetServerSideProps = getServerSidePropsTrend;

export default function index(props: any) {
  const { metadata, locale, data, tags, canonicalHref } = props;
  const metadataInfo = translateHeader(metadata, locale);
  const canonicalLinks = canonicalHref.filter(
    (item: any) => item.attributes.page === 'trends',
  );

  return (
    <>
      <MetadataSSR
        screen={metadataInfo}
        canonicalLinks={canonicalLinks}
        locale={locale}
      />
      <Background />
      <News data={data} locale={locale} tags={tags} />
    </>
  );
}
