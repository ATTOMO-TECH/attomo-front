// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRef, useState, useEffect } from 'react';
import * as qs from 'qs';
// eslint-disable-next-line import/no-unresolved
import { NavigationOptions } from 'swiper/types/modules/public-api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { darkTheme, lightTheme, StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';
import { useUseFilterCases } from '../../../domain/useCasesDetails';
import RenderLoading from '../../loading/loading';

interface Props {
  mode: boolean;
  filter: string;
  id: string | string[] | undefined;
}

export default function CasesScroll({ mode, filter, id }: Props) {
  const [prevState, setMyPrev] = useState(null);
  const [nextState, setMyNext] = useState(null);

  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }

  const queryObject: any = {
    filters: {
      id: {
        $ne: id,
      },
      subservice: {
        name: {
          $containsi: filter,
        },
      },
    },
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data, isLoading } = useUseFilterCases(locale || 'es', queryQs);

  SwiperCore.use([Pagination, Navigation]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    swiper.params.navigation as NavigationOptions;
  };

  useEffect(() => {
    setMyNext(nextRef.current);
    setMyPrev(prevRef.current);
  }, [data]);

  if (isLoading) {
    return <RenderLoading mode={false} />;
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          '460': {
            slidesPerView: 'auto',
          },
          '640': {
            slidesPerView: 'auto',
          },
          '1024': {
            slidesPerView: 3.5,
          },
        }}
        onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: prevState,
          nextEl: nextState,
        }}>
        {data.data.map((articles: any) => (
          <SwiperSlide key={articles.attributes.company} className="swiper ">
            <Link href={`/casos/${articles.id}`}>
              <div className="cursor-pointer">
                <StylesArticle.Img
                  src={articles.attributes.mainPhoto.data[0].attributes.url}
                  alt={
                    articles.attributes.mainPhoto.data[0].attributes
                      .alternativeText
                  }
                />
                <StylesArticle.BlockText
                  theme={mode === false ? lightTheme : darkTheme}>
                  <StylesArticle.TopicText
                    ismode={
                      articles.attributes.mainPhoto.data[0].attributes.url ===
                      '/'
                        ? BUTTON_ACTIVE.OFF
                        : BUTTON_ACTIVE.ON
                    }>
                    {articles.attributes.name}
                  </StylesArticle.TopicText>
                  <StylesArticle.TextBlog
                    ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                    {articles.attributes.title}
                  </StylesArticle.TextBlog>
                </StylesArticle.BlockText>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {data.meta.pagination.total > 2 && (
          <StylesArticle.BlockArrow>
            <StylesArticle.ArrowPrev ref={prevRef}>
              <img
                src={!mode ? '/icon/prevDark.svg' : '/icon/prev.svg'}
                width={100}
                height={100}
                alt="prev"
              />
            </StylesArticle.ArrowPrev>
            <StylesArticle.ArrowNext ref={nextRef}>
              <img
                src={!mode ? '/icon/nextDark.svg' : '/icon/next.svg'}
                width={100}
                height={100}
                alt="next"
              />
            </StylesArticle.ArrowNext>
          </StylesArticle.BlockArrow>
        )}
      </Swiper>
    </>
  );
}
