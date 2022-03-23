import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};
export const BlockSelected = styled.div`
  &:hover {
    -webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    opacity: 1;
  }
`;
export const TextHero = styled.h2`
  background: linear-gradient(
    to right,
    #cccfe8 0.04%,
    #ffffff 50.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Styles = {
  SectionProjects: tw.div`md:py-14  overflow-hidden relative z-40`,
  BlockSections: tw.div<Props>`
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'flex items-center relative flex-col lg:flex-row lg:mt-48 '
      : ''}
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.OFF
      ? 'sm:flex flex-row-reverse items-center relative lg:mt-48 '
      : ''}`,
  BlockSection: tw.div<Props>`
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'lg:w-3/6 w-11/12 -ml-12 ' : ''}
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.OFF
      ? 'lg:w-3/6 w-11/12 ml-10 lg:ml-0 lg:-mr-12'
      : ''}`,
  BlockText: tw.div<Props>`
${(props) =>
  props.ismode === BUTTON_ACTIVE.ON
    ? 'md:px-20 sm:px-5 lg:w-3/6 px-9 py-16 lg:py-0 lg:absolute lg:-bottom-20 lg:right-0 z-90'
    : ''}
${(props) =>
  props.ismode === BUTTON_ACTIVE.OFF
    ? 'md:px-20 sm:px-5 lg:w-3/6 px-12 py-16 lg:absolute lg:-bottom-32 lg:left-0 '
    : ''}`,
  OnlyProjectBlock: tw.div`md:px-24 sm:px-5 lg:w-3/6 w-10/12 md:px-12 py-16  lg:py-0 lg:absolute lg:-bottom-10 lg:right-0 `,
  BlockMargin: tw.div`lg:py-48 flex flex-col lg:flex-row w-full justify-justify-around`,
  BlockMarginText: tw.div`lg:pt-12`,
  DivideSection: tw.div`h-full flex items-start lg:justify-around flex-col lg:flex-row justify-center w-full`,
  BlockBtn: tw.div`text-primary z-100`,

  SectionImg: tw.section`grid grid-cols-1 sm:grid-cols-2 lg:gap-6 `,
  SectionPrices: tw.section`grid grid-cols-1 sm:grid-cols-3 gap-8 px-12 place-items-center`,
  BlockImg: tw.div`w-full bg-cover bg-center py-44 bg-no-repeat `,
  BlockSelect: tw(
    BlockSelected,
  )`w-5/6 border bg-backCollaplse border-primary rounded-xl overflow-hidden flex flex-col p-4 justify-center items-center text-center  duration-300 ease-in-out cursor-pointer  border-opacity-40 hover:border-opacity-100 py-12 transition delay-100 duration-500 ease-in-out`,
  Paragraph: tw(
    TextHero,
  )`lg:text-sm sm:text-lg fo text-sm lg:font-thin font-regular lg:font-PrimarySerif font-Secundary pt-5 tracking-wide leadi ng-loose`,
};

export const StylesCases = {
  CategoryText: tw.h6`font-PrimarySans text-addictional font-light`,
  TitularText: tw.h3`font-Primary text-3xl md:text-5xl font-light py-5 leading-relaxed`,
  Paragraph: tw.p`font-PrimarySans font-extralight pb-5 leading-relaxed text-lg`,
};

export const UsStyles = {
  SectionUs: tw.section`flex flex-wrap  lg:pt-4 pb-5`,
  BlockSubsection: tw.div`lg:w-6/12 pr-10 w-full`,
};
