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
          <SwiperSlide key={values.Name} className="swiper-wrapper">
            {values.Name === 'Magoni' ||
            values.Name === 'Idealista' ||
            values.Name === 'Spherika' ||
            values.Name === 'El Rincón' ||
            values.Name === 'Grupo LALALA' ||
            values.Name === 'Zityhub' ||
            values.Name === 'Zagal1200' ||
            values.Name === 'Clínica Dermatológica Internacional' ||
            values.Name === 'Viandas' ||
            values.Name === 'La Lupita' ||
            values.Name === 'Keiko' ||
            values.Name === 'MRGO Arquitectos' ||
            values.Name === 'Kilbourne' ||
            values.Name === 'La joya' ||
            values.Name === 'Metodo R' ||
            values.Name === 'DEM' ||
            values.Name === 'Treescoliving' ? (
              <div className="logo-container ">
                <a href={values.Url} target="blank">
                  <img
                    src={values.Pic}
                    width={
                      values.Name === 'Clínica Dermatológica Internacional' ||
                      values.Name === 'Magoni' ||
                      values.Name === 'Zagal1200' ||
                      values.Name === 'Idealista' ||
                      values.Name === 'Grupo LALALA' ||
                      values.Name === 'Treescoliving' ||
                      values.Name === 'Viandas' ||
                      values.Name === 'El Rincón' ||
                      values.Name === 'Spherika' ||
                      values.Name === 'La Lupita' ||
                      values.Name === 'Keiko' ||
                      values.Name === 'Metodo R' ||
                      values.Name === 'Kilbourne' ||
                      values.Name === 'MRGO Arquitectos'
                        ? '190px'
                        : '140px'
                    }
                    height="auto"
                    alt={values.Name}
                    loading="lazy"
                    className="object-contain"
                  />
                </a>
              </div>
            ) : (
              <div className="logo-container">
                <a href={values.Url} target="blank">
                  <img
                    src={values.Pic}
                    width={
                      values.Name === 'Real Sociedad FC' ||
                      values.Name === 'Sevilla FC' ||
                      values.Name === 'VIVLA' ||
                      values.Name === 'La joya' ||
                      values.Name === 'Agruppa'
                        ? '90px'
                        : '100px'
                    }
                    height="auto"
                    alt={values.Name}
                    loading="lazy"
                    className="object-contain"
                  />
                </a>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
