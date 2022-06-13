// eslint-disable-next-line import/no-unresolved
import { useSwiper } from 'swiper/react';
import { useEventListener } from '../../../hook/eventListener';
import { StylesArticle } from '../style';

interface Props {
  prevRef: any;
  nextRef: any;
  mode: any;
  numerSlide: number;
  renderTouch: boolean;
}

export default function ArticlesScrollArrow({
  prevRef,
  nextRef,
  mode,
  numerSlide,
  renderTouch,
}: Props) {
  const swiper = useSwiper();
  if (renderTouch) {
    if (numerSlide > 3) {
      useEventListener('PrevSlide', 'touchstart', () => swiper.slidePrev());
      useEventListener('NextSlide', 'touchstart', () => swiper.slideNext());
    }
  }

  return (
    <>
      <StylesArticle.BlockArrow>
        <StylesArticle.ArrowPrev ref={prevRef} id="PrevSlide">
          <img
            src={!mode ? '/icon/prevDark.svg' : '/icon/prev.svg'}
            width={100}
            height={100}
            alt="prev"
          />
        </StylesArticle.ArrowPrev>

        <StylesArticle.ArrowNext ref={nextRef} id="NextSlide">
          <img
            src={!mode ? '/icon/nextDark.svg' : '/icon/next.svg'}
            width={100}
            height={100}
            alt="next"
          />
        </StylesArticle.ArrowNext>
      </StylesArticle.BlockArrow>
    </>
  );
}
