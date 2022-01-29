import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../const/const';

type Props = {
  ismode: string;
};
export const lightTheme = {
  bodyBg: 'black',
  headings: 'white',
};
export const darkTheme = {
  bodyBg: 'white',
  headings: 'black',
};

export const SectionColor = styled.div`
  color: ${(props) => props.theme.headings};
  background-color: ${(props) => props.theme.bodyBg};
`;

export const Styles = {
  Body: tw(SectionColor)<Props>`
bg-secundary scroll-smooth m-auto
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'overflow-hidden h-screen max-w-full'
      : ''}
  
  `,
  Margin: tw.div`m-auto`,
  Center: tw.section`w-10/12 m-auto`,
  AlingCases: tw.section`w-11/12 ml-auto py-24`,
  AlingCasesNoP: tw.section`w-11/12 ml-auto pb-24`,
  CenterFull: tw.section`w-full lg:w-10/12 m-auto`,
  CenterFlex: tw.section`w-10/12 m-auto flex`,
  BlockMargin: tw.div`lg:py-48 flex flex-col lg:flex-row `,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockButton: tw.div`lg:px-24 pt-10`,
  BlockSlider: tw.div` pb-12`,
  Screen: tw.div`h-screen mb-48 justify-between`,
  ScreenMid: tw.div`h-96 mb-48 justify-between`,
  FlexEnd: tw.div`flex lg:justify-end`,
  TitleSubSection: tw.h5`text-primary py-20 font-Primary text-lg font-light`,
  AlingBlock: tw.div`w-11/12 lg:w-8/12 overflow-x-hidden`,
  BlockInput: tw.div`flex `,
  TextSubSection: tw.h5`font-Primary text-xl font-extralight pb-5`,
  BreakLine: tw.div`h-0.5 opacity-40 bg-addictional w-11/12 m-auto m-4`,
  Input: tw.input`w-full bg-secundary text-primary border-b-2 border-primary focus:outline-none focus:opacity-100 opacity-30 outline-none  py-1 px-1 lg:text-lg text-xl font-light transition-colors duration-400 ease-in-out`,
};
