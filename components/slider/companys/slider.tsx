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
        className="hidden lg:block swiper-container-free-mode"
        loop
        speed={5000}
        slidesPerView={5}
        autoplay={{ delay: 1 }}
        freeMode>
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
