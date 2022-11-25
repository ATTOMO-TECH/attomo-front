// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, FreeMode, EffectFade } from 'swiper';
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
          <SwiperSlide key={values.Name} className="swiper-wrapper ">
            {
              values.Name === 'Magoni' || values.Name === 'Idealista' || values.Name ==='Tasafy' || values.Name ==='Spherika' || values.Name ==='El Rincón' || values.Name ==='Grupo LALALA' || values.Name ==='Zityhub' ?
                (<a href={values.Url} target='blank' >
                  <img
                    src={values.Pic}
                    width="120px"
                    height="auto"
                    alt={values.Name}
                    loading="lazy"
                    className="object-contain"
                  />
                </a>) :
              <a href={values.Url} target='blank'>
                <img
                  src={values.Pic}
                  width="80px"
                  height="auto"
                  alt={values.Name}
                  loading="lazy"
                  className="object-contain"
                />
              </a>
              }
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
