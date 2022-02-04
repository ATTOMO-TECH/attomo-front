import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: any;
};

export const Styles = {
  SectionProjects: tw.div`py-14  overflow-hidden`,
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
};

export const StylesCases = {
  CategoryText: tw.h6`font-PrimarySans text-addictional font-light`,
  TitularText: tw.h3`font-Primary text-5xl font-light py-5 leading-relaxed`,
  Paragraph: tw.p`font-PrimarySans font-extralight pb-5 leading-relaxed text-lg`,
};
