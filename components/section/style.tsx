import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};
export const BlockSelected = styled.div`
  // -webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.2);
  // -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.2);
  // box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.2);
`;

export const Styles = {
  SectionProjects: tw.div`py-14  overflow-hidden relative z-40`,
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
  OnlyProjectBlock: tw.div`md:px-24 sm:px-5 lg:w-3/6 px-12 py-16  lg:py-0 lg:absolute lg:-bottom-10 lg:right-0 `,
  BlockMargin: tw.div`lg:py-48 flex flex-col lg:flex-row items-start`,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockBtn: tw.div`text-primary z-100`,

  SectionImg: tw.section`grid grid-cols-1 sm:grid-cols-2 lg:gap-6 `,
  SectionPrices: tw.section`grid grid-cols-1 sm:grid-cols-3 gap-8 px-12 place-items-center`,
  BlockImg: tw.div`w-full bg-cover bg-center py-44 bg-no-repeat `,
  BlockSelect: tw(
    BlockSelected,
  )`w-5/6 border bg-black border-primary rounded-xl overflow-hidden flex flex-col p-4 justify-center items-center text-center  duration-300 ease-in-out cursor-pointer  border-opacity-40 hover:border-opacity-100 py-12`,
};

export const StylesCases = {
  CategoryText: tw.h6`font-PrimarySans text-addictional font-light`,
  TitularText: tw.h3`font-Primary text-5xl font-light py-5 leading-relaxed`,
  Paragraph: tw.p`font-PrimarySans font-extralight pb-5 leading-relaxed text-lg`,
};
