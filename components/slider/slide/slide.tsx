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
  const articleTitle = articles?.attributes?.title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^\w]/gi, ' ')
    .split(' ');

  const deletedBlankSpaceArr: string[] = articleTitle.filter(
    (elemento: string) => elemento.trim() !== '',
  );
  const fixedArticleTitle = deletedBlankSpaceArr.join('-');

  const router = useRouter();
  const { locale } = router;
  const VALUESNAV = locale === 'en' ? VALUESNAV_ENG : VALUESNAV_ESP;

  console.log(fixedArticleTitle);

  console.log(articleTitle);

  return (
    <>
      <Link
        href={{
          pathname: `${VALUESNAV[3].Url}/${fixedArticleTitle}-${articles.id}`,
          query: {
            tags: articles?.attributes?.blog_tags?.data[0].attributes?.name,
          },
        }}>
        <a href={`${VALUESNAV[3].Url}/${fixedArticleTitle}-${articles.id}`}>
          <StylesArticle.Img
            src={articles.attributes.coverImage.data.attributes.url}
            alt={articles.attributes.coverImage.data.attributes.alternativeText}
          />
        </a>
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
            pathname: `${VALUESNAV[3].Url}/${fixedArticleTitle}-${articles.id}`,
            query: {
              tags: articles?.attributes?.blog_tags?.data[0].attributes?.name,
            },
          }}>
          <StylesArticle.TextBlog
            ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
            {...handlers(
              `${VALUESNAV[3].Url}/${fixedArticleTitle}-${articles.id}`,
            )}>
            {articles.attributes.title}
          </StylesArticle.TextBlog>
        </Link>
      </StylesArticle.BlockText>
    </>
  );
}
