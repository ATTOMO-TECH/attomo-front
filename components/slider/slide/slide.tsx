import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../../const/const';
import { StylesArticle, darkTheme, lightTheme } from '../style';
import { handlers } from '../../../hook/longPress';

interface Props {
  articles: any;
  mode: boolean;
}

export default function Slide({ articles, mode }: Props) {
  return (
    <>
      <Link href={`/ATTOMOTrends/${articles.id}`}>
        <span {...handlers(`/ATTOMOTrends/${articles.id}`)}>
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
        <StylesArticle.TextBlog
          ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
          {...handlers(`/ATTOMOTrends/${articles.id}`)}>
          {articles.attributes.title}
        </StylesArticle.TextBlog>
      </StylesArticle.BlockText>
    </>
  );
}
