// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import { useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { NavigationOptions } from 'swiper/types/modules/public-api';
import { ARTICLES } from '../../../const/constGlobal';
import { StylesArticle } from '../style';

export default function ArticlesScroll() {
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
            slidesPerView: 2,
          },
          '768': {
            slidesPerView: 2.5,
          },
        }}
        slidesPerView={2.5}
        spaceBetween={0}
        loop
        onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper ">
        {ARTICLES.map((values) => (
          <SwiperSlide key={values.Tag}>
            <StylesArticle.BlockImg>
              <Image
                src={values.Pic}
                layout="responsive"
                width={300}
                height={200}
                alt={values.Text}
              />
            </StylesArticle.BlockImg>

            <StylesArticle.TextBlog>{values.Text}</StylesArticle.TextBlog>
          </SwiperSlide>
        ))}
        <StylesArticle.BlockArrow>
          <StylesArticle.ArrowPrev ref={prevRef}>
            <Image src="/icon/prev.svg" width={100} height={100} alt="prev" />
          </StylesArticle.ArrowPrev>
          <StylesArticle.ArrowNext ref={nextRef}>
            <Image src="/icon/next.svg" width={100} height={100} alt="next" />
          </StylesArticle.ArrowNext>
        </StylesArticle.BlockArrow>
      </Swiper>
    </>
  );
}
