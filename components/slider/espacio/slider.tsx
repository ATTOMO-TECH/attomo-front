// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { NavigationOptions } from 'swiper/types/modules/public-api';
import { StylesArticle } from '../style';
import { BGSPACE } from '../../../const/constGlobal';

export default function EspacioArticle() {
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
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper SwiperSpace"
        slidesPerView={1}
        onBeforeInit={onBeforeInit}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}>
        {BGSPACE.map((imageSpace: any) => (
          <SwiperSlide key={imageSpace.id} className="swiper ">
            <StylesArticle.BlockImg
              className={imageSpace.img}
              key={imageSpace.id}
            />
          </SwiperSlide>
        ))}
        <StylesArticle.BlockArrowSpace>
          <StylesArticle.ArrowSpace ref={prevRef}>
            <img src="/icon/prev.svg" width={100} height={100} alt="prev" />
          </StylesArticle.ArrowSpace>
          <StylesArticle.ArrowSpace ref={nextRef}>
            <img src="/icon/next.svg" width={100} height={100} alt="next" />
          </StylesArticle.ArrowSpace>
        </StylesArticle.BlockArrowSpace>
      </Swiper>
    </>
  );
}
