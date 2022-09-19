import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../../const/const';
import { StylesArticle, darkTheme, lightTheme } from '../style';
import { handlers } from '../../../hook/longPress';

interface Props {
  articles: any;
  mode: boolean;
}

export default function Slide({ articles, mode }: Props) {
  const articleTitle = articles.attributes.title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^\w]/gi, ' ')
    .split(' ')
    .join('-');

  /* console.log(articleTitle) */

  return (
    <>
      <Link href={`/attomo-trends/${articleTitle}-${articles.id}`}>
        <span {...handlers(`/attomo-trends/${articleTitle}-${articles.id}`)}>
          <StylesArticle.Img
            src={articles.attributes.coverImage.data.attributes.url}
            alt={articles.Text}
          />
        </span>
      </Link>
      <StylesArticle.BlockText theme={mode === false ? lightTheme : darkTheme}>
        <StylesArticle.TopicText
          ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        />
        <StylesArticle.TopicText ismode={BUTTON_ACTIVE.ON}>
          {articles.attributes.blog_tags.data[0].attributes.name}
        </StylesArticle.TopicText>
        <Link href={`/attomo-trends/${articleTitle}-${articles.id}`}>
          <StylesArticle.TextBlog
            ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
            {...handlers(`/attomo-trends/${articleTitle}-${articles.id}`)}>
            {articles.attributes.title}
          </StylesArticle.TextBlog>
        </Link>
      </StylesArticle.BlockText>
    </>
  );
}
