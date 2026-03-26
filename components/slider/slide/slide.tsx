import Link from 'next/link';
import { useRouter } from 'next/router';
import { BUTTON_ACTIVE } from '../../../const/const';
import { StylesArticle, darkTheme, lightTheme } from '../style';
import { handlers } from '../../../hook/longPress';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../../const/constGlobal';

interface Props {
  articles: any;
  mode: boolean;
}

export default function Slide({ articles, mode }: Props) {
  const router = useRouter();
  const { locale } = router;
  const VALUESNAV = locale === 'en' ? VALUESNAV_ENG : VALUESNAV_ESP;

  return (
    <>
      <Link
        href={{
          pathname: `${VALUESNAV[3].Url}/${articles.attributes.URLSlug}-${articles.id}`,
          query: {
            tags: articles?.attributes?.blog_tags?.data[0].attributes?.name,
          },
        }}>
        <StylesArticle.Img
          src={articles.attributes.coverImage.data.attributes.url}
          alt={articles.attributes.coverImage.data.attributes.alternativeText}
        />
      </Link>
      <StylesArticle.BlockText theme={mode === false ? lightTheme : darkTheme}>
        <StylesArticle.TopicText
          ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        />
        <StylesArticle.TopicText ismode={BUTTON_ACTIVE.ON}>
          {articles.attributes.blog_tags.data[0].attributes.name}
        </StylesArticle.TopicText>
        <Link
          href={{
            pathname: `${VALUESNAV[3].Url}/${articles.attributes.URLSlug}-${articles.id}`,
            query: {
              tags: articles?.attributes?.blog_tags?.data[0].attributes?.name,
            },
          }}>
          <StylesArticle.TextBlog
            ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
            {...handlers(
              `${VALUESNAV[3].Url}/${articles.attributes.URLSlug}-${articles.id}`,
            )}>
            {articles.attributes.title}
          </StylesArticle.TextBlog>
        </Link>
      </StylesArticle.BlockText>
    </>
  );
}
