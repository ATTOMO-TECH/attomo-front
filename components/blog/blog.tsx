import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Blogstyles } from './style';
import TitleUrl from '../Text/titleUrl';
import ParagraphURL from '../Text/paragraphURL';
import { getLocale } from '../../public/locales/getLocale';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import { Icon } from '../button/style';
import { BUTTON_MODE } from '../../const/const';

interface Props {
  data: any;
  locale: string | undefined;
}

export default function BlockBlog({ data, locale }: Props) {
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

  useEffect(() => {
    const handlePopState = (e: any) => {
      if (window.history.state) {
        // const { x, y } = window.history.state.mousePosition || { x: 0, y: 0 };
        const x = e.pageX;
        const y = -e.pageY;
        window.localStorage.setItem('position', JSON.stringify({ x, y }));
      }
    };
    window.addEventListener('click', handlePopState);

    return () => {
      window.removeEventListener('click', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('position')) {
        const position: any = window.localStorage.getItem('position');
        const positionParse = JSON.parse(position);
        window.scroll({
          top: -positionParse.y - 150,
          behavior: 'smooth',
        });
      }
    }
  }, []);

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
              href={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
              <Blogstyles.BlockImg>
                {data.attributes?.coverImage?.data?.attributes?.url ? (
                  <Image
                    src={data.attributes.coverImage.data.attributes?.url}
                    width={900}
                    height={475}
                    alt={data.attributes.coverImage.data.attributes?.name}
                    id={`${data.id}`}
                  />
                ) : null}
              </Blogstyles.BlockImg>
            </Link>
            <Blogstyles.BlockText>
              <ParagraphURL
                size="text-sm leading-relaxed  "
                url={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.blog_tags.data[0]?.attributes.name}
              </ParagraphURL>
              <TitleUrl
                size="text-xl lg:text-3xl pr-12 md:pr-4 lg:pr-12 leading-loose pt-4 md:pt-0 lg:pt-4 cursor-pointer"
                url={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.title}
              </TitleUrl>
              <ParagraphURL
                size="pr-12 md:pr-4 lg:pr-12 pt-4 md:pt-0 lg:pt-4 text-sm leading-relaxed cursor-pointer"
                url={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                {data.attributes.description}
              </ParagraphURL>

              <Blogstyles.SubText />
              <Link
                href={`${VALUESNAV[3].Url}/${data.attributes.URLSlug}-${data.id}`}>
                <Icon.BlockHidden>
                  <p className="font-Primary font-light text-left text-lg pr-2 text-primary">
                    {translate.trendsReadButton}
                  </p>
                  <Icon.SectionIcon>
                    <Icon.Icon ismode={BUTTON_MODE.LIGHT} />
                  </Icon.SectionIcon>
                  <Image
                    src="/icon/iconBtn.svg"
                    width={8}
                    height={8}
                    alt="button"
                  />
                </Icon.BlockHidden>
              </Link>
            </Blogstyles.BlockText>
          </Blogstyles.Article>
        </motion.div>
      </motion.div>
    </>
  );
}
