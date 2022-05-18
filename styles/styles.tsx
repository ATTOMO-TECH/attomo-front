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
    font-family: [ 'Merriweather', 'serif' ];
    padding-top: 2%;
    font-size: 2em;
    font-weight: 400;
  }
  h2 {
    font-family: [ 'Merriweather', 'serif' ];
    padding-top: 2%;
    font-size: 1.6em;
    font-weight: 400;
  }
  h3 {
    font-family: [ 'Merriweather', 'serif' ];
    padding-top: 2%;
    font-size: 1.2em;
    font-weight: 400;
  }
  h4 {
    font-family: [ 'Merriweather Sans', 'sans-serif' ];
    background: linear-gradient(
      to right,
      #cccfe8 0.04%,
      #ffffff 40.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5em;
  }
  h5 {
    font-family: [ 'Merriweather Sans', 'sans-serif' ];
    background: linear-gradient(
      to right,
      #cccfe8 0.04%,
      #ffffff 40.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.2em;
  }
  h6 {
    font-family: [ 'Merriweather Sans', 'sans-serif' ];
    background: linear-gradient(
      to right,
      #cccfe8 0.04%,
      #ffffff 40.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5em;
    font-size: 1em;
  }
  p {
    font-family: [ 'Merriweather Sans', 'sans-serif' ];
    background: linear-gradient(
      to right,
      #cccfe8 0.04%,
      #ffffff 40.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1em;
  }
  ol {
    list-style: decimal;
    padding-left: 2%;
  }
  li {
    margin: 10px;
  }
`;

export const SectionColor = styled.div`
  color: ${(props) => props.theme.headings};
  background-color: ${(props) => props.theme.bodyBg};
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: none;
`;
export const subText = styled.h5`
  font-family: 'Merriweather';
  font-style: normal;
`;
export const linkSubmenu = styled.p`
  font-weight: 300;
  line-height: 36px;
`;

export const BtnSelect = styled.button<Props>`
  ${({ active }) =>
    active
      ? '-webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.5); -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.5);box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.5);'
      : ''}
`;

export const Styles = {
  Body: tw(SectionColor)<Props>`
  m-auto overflow-hidden 
  ${(props) =>
    props.mode === BUTTON_ACTIVE.ON
      ? 'overflow-hidden h-screen max-w-full'
      : ''}
  
  `,
  Margin: tw.div`m-auto `,
  Center: tw.section`w-10/12 m-auto`,
  CenterUs: tw.section`lg:w-8/12 w-10/12 m-auto`,
  CenterMargin: tw.section`w-10/12 m-auto lg:pt-36 mt-12  py-16`,
  CenterCases: tw.section`w-full md:w-10/12 m-auto pt-24 lg:pt-36 overflow-hidden flex justify-between`,
  BlockRenderDetails: tw.div`lg:flex flex-col pt-10 hidden relative`,
  BlockFilter: tw.div`w-auto m-auto text-center transform -rotate-90 z-100 -left-4 sm:left-0 md:left-4 top-56 absolute lg:hidden opacity-60 hover:opacity-90  duration-100 ease-in cursor-pointer`,
  AlingCases: tw.section`w-11/12 ml-auto py-24`,
  AlingCasesNoP: tw.section`lg:w-11/12 ml-auto pb-24 pt-6 md:pt-0`,
  CenterFull: tw.section`w-full  lg:w-10/12 m-auto`,
  CenterFlex: tw.section`lg:w-10/12 m-auto flex overflow-hidden`,
  ContainerFull: tw.div`w-full`,
  BlockAddres: tw.div`lg:my-12   lg:w-5/6  m-auto overflow-hidden`,
  SectionScreen: tw.section`lg:pt-48 pt-0 h-auto`,
  BlockSections: tw.div`py-10 relative z-0`,
  DivideSection: tw.div`lg:w-3/6 w-full pb-2`,
  BlockButton: tw.div`lg:px-24 pt-10`,
  BlockSlider: tw.div` pb-12 px-7`,
  BlockTrends: tw.div`lg:pt-48 flex w-full m-auto lg:justify-center items-center pl-8 lg:pl-0 pt-10 pb-16 flex-wrap `,
  // FilterCases
  SelectFilterCases: tw.div`flex w-full m-auto lg:justify-center items-center pl-8 lg:pl-0 pt-10 lg:pt-0 flex-wrap  `,

  // FilterAT
  SectionFilter: tw.div`w-full lg:w-2/12 `,
  SelectFilter: tw.button`w-8/12 lg:w-2/12  `,
  SelectFilterNM: tw.div`w-8/12 lg:w-3/12 lg:ml-4 `,
  BlockUs: tw.div`lg:w-8/12 m-auto flex flex-wrap lg:pt-24`,
  Screen: tw.div`h-screen mb-48 justify-between`,
  ScreenResponsive: tw.div`h-screen pt-24`,
  ScreenMid: tw.div`h-screen flex justify-center items-center justify-between`,
  ScreenMidResponsiv: tw.div`h-96 lg:h-screen flex justify-center items-center justify-between`,
  ScreenWS: tw.div`h-96 sm:h-64 lg:h-4/6 flex justify-center items-center justify-between pt-24 lg:pt-36`,
  FlexEnd: tw.div`flex lg:justify-end w-full m-auto relative`,
  TitleSubSection: tw(
    subText,
  )`font-Primary text-xl font-extralight pb-5 text-primary`,
  AlingBlock: tw.div`w-10/12 lg:w-full overflow-x-hidden m-auto `,
  BlockInput: tw.div`flex `,
  BlockSelected: tw.div`lg:w-10/12 m-auto flex flex-wrap py-24`,
  TextSubSection: tw.h5`font-Primary text-xl font-extralight pb-5`,
  BreakLine: tw.div`h-0.5 opacity-40 bg-addictional w-full  m-auto mt-6  lg:my-4`,
  Input: tw.input`w-full bg-secundary text-primary border-b-2 border-primary focus:outline-none focus:opacity-100 opacity-30 outline-none  py-1 px-1 lg:text-lg text-xl font-light transition-colors duration-400 ease-in-out`,
  BlockInputSend: tw.div`text-primary flex items-center justify-start flex-row flex-wrap `,
  SectionInput: tw.div`lg:w-3/6 justify-start`,
  AlingButton: tw.div`w-full lg:pl-24 text-primary pt-10`,
  BlockFullInput: tw.div`lg:w-4/12 w-full pt-4 lg:pt-0 lg:pl-12`,
  BlockContact: tw.div`pt-48`,
  BlockAddresMap: tw.div`lg:my-12 my-12  lg:w-4/6  m-auto overflow-hidden`,
  Select: tw(
    Select,
  )`bg-none text-gray-300 outline-none text-sm py-5 font-PrimarySerif font-light lg:ml-5 outline-none font-PrimarySerif font-thin text-gray-300 borderInput w-1/6 trend text-sm opacity-50 hover:opacity-90 transition ease-in-out duration-300`,
  BlockDiv: tw.div`flex flex-col w-full `,
  BtnSelect: tw(
    BtnSelect,
  )`text-primary border-2 border-primary px-14 py-3 rounded-full opacity-80 font-PrimarySerif font-thin shadow-none`,
  TitularText: tw.h3`font-Primary  lg:text-4xl text-2xl font-light py-5 leading-relaxed`,
  // SPACE
  HeroEspace: tw.section`h-auto bg-hero-Space bg-cover bg-center py-72 bg-no-repeat mt-12 lg:mt-48`,
  SectionImg: tw.section`grid grid-cols-1 sm:grid-cols-2 gap-6`,
  SectionPrices: tw.section`grid grid-cols-1 sm:grid-cols-3 gap-6`,
  BlockImg: tw.div`w-full bg-cover bg-center py-44 bg-no-repeat `,
  // DETAILS SERVICES
  SelectSubMenu: tw(
    linkSubmenu,
  )<Props>`w-full cursor-pointer font-PrimarySerif font-thin md:text-sm leading-loose  pl-2 text-sm hover:opacity-90 transition-colors duration-300 ease-in-out
  ${(props) => (props.mode === BUTTON_ACTIVE.ON ? 'opacity-100' : 'opacity-50')}
`,
  SpaceCollapse: tw.div`lg:py-48 overflow-hidden`,

  // ACTIVESELECT
  FilterSelectActive: tw.div<Props>`
  lg:w-10/12 w-full cursor-pointer text-gray-300 font-light border-b text-left py-4 transition duration-300 ease-in-out
  ${(props) =>
    props.mode === BUTTON_ACTIVE.ON ? ' opacity-30' : ' opacity-70'}
  
  `,
  // SUBMENU
  SubMenuBlock: tw.div`w-full lg:w-10/12 m-auto flex flex-wrap`,
  ButtonSubMenu: tw.button`font-PrimarySerif text-md uppercase py-1 font-light text-xl lg:text-md`,
  BlockSubSection: tw.div`flex flex-col relative pl-1`,
  // LEGAL
  BlockButtonLegal: tw.div`lg:w-1/6 mt-5 md:mt-12 lg:mt-24`,
  BlockBack: tw.div`w-full py-10`,
  SectionTextLegal: tw.div`pb-48`,
};
