import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../../const/const';
import { StylesArticle, darkTheme, lightTheme } from '../style';
import { handlers } from '../../../hook/longPress';

interface Props {
  articles: any;
  mode: boolean;
}

export default function SlideCases({ articles, mode }: Props) {
  /* console.log(articles); */
  const { company }: any = articles.attributes;
  const { title }: any = articles.attributes;
  const { id } = articles;
  /* console.log(company, title, id); */
  const arrNewSlug = [];
  arrNewSlug.push(company.replaceAll(' ', ''));
  arrNewSlug.push(
    title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replaceAll(/[^\w]/gi, ' ')
      .split(' ')
      .join('-'),
  );
  arrNewSlug.push(id);
  /* console.log(arrNewSlug); */
  const newSlug = arrNewSlug.join('-');
  /* console.log(newSlug); */

  return (
    <>
      <Link href={`/casos/${newSlug}`}>
        <a href={`/casos/${newSlug}`}>
          <StylesArticle.Img
            src={articles.attributes.mainPhoto.data[0].attributes.url}
            alt={
              articles.attributes.mainPhoto.data[0].attributes.alternativeText
            }
          />
        </a>
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
        <Link href={`/casos/${newSlug}`}>
          <StylesArticle.TextBlog
            {...handlers(`/casos/${newSlug}`)}
            ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            {articles.attributes.title}
          </StylesArticle.TextBlog>
        </Link>
      </StylesArticle.BlockText>
    </>
  );
}
