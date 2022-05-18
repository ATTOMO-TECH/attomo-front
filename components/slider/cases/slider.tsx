// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef, useState, useEffect } from 'react';
import * as qs from 'qs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { darkTheme, lightTheme, StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';
import { useUseFilterCases } from '../../../domain/useCasesDetails';
import RenderLoading from '../../loading/loading';
import ArticlesScrollArrow from '../arrows/arrows';

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          '460': {
            slidesPerView: 'auto',
          },
          '1024': {
            slidesPerView: 3.5,
          },
        }}
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
                    onTouchStart={() => router.push(`/casos/${articles.id}`)}
                    ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                    {articles.attributes.title}
                  </StylesArticle.TextBlog>
                </StylesArticle.BlockText>
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {data.meta.pagination.total > 2 && (
          <ArticlesScrollArrow
            mode={mode}
            prevRef={prevRef}
            nextRef={nextRef}
            numerSlide={data.meta.pagination.total}
          />
        )}
      </Swiper>
    </>
  );
}
