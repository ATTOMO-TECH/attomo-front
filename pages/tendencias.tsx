import { GetStaticProps } from 'next';
import { MENU_SCREENS_EN, MENU_SCREENS_ES, QUERY_PARAMS } from '../const/const';
import { getScreensId } from '../domain/useScreensMetadata';
import Background from '../components/animations/background';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import News from '../screens/tendencias';
import { getAllPost, getAllTags } from '../domain/useBlogDetails';

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.TRENDS : MENU_SCREENS_EN.TRENDS,
    locale,
  );
  const { data } = await getAllPost(
    `${QUERY_PARAMS.ALL_POST}&locale=${locale}`,
  );
  const { data: tags } = await getAllTags(locale);

  return {
    props: {
      metadata,
      locale,
      data,
      tags,
    },
  };
};

export default function index(props: any) {
  const { metadata, locale, data, tags } = props;
  const metadataInfo = translateHeader(metadata, locale);
  // console.log(tags);
  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <News data={data} locale={locale} tags={tags} />
    </>
  );
}
