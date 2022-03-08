// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { NavigationOptions } from 'swiper/types/modules/public-api';
import { darkTheme, lightTheme, StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';

interface Props {
  mode: boolean;
  array: any[];
}

export default function ArticlesScroll({ mode, array }: Props) {
  SwiperCore.use([Pagination, Navigation]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const onBeforeInit = (swiper: SwiperCore): void => {
    const navigation = swiper.params.navigation as NavigationOptions;
    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;
  };

  return (
    <>
      <Swiper
        breakpoints={{
          '460': {
            slidesPerView: 1,
          },
          '640': {
            slidesPerView: 3.5,
          },
          '768': {
            slidesPerView: 3.5,
          },
        }}
        slidesPerView={3.5}
        spaceBetween={0}
        onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper ">
        {array.map((values) => (
          <SwiperSlide key={values.Tag} className="swiper">
            <StylesArticle.BlockImg>
              {values.Pic ? (
                <Image
                  src={values.Pic}
                  width={300}
                  height={200}
                  alt={values.Text}
                />
              ) : (
                ''
              )}
            </StylesArticle.BlockImg>
            <StylesArticle.BlockText
              theme={mode === false ? lightTheme : darkTheme}>
              <StylesArticle.TopicText
                ismode={
                  values.Topic === '' ? BUTTON_ACTIVE.OFF : BUTTON_ACTIVE.ON
                }>
                {values.Topic}
              </StylesArticle.TopicText>
              <StylesArticle.TextBlog>{values.Text}</StylesArticle.TextBlog>
            </StylesArticle.BlockText>
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
