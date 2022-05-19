import router from 'next/router';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel, Navigation, A11y } from 'swiper';
import { useUseAllSubServices } from '../../../domain/useServices';
import FilterScrollTouchCards from './cardSlide';

interface Props {
  setTopic: (value: any) => void;
}
export default function FilterScrollTouch({ setTopic }: Props) {
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }

  const { data: Subservice, isLoading } = useUseAllSubServices(locale || 'es');

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <Swiper
        slidesPerView={5.5}
        direction="vertical"
        centeredSlides
        freeMode
        slideToClickedSlide
        grabCursor
        onSlideChange={(e: any) => {
          setTopic(Subservice.data[e.activeIndex].attributes.name);
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        mousewheel
        pagination={false}
        modules={[Pagination, Keyboard, Navigation, Mousewheel, A11y]}
        className="mySwiper h-48 w-full filter slide-mask cursor-grab overflow-hidden">
        {Subservice.data.map((values: any, i: number) => (
          <SwiperSlide
            className="font-Primary text-white text-left cursor-grab"
            key={`${values.attributes.name}`}>
            <FilterScrollTouchCards values={values} iDx={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
