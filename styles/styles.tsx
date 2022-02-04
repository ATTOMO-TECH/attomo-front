import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../const/const';

type Props = {
  ismode?: string;
  active?: boolean;
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

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const BtnSelect = styled.button<Props>`
  ${({ active }) =>
    active
      ? '-webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.7); -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.7);box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.7);'
      : ''}
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
  CenterFlex: tw.section`w-10/12 m-auto flex py-10 lg:py-0`,
  SectionScreen: tw.section`pt-48 h-auto`,
  BlockSections: tw.div`py-10`,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockButton: tw.div`lg:px-24 pt-10`,
  BlockSlider: tw.div` pb-12`,
  Screen: tw.div`h-screen mb-48 justify-between`,
  ScreenResponsive: tw.div`h-screen pt-24`,
  ScreenMid: tw.div`h-screen flex justify-center items-center justify-between `,
  FlexEnd: tw.div`flex lg:justify-end`,
  TitleSubSection: tw.h5`text-primary py-20 font-Primary text-lg font-light`,
  AlingBlock: tw.div`w-11/12 lg:w-8/12 overflow-x-hidden`,
  BlockInput: tw.div`flex `,
  TextSubSection: tw.h5`font-Primary text-xl font-extralight pb-5`,
  BreakLine: tw.div`h-0.5 opacity-40 bg-addictional lg:w-11/12 w-full  m-auto lg:m-4`,
  Input: tw.input`w-full bg-secundary text-primary border-b-2 border-primary focus:outline-none focus:opacity-100 opacity-30 outline-none  py-1 px-1 lg:text-lg text-xl font-light transition-colors duration-400 ease-in-out`,
  BlockInputSend: tw.div`text-primary flex items-center justify-start flex-col lg:flex-row flex-wrap `,
  SectionInput: tw.div`lg:w-3/6 justify-start`,
  AlingButton: tw.div`w-full lg:pl-24 text-primary pt-10`,
  BlockFullInput: tw.div`lg:w-5/12 w-full `,
  Select: tw(
    Select,
  )`bg-black text-primary outline-none text-sm lg:py-4 font-PrimarySerif font-light ml-5`,

  BtnSelect: tw(
    BtnSelect,
  )`text-primary border-2 border-primary px-14 py-3 rounded-full opacity-80 font-PrimarySerif font-thin shadow-none`,
  TitularText: tw.h3`font-Primary lg:text-5xl text-3xl font-light py-5 leading-relaxed`,
};
