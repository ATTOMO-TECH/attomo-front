import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Blogstyles } from './style';
import TitleUrl from '../Text/titleUrl';
import IconAnimate from '../button/icon';
import ParagraphURL from '../Text/paragraphURL';
import { handlers } from '../../hook/longPress';
import { getLocale } from '../../public/locales/getLocale';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';

interface Props {
  data: any;
  locale: string | undefined;
}

export default function BlockBlog({ data, locale }: Props) {
  // console.log(data)

  const [translate, setTranslate] = useState(getLocale(locale || 'es'));
  const VALUESNAV = locale === 'en' ? VALUESNAV_ENG : VALUESNAV_ESP;

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  const variants = {
    hidden: {
      opacity: 0.5,
    },
    show: {
      opacity: 1,
      transition: {
        straggerchildren: 1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0.5,
      y: '20%',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };
  /* const articleTitle = data.attributes.title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replaceAll(/[^\w]/gi, ' ')
    .split(' ')
    .join('-');
  */

  return (
    <>
      <motion.div
        className="children pb-8"
        variants={variants}
        key={data.id}
        initial="hidden"
        animate="show">
        <motion.div variants={item}>
          <Blogstyles.Article>
            <Link
              href={{
                pathname: `${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`,
                query: {
                  tags: data.attributes.blog_tags.data[0]?.attributes.name,
                },
              }}
              passHref>
              <Blogstyles.BlockImg>
                {data.attributes?.coverImage?.data?.attributes?.url ? (
                  <img
                    src={data.attributes.coverImage.data.attributes?.url}
                    width={900}
                    height={700}
                    alt={data.attributes.coverImage.data.attributes?.name}
                    id={`${data.id}`}
                    {...handlers(
                      `/${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`,
                    )}
                  />
                ) : null}
              </Blogstyles.BlockImg>
            </Link>
            <Blogstyles.BlockText>
              <ParagraphURL
                size="text-sm leading-relaxed  "
                tags={data.attributes.blog_tags.data[0].attributes.name}
                url={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.blog_tags.data[0]?.attributes.name}
              </ParagraphURL>
              <TitleUrl
                size="text-xl lg:text-3xl pr-12 md:pr-4 lg:pr-12 leading-loose pt-4 md:pt-0 lg:pt-4 cursor-pointer"
                tags={data.attributes.blog_tags.data[0].attributes.name}
                url={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.title}
              </TitleUrl>
              <ParagraphURL
                size="pr-12 md:pr-4 lg:pr-12 pt-4 md:pt-0 lg:pt-4 text-sm leading-relaxed cursor-pointer"
                tags={data.attributes.blog_tags.data[0].attributes.name}
                url={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.description}
              </ParagraphURL>

              <Blogstyles.SubText />
              <Link
                href={{
                  pathname: `${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`,
                  query: {
                    tags: data.attributes.blog_tags.data[0]?.attributes.name,
                  },
                }}
                passHref>
                <a
                  {...handlers(
                    `${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`,
                  )}
                  className="h-12 w-2/6 relative">
                  <IconAnimate text={translate.trendsReadButton} mode />
                </a>
              </Link>
            </Blogstyles.BlockText>
          </Blogstyles.Article>
        </motion.div>
      </motion.div>
    </>
  );
}
