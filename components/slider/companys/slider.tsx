// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Autoplay } from 'swiper';
import Image from 'next/image';
import { CUSTOMERS } from '../../../const/constGlobal';

export default function CompaniesScroll() {
  SwiperCore.use([Scrollbar, Autoplay]);

  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={2}
        loop
        className="mySwiper hidden lg:block"
        autoplay
        speed={1000}>
        {CUSTOMERS.map((values) => (
          <SwiperSlide key={values.Name} className="">
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
