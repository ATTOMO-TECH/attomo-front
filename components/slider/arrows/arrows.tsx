// eslint-disable-next-line import/no-unresolved
import { useSwiper } from 'swiper/react';
import { StylesArticle } from '../style';

interface Props {
  prevRef: any;
  nextRef: any;
  mode: any;
}

export default function ArticlesScrollArrow({ prevRef, nextRef, mode }: Props) {
  const swiper = useSwiper();
  return (
    <>
      <StylesArticle.BlockArrow>
        <StylesArticle.ArrowPrev
          ref={prevRef}
          onTouchStart={() => swiper.slidePrev()}>
          <img
            src={!mode ? '/icon/prevDark.svg' : '/icon/prev.svg'}
            width={100}
            height={100}
            alt="prev"
          />
        </StylesArticle.ArrowPrev>

        <StylesArticle.ArrowNext
          ref={nextRef}
          onTouchStart={() => swiper.slideNext()}>
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
