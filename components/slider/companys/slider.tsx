// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode, EffectFade } from 'swiper';
import Image from 'next/image';
import { CUSTOMERS } from '../../../const/constGlobal';

export default function CompaniesScroll() {
  SwiperCore.use([Autoplay, FreeMode, EffectFade]);

  return (
    <>
      <Swiper
        slidesPerView={5.5}
        loop
        className="hidden lg:block swiper-play swiper-container-free-mode"
        speed={1200}
        freeMode
        grabCursor
        autoplay={{ delay: 0 }}>
        {CUSTOMERS.map((values) => (
          <SwiperSlide key={values.Name} className="swiper-wrapper">
            <Image
              src={values.Pic}
              width="100%"
              height="100%"
              alt={values.Name}
              objectFit="contain"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
