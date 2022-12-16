import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Blogstyles } from './style';
import TitleUrl from '../Text/titleUrl';
import IconAnimate from '../button/icon';
import SubtextUrl from '../Text/subTextUrl';
import { handlers } from '../../hook/longPress';
import { getLocale } from '../../public/locales/getLocale';

interface Props {
  data: any;
}

export default function BlockBlog({ data }: Props) {
  /** console.log(data) */
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const [translate, setTranslate] = useState(getLocale(locale || 'es'));

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  const variants = {
    hidden: {
      opacity: 0,
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
      opacity: 0,
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
  /* console.log(articleTitle) */

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
              href={`/attomo-trends/${data.attributes.URLSlug}-${data.id}`}
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
                      `/attomo-trends/${data.attributes.URLSlug}-${data.id}`,
                    )}
                  />
                ) : null}
              </Blogstyles.BlockImg>
            </Link>
            <Blogstyles.BlockText>
              <SubtextUrl
                size="text-sm leading-relaxed  "
                url={`/attomo-trends/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.blog_tags.data[0]?.attributes.name}
              </SubtextUrl>
              <TitleUrl
                size="text-xl lg:text-3xl pr-12 md:pr-4 lg:pr-12 leading-loose pt-4 md:pt-0 lg:pt-4 cursor-pointer"
                url={`/attomo-trends/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.title}
              </TitleUrl>
              <SubtextUrl
                size="pr-12 md:pr-4 lg:pr-12 pt-4 md:pt-0 lg:pt-4 text-sm leading-relaxed cursor-pointer"
                url={`/attomo-trends/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.description}
              </SubtextUrl>

              <Blogstyles.SubText />
              <Link
                href={`attomo-trends/${data.attributes.URLSlug}-${data.id}`}
                passHref>
                <a
                  {...handlers(
                    `attomo-trends/${data.attributes.URLSlug}-${data.id}`,
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
