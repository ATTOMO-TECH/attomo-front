// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar } from 'swiper';
import Image from 'next/image';
import { CUSTOMERS } from '../../../const/constGlobal';

export default function CompaniesScroll() {
  SwiperCore.use([Scrollbar]);

  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        className="mySwiper hidden lg:block">
        {CUSTOMERS.map((values) => (
          <SwiperSlide key={values.Name}>
            <Image src={values.Pic} width={160} height={70} alt={values.Name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
