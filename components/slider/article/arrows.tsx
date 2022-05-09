import { StylesArticle } from '../style';

interface Props {
  prevRef: any;
  nextRef: any;
  mode: any;
}

export default function ArticlesScrollArrow({ prevRef, nextRef, mode }: Props) {
  return (
    <>
      <StylesArticle.BlockArrow>
        <StylesArticle.ArrowPrev ref={prevRef} id="Oescuchaesto">
          <img
            src={!mode ? '/icon/prevDark.svg' : '/icon/prev.svg'}
            width={100}
            height={100}
            alt="prev"
          />
        </StylesArticle.ArrowPrev>

        <StylesArticle.ArrowNext
          ref={nextRef}
          id="nextSlide"
          onMouseMoveCapture={nextRef}>
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
