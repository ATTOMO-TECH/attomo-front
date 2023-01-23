import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../../const/const';
import { VALUESNAV } from '../../../const/constGlobal';
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
  // const newSlug = arrNewSlug.join('-');
  /* console.log(newSlug); */
  return (
    <>
      <Link href={`${VALUESNAV[1].Url}/${articles.attributes.URLSlug}-${id}`}>
        <a href={`${VALUESNAV[1].Url}/${articles.attributes.URLSlug}-${id}`}>
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
        <Link href={`${VALUESNAV[1].Url}/${articles.attributes.URLSlug}-${id}`}>
          <a
            {...handlers(
              `${VALUESNAV[1].Url}/${articles.attributes.URLSlug}-${id}`,
            )}>
            <StylesArticle.TextBlog
              ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              {articles.attributes.title}
            </StylesArticle.TextBlog>
          </a>
        </Link>
      </StylesArticle.BlockText>
    </>
  );
}
