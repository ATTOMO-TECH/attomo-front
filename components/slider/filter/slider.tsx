// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useState } from 'react';
import { DEPARTMENT } from '../../../const/constGlobal';
import { StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';

export default function FilterScroll() {
  const [iDx, handleClick] = useState(0);
  return (
    <>
      <Swiper
        slidesPerView={5.5}
        direction="vertical"
        centeredSlides
        freeMode
        mousewheel={{
          releaseOnEdges: true,
        }}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper h-48 w-full">
        {DEPARTMENT.map((values, i) => (
          <SwiperSlide className="font-Primary text-Primary">
            <>
              <StylesArticle.Slide
                ismode={i === iDx ? BUTTON_ACTIVE.ON : ''}
                key={values.label}
                active={i === iDx}
                onClick={() => handleClick(i)}
                onChange={(e: any) => e.target.value}>
                {values.label}
              </StylesArticle.Slide>
            </>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
