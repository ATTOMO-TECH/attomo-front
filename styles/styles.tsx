import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../const/const';

type Props = {
  ismode: string;
};

export const Styles = {
  Body: tw.body<Props>`
bg-secundary scroll-smooth m-auto
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'overflow-hidden h-screen max-w-full'
      : ''}
  
  `,
  Center: tw.section`w-10/12 m-auto`,
  CenterFull: tw.section`w-full lg:w-10/12 m-auto`,
  CenterFlex: tw.section`w-10/12 m-auto flex`,
  BlockMargin: tw.div`lg:py-48 flex flex-col lg:flex-row `,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockButton: tw.div`lg:px-24 pt-10`,
  BlockSlider: tw.div` pb-12`,
};
