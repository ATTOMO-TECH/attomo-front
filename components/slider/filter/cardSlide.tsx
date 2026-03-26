// eslint-disable-next-line import/no-unresolved
import { useSwiper } from 'swiper/react';
import { StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';

interface Props {
  values: any;
  iDx: any;
}
export default function FilterScrollTouchCards({ values, iDx }: Props) {
  const swiper = useSwiper();

  return (
    <>
      <StylesArticle.Slide
        name={values.attributes.name}
        ismode={swiper.realIndex === iDx ? BUTTON_ACTIVE.ON : ''}
        value={values.attributes.name}>
        <StylesArticle.BlockSlider>
          {values.attributes.name}
        </StylesArticle.BlockSlider>
      </StylesArticle.Slide>
    </>
  );
}
