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
  Margin: tw.div`m-auto`,
  Center: tw.section`w-10/12 m-auto`,
  CenterFull: tw.section`w-full lg:w-10/12 m-auto`,
  CenterFlex: tw.section`w-10/12 m-auto flex`,
  BlockMargin: tw.div`lg:py-48 flex flex-col lg:flex-row `,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockButton: tw.div`lg:px-24 pt-10`,
  BlockSlider: tw.div` pb-12`,
  Screen: tw.div`h-screen justify-between`,
  FlexEnd: tw.div`flex lg:justify-end`,
  TitleSubSection: tw.h5`text-primary py-20 font-Primary text-lg font-light`,
  AlingBlock: tw.div`w-11/12 lg:w-8/12 overflow-x-hidden`,
  BlockInput: tw.div`flex `,
  Input: tw.input`w-full bg-secundary text-primary border-b-2 border-primary focus:outline-none focus:opacity-100 opacity-30 outline-none  py-1 px-1 lg:text-lg text-xl font-light transition-colors duration-400 ease-in-out`,
};
