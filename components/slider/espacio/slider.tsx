// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef, useState, useEffect } from 'react';
import { StylesArticle } from '../style';
import { BGSPACE } from '../../../const/constGlobal';
import ArticlesScrollArrow from '../arrows/arrows';

export default function EspacioArticle() {
  const [prevState, setMyPrev] = useState(null);
  const [nextState, setMyNext] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setMyNext(nextRef.current);
    setMyPrev(prevRef.current);
  }, [BGSPACE]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={{
          prevEl: prevState,
          nextEl: nextState,
        }}>
        {BGSPACE.map((imageSpace: any) => (
          <SwiperSlide key={imageSpace.id} className="swiper ">
            <StylesArticle.BlockImg
              className={imageSpace.img}
              key={imageSpace.id}
            />
          </SwiperSlide>
        ))}
        <ArticlesScrollArrow
          mode
          prevRef={prevRef}
          nextRef={nextRef}
          numerSlide={BGSPACE.length}
        />
      </Swiper>
    </>
  );
}
