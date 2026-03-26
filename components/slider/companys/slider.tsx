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
        speed={4000}
        slidesPerView={5}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        freeMode>
        {CUSTOMERS.map((values) => (
          <SwiperSlide key={values.Name} className="swiper-wrapper">
            <div className="logo-container">
              <a href={values.Url} target="blank">
                <Image
                  src={values.Pic}
                  // layout='fill'
                  alt={values.Name}
                  loading="lazy"
                  height={170}
                  width={170}
                  className="object-contain"
                />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
