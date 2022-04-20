// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
import * as qs from 'qs';
// eslint-disable-next-line import/no-unresolved
import { NavigationOptions } from 'swiper/types/modules/public-api';
import Link from 'next/link';
import { darkTheme, lightTheme, StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';
import { useUseAllPost } from '../../../domain/useBlogDetails';
import RenderLoading from '../../loading/loading';

interface Props {
  children: string;
}

export default function ArticlesScroll({ children }: Props) {
  const mode = false;
  const queryObject: any = {
    populate: 'coverImage',
    filters: {
      blog_tags: {
        name: {
          $eq: children,
        },
      },
    },
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data, isLoading } = useUseAllPost(queryQs);

  SwiperCore.use([Pagination, Navigation]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    const navigation = swiper.params.navigation as NavigationOptions;
    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;
  };

  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
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
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}>
        {data.data.map((articles: any) => (
          <SwiperSlide key={articles.Tag} className="swiper ">
            <Link href={`/ATTOMOTrends/${articles.id}`}>
              <div>
                <StylesArticle.Img
                  src={articles.attributes.coverImage.data.attributes.url}
                  alt={articles.Text}
                />
                <StylesArticle.BlockText theme={mode ? lightTheme : darkTheme}>
                  <StylesArticle.TopicText
                    ismode={
                      articles.attributes.coverImage.data.attributes.url === '/'
                        ? BUTTON_ACTIVE.OFF
                        : BUTTON_ACTIVE.ON
                    }
                  />
                  <StylesArticle.TopicText
                    ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                    {articles.attributes.blog_tags.data[0].attributes.name}
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
      </Swiper>
    </>
  );
}
