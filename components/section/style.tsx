import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';
import { BlurDiv, BtnSelect } from '../../styles/styles';

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
  line-height: 1.5em;
  font-size: 300;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Paragraph = styled.p`
  background: linear-gradient(
    to right,
    #cccfe8 0.04%,
    #ffffff 50.27%,
    #cccfe8 100%
  );
  line-height: 1.5em;
  font-size: 300;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const textTitle = styled.div`
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

export const Styles = {
  SectionProjects: tw.div`lg:m-14 relative z-0 touched`,
  BlockSections: tw.div<Props>`

  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'flex relative flex-col items-end lg:flex-row lg:mt-48 mt-12 '
      : ''}
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.OFF
      ? 'flex relative flex-col items-end lg:flex-row-reverse lg:mt-48 lg:ml-0 '
      : ''}`,
  BlockSection: tw.a<Props>`

  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'lg:w-3/6 w-11/12 -ml-16 ' : ''}
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.OFF
      ? 'lg:w-3/6 w-11/12 lg:ml-10  -mr-16 md:-mr-32 lg:-mr-16 '
      : ''}`,
  BlockText: tw.div<Props>`
   lg:ml-0 
      ${(props) =>
        props.ismode === BUTTON_ACTIVE.ON
          ? 'md:px-20 lg:w-3/6 px-9 py-16 w-full lg:py-0 lg:right-0'
          : ''}
      ${(props) =>
        props.ismode === BUTTON_ACTIVE.OFF
          ? 'md:px-20 lg:w-3/6 px-9 py-16 w-full lg:py-0 lg:left-0 '
          : ''}`,
  OnlyProjectBlock: tw.div`md:pr-64 sm:px-5 lg:w-3/6 w-10/12 py-16 ml-16 lg:py-0 lg:-bottom-10 lg:right-0`,
  BlockMargin: tw.div`lg:py-48 flex flex-col lg:flex-row w-full justify-justify-around`,
  BlockMarginText: tw.div`lg:pt-12`,
  DivideSection: tw.div`h-full flex items-start lg:justify-around flex-col lg:flex-row justify-center w-full`,
  BlockBtn: tw.a`text-primary z-100 w-3/6`,

  SectionImg: tw.section`grid grid-cols-1 sm:grid-cols-2 lg:gap-6 `,
  SectionPrices: tw.section`grid grid-cols-1 sm:grid-cols-3 gap-8 px-12 place-items-center`,
  BlockImg: tw.div`w-full bg-cover bg-center py-44 bg-no-repeat `,
  BlockSelect: tw(
    BlockSelected,
  )`w-5/6 border bg-backCollaplse border-primary rounded-xl overflow-hidden flex flex-col p-4 justify-center items-center text-center  duration-300 ease-in-out cursor-pointer  border-opacity-40 hover:border-opacity-100 py-12 transition delay-100 duration-500 ease-in-out`,
  Paragraph: tw(
    Paragraph,
  )`lg:text-md text-xl  text-sm font-light lg:font-PrimarySerif font-Secundary pt-5 tracking-wide leading-relaxed`,
};

export const StylesCases = {
  CategoryText: tw.h6`font-PrimarySans text-addictional font-light`,
  TitularText: tw.h1`font-Primary text-3xl md:text-5xl font-light py-5 leading-relaxed`,
  Paragraph: tw.p`font-PrimarySans font-extralight pb-5 leading-relaxed text-lg`,
};

export const UsStyles = {
  SectionUs: tw.section`flex flex-wrap justify-between lg:pt-4 pb-5`,
  BlockSubsection: tw.div`lg:w-5/12 pr-10 w-full`,
  Paragraph: tw(
    TextHero,
  )`lg:text-sm sm:text-lg fo text-sm lg:font-thin font-regular font-PrimarySerif pt-5 tracking-wide leading-8`,
  Title: tw(
    textTitle,
  )<Props>`lg:text-sm sm:text-lg  text-sm font-light font-regularm font-PrimarySerif tracking-wide leading-8
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? `textDegrade  ` : 'bg-black '}
      `,
};

export const KitStyles = {
  Section: tw.section`flex flex-wrap justify-between lg:pt-4 pb-5`,
  BlockSubsection: tw.div``,
  BlockNumber: tw.div`rounded-full border w-10 h-10 p-5 flex items-center justify-center`,
  BlockSubsectionImgs: tw.div`lg:w-5/12 w-full flex items-center justify-between py-4`,
  Block: tw.div`lg:w-5/12 pr-10 w-full`,
  Title: tw.p`text-sm font-light font-PrimarySerif tracking-wide  textDegrade`,

  BlockSelectedSub: tw(
    BtnSelect,
  )`border-2  w-full  border-primary text-left p-5  z-10 lg:h-42 rounded-lg opacity-100 font-PrimarySerif font-thin shadow-none grid lg:grid-cols-2 grid-flow-col gap-4 content-center self-stretch place-items-center `,
  BlurBlock: tw(
    BlurDiv,
  )` w-full h-full bg-secundary opacity-100  z-0 absolute bottom-0 left-0 z-0`,
};
