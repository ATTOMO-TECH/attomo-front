import router from 'next/router';
import { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, Mousewheel } from 'swiper';
import { useUseAllSubServices } from '../../../domain/useServices';
import { StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';

interface Props {
  setTopic: (value: any) => void;
  initialValue?: any;
}
export default function FilterScrollTouch({
  setTopic,
  initialValue = '',
}: Props) {
  const [iDx, handleClick] = useState(0);
  const [value, setValue] = useState(initialValue);

  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }

  const { data: Subservice, isLoading } = useUseAllSubServices(locale || 'es');

  useEffect(() => {
    setTopic(value);
  }, [value]);

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
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        mousewheel={{
          releaseOnEdges: true,
        }}
        pagination={false}
        modules={[Pagination, Keyboard, Mousewheel]}
        className="mySwiper h-48 w-full filter ">
        {Subservice.data.map((values: any, i: number) => (
          <div
            className="bg-red-100 absolute z-100"
            key={`${values.attributes.name}-1`}>
            <SwiperSlide className="font-Primary text-white text-left cursor-pointer">
              <StylesArticle.Slide
                ismode={i === iDx ? BUTTON_ACTIVE.ON : ''}
                active={i === iDx}
                onClick={() => {
                  handleClick(i);
                  setValue(values.attributes.name);
                }}
                onChange={(e: any) => {
                  setValue(e.target.value);
                }}>
                {values.attributes.name}
              </StylesArticle.Slide>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}
