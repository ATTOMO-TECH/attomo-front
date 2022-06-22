import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../../const/const';
import { StylesArticle, darkTheme, lightTheme } from '../style';
import { handlers } from '../../../hook/longPress';

interface Props {
  articles: any;
  mode: boolean;
}

export default function SlideCases({ articles, mode }: Props) {
  return (
    <>
      <Link href={`/casos/${articles.id}`}>
        <span {...handlers(`/casos/${articles.id}`)}>
          <StylesArticle.Img
            src={articles.attributes.mainPhoto.data[0].attributes.url}
            alt={
              articles.attributes.mainPhoto.data[0].attributes.alternativeText
            }
          />
        </span>
      </Link>
      <StylesArticle.BlockText theme={mode === false ? lightTheme : darkTheme}>
        <StylesArticle.TopicText
          ismode={
            articles.attributes.mainPhoto.data[0].attributes.url === '/'
              ? BUTTON_ACTIVE.OFF
              : BUTTON_ACTIVE.ON
          }>
          {articles.attributes.name}
        </StylesArticle.TopicText>
        <Link href={`/casos/${articles.id}`}>
          <StylesArticle.TextBlog
            {...handlers(`/casos/${articles.id}`)}
            ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            {articles.attributes.title}
          </StylesArticle.TextBlog>
        </Link>
      </StylesArticle.BlockText>
    </>
  );
}
