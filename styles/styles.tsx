import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../const/const';

type Props = {
  mode?: string;
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
export const Sticky2Styled = styled.div`
  overflow: hidden;
  .section {
    height: 70vh;
    background: linear-gradient(160deg, #f47c66 0%, #e51906 100%);
  }
  .sticky,
  .sticky2 {
    height: 100vh;
    background: linear-gradient(
      160deg,
      #e4f5fc 0%,
      #bfe8f9 26%,
      #9fd8ef 59%,
      #0068f2 100%
    );
    width: 100%;
    & .animation,
    .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
      & svg {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100%;
      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 10%;
        margin: 0;
      }
    }
  }
`;

export const ContainerLegal = styled(ReactMarkdown)`
  margin-top: 2%;
  * {
    font-family: [ 'Merriweather Sans', 'sans-serif' ];
    background: linear-gradient(
      to right,
      #cccfe8 0.04%,
      #ffffff 40.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  h1 {
    padding-top: 2%;
    font-size: 2em;
    font-weight: 400;
  }
  h2 {
  }
  p {
  }
`;

export const SectionColor = styled.div`
  color: ${(props) => props.theme.headings};
  background-color: ${(props) => props.theme.bodyBg};
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;
export const subText = styled.h5`
  font-family: 'Merriweather';
  font-style: normal;
`;

export const BtnSelect = styled.button<Props>`
  ${({ active }) =>
    active
      ? '-webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.5); -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.5);box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.5);'
      : ''}
`;

export const Styles = {
  Body: tw(SectionColor)<Props>`
 scroll-smooth m-auto overflow-hidden
  ${(props) =>
    props.mode === BUTTON_ACTIVE.ON
      ? 'overflow-hidden h-screen max-w-full'
      : ''}
  
  `,
  Margin: tw.div`m-auto `,
  Center: tw.section`w-10/12 m-auto`,
  CenterMargin: tw.section`w-10/12 m-auto lg:pt-36  py-16`,
  CenterCases: tw.section`w-full md:w-10/12 m-auto pt-24 lg:pt-36 overflow-hidden flex justify-between`,
  BlockRenderDetails: tw.div`lg:flex flex-col pt-10 hidden relative`,
  BlockFilter: tw.div`w-auto m-auto text-center transform -rotate-90 z-80 -left-4 sm:left-0 md:left-4 top-56 absolute lg:hidden opacity-60 hover:opacity-90  duration-100 ease-in cursor-pointer`,
  AlingCases: tw.section`w-11/12 ml-auto py-24`,
  AlingCasesNoP: tw.section`w-11/12 ml-auto pb-24 pt-6 md:pt-0`,
  CenterFull: tw.section`w-full  lg:w-10/12 m-auto`,
  CenterFlex: tw.section`lg:w-10/12 m-auto flex overflow-hidden`,
  ContainerFull: tw.div`w-full`,
  BlockAddres: tw.div`lg:my-12 my-12  lg:w-5/6  m-auto overflow-hidden`,
  SectionScreen: tw.section`lg:pt-48 pt-24 h-auto`,
  BlockSections: tw.div`py-10`,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockButton: tw.div`lg:px-24 pt-10`,
  BlockSlider: tw.div` pb-12 px-7`,
  BlockTrends: tw.div`lg:pt-48 flex w-full m-auto lg:justify-center justify-start pl-8 lg:pl-0 pt-36 pb-16 `,
  BlockUs: tw.div`lg:w-8/12 m-auto flex flex-wrap lg:pt-24`,
  Screen: tw.div`h-screen mb-48 justify-between`,
  ScreenResponsive: tw.div`h-screen pt-24`,
  ScreenMid: tw.div`h-screen flex justify-center items-center justify-between`,
  FlexEnd: tw.div`flex lg:justify-end`,
  TitleSubSection: tw(
    subText,
  )`font-Primary text-xl font-extralight pb-5 text-primary`,
  AlingBlock: tw.div`w-10/12 lg:w-full overflow-x-hidden m-auto pb-12`,
  BlockInput: tw.div`flex `,
  BlockSelected: tw.div`lg:w-10/12 m-auto flex flex-wrap py-0`,
  TextSubSection: tw.h5`font-Primary text-xl font-extralight pb-5`,
  BreakLine: tw.div`h-0.5 opacity-40 bg-addictional w-full  m-auto lg:my-4`,
  Input: tw.input`w-full bg-secundary text-primary border-b-2 border-primary focus:outline-none focus:opacity-100 opacity-30 outline-none  py-1 px-1 lg:text-lg text-xl font-light transition-colors duration-400 ease-in-out`,
  BlockInputSend: tw.div`text-primary flex items-center justify-start flex-row flex-wrap `,
  SectionInput: tw.div`lg:w-3/6 justify-start`,
  AlingButton: tw.div`w-full lg:pl-24 text-primary pt-10`,
  BlockFullInput: tw.div`lg:w-5/12 w-full `,
  BlockContact: tw.div`pt-48`,
  BlockAddresMap: tw.div`lg:my-12 my-12  lg:w-4/6  m-auto overflow-hidden`,
  Select: tw(
    Select,
  )`bg-backCollaplse text-primary outline-none text-sm lg:py-4 font-PrimarySerif font-light ml-5`,
  BlockDiv: tw.div`flex flex-col `,
  BtnSelect: tw(
    BtnSelect,
  )`text-primary border-2 border-primary px-14 py-3 rounded-full opacity-80 font-PrimarySerif font-thin shadow-none`,
  TitularText: tw.h3`font-PrimarySerif  lg:text-4xl text-3xl font-light py-5 leading-relaxed`,
  // SPACE
  HeroEspace: tw.section`h-auto bg-hero-Space bg-cover bg-center py-72 bg-no-repeat`,
  SectionImg: tw.section`grid grid-cols-1 sm:grid-cols-2 gap-6`,
  SectionPrices: tw.section`grid grid-cols-1 sm:grid-cols-3 gap-6`,
  BlockImg: tw.div`w-full bg-cover bg-center py-44 bg-no-repeat `,
  // DETAILS SERVICES
  SelectSubMenu: tw.a<Props>`cursor-pointer font-PrimarySerif font-thin md:text-sm leading-loose  pl-2 text-sm
  ${(props) => (props.mode === BUTTON_ACTIVE.ON ? 'opacity-100' : 'opacity-50')}
`,
  SpaceCollapse: tw.div`lg:py-48 overflow-hidden`,
  // SUBMENU
  SubMenuBlock: tw.div`w-2/6`,
  ButtonSubMenu: tw.button`font-PrimarySerif text-xl uppercase py-2`,
  BlockSubSection: tw.div`flex flex-col relative pl-1`,
  // LEGAL
  BlockButtonLegal: tw.div`"w-2/6 mt-5 md:mt-12 lg:mt-24`,
  BlockBack: tw.div`w-full py-10`,
  SectionTextLegal: tw.div`pb-48`,
};
