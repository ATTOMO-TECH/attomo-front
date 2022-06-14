import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};
export const lightTheme = {
  bodyBg: '#0F0C11',
  headings: 'white',
};
export const darkTheme = {
  bodyBg: 'white',
  headings: '#0F0C11',
};

export const SectionColor = styled(motion.nav)`
  color: ${(props) => props.theme.headings};
  background-color: ${(props) => props.theme.bodyBg};
`;
export const Section = styled(motion.nav)`
  color: ${(props) => props.theme.headings};
  background-color: ${(props) => props.theme.bodyBg};
  z-index: 100 !important;
  @media screen and (max-height: 300px) {
    display: block;
  }
`;
export const itemMenu = styled.h6`
  font-family: 'Merriweather', 'serif';
  font-style: normal;
  font-weight: 300;
  @media only screen and (max-width: 468px) {
    font-size: 1.3em;
  }
`;
export const Logo = styled.div`
  &:after {
    content: url('/icon/after.svg');
    position: absolute;
    margin: auto;
    right: 1em;
    top: 0.4em;
    transition: all 1s ease-in-out;
  }
  &:before {
    content: url('/icon/before.svg');
    position: absolute;
    margin: auto;
    transition: all 1s ease-in;
    border-radius: 100%;
  }
`;
export const LogoInvert = styled.div`
  &:after {
    content: url('/icon/after.svg');
    position: absolute;
    margin: auto;
    right: 1em;
    top: 0.4em;
    transition: all 1s ease-in-out;
    filter: invert(1);
    border-radius: 100%;
  }
  &:before {
    content: url('/icon/before.svg');
    filter: invert(1);
    position: absolute;
    margin: auto;
    transition: all 1s ease-in-out;
    border-radius: 100%;
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
  },
};

export const IconStyled = styled(motion.svg)`
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.2);
    opacity: 0.4;
    background-color: white;
    border-radius: 100%;

    transition: all 1s ease-in-out;
    filter: blur(8px);
    -webkit-filter: blur(8px);
  }
  &:after {
    filter: black;
    content: url('/icon/after.svg');
    position: absolute;
    margin: auto;
    right: 1em;
    top: 0.4em;
    transition: all 1s ease-in-out;
    filter: invert(1);
    border-radius: 100%;
  }
  width: 30px;
  height: 30px;
  overflow: visible;
  fill: none;
  stroke: #fff;
  position: relative;
  strokewidth: 10px;
  border-radius: 100%;
`;
export const IconStyledDark = styled(motion.svg)`
  filter: invert(100%);
  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.1);

    background-color: black;
    border-radius: 100%;

    transition: all 1s ease-in-out;
    filter: blur(0px);
    -webkit-filter: blur(0px);
  }
  &:after {
    filter: black;
    content: url('/icon/after.svg');
    position: absolute;
    margin: auto;
    right: 1em;
    top: 0.4em;
    transition: all 1s ease-in-out;
    filter: invert(1);
    border-radius: 100%;
  }
  width: 30px;
  height: 30px;
  overflow: visible;
  fill: none;
  stroke: #fff;
  position: relative;
  strokewidth: 10px;
  border-radius: 100%;
`;

export const IconPathStyled = styled(motion.path).attrs(() => ({
  initial: 'hidden',
  variants: pathVariants,
  animate: 'visible',
}))``;

export const Navegation = {
  MenuRelative: tw.div<Props>`relative z-100  h-screen
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'block' : 'hidden')}
`,
  SectionMenu: tw(Section)<Props>`
  lg:transition ease-in-out  fixed overflow-y-scroll 
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-hidden z-100 opacity-100  `
        : 'opacity-0 overflow-hidden h-0 '}
  `,
  SectionMenuFW: tw(Section)<Props>`
  lg:transition ease-in-out fixed overflow-y-scroll flex flex-col justify-center items-center
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-y-scroll z-100 opacity-100  `
        : 'opacity-0 overflow-hidden h-0 '} 
  `,
  Menu: tw.nav``,
  AlinItems: tw.ul<Props>`
  flex items-center z-100 justify-between w-11/12  h-1/12 items-center m-auto fixed top-4 left-0 right-0
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? '' : '')}
  `,
  BlockNav: tw.div`flex flex-col h-auto justify-center items-center content-center`,
  AlinItemsMenu: tw.ul<Props>`
  flex items-center z-100 justify-between w-11/12  h-1/12 items-center m-auto fixed top-5 left-0 right-0
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? '' : '')}
  `,
  AlinItemsServices: tw.ul<Props>`
  flex items-center z-100 justify-between w-11/12  h-1/12 items-center m-auto fixed top-4 left-0 right-0
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? '' : '')}
  `,
  ItemsMenu: tw.span`flex items-center list-none  min-h-min cursor-pointer`,
  BlockMenu: tw.div``,
  TextMenu: tw(SectionColor)<Props>`
 font-Primary colorMenu
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-0' : '')}
  `,
  ButtonLogo: tw(Logo)`relative w-10 h-10 menu`,
  ButtonLogoInvert: tw(LogoInvert)`relative w-10 h-10 menuInvert`,
  AlingItemsMenu: tw.div`flex flex-col  items-center justify-center text-center w-full  md:pt-0 md:pt-0 justify-center justify-center`,
  SelectMenu: tw(
    itemMenu,
  )` leading-loose tracking-wide hover:opacity-100 opacity-60 cursor-pointer transition ease-in-out delay-100 duration-100  text-2xl md:text-3xl lg:text-5xl md:py-2 md:px-4 lg:py-2`,

  // NAV
  SectionNav: tw(SectionColor)<Props>`
  action flex items-center font-Primary cursor-pointer list-none fixed w-full duration-300 ease-in-out h-16 z-100
`,
  BlockLenguage: tw.div`flex  items-end `,
  BlokSectionLenguage: tw.div`sm:flex font-Secundary text-primary text-sm mr-5 items-center hidden`,
  BlokSectionLenguageResponsive: tw.div`sm:hidden font-Secundary text-primary text-sm bottom-2 items-center flex  -bottom-8 left-4
  `,
  ButtonSelect: tw.span<Props>`
  block p-2 delay-150 duration-300 ease-in-out hover:opacity-50
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'text-white' : 'text-black'}`,
  LineBlock: tw.span<Props>`
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'text-white' : 'text-black'}`,

  // FILTER:
  SectionFilter: tw(motion.div)<Props>`
    h-screen overflow-hidden fixed bg-black overflow-y-visible z-100 w-full lg:hidden
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON ? 'opacity-1' : 'opacity-0 hidden'}`,
  SectionFilterDetails: tw(
    motion.div,
  )`    h-screen overflow-hidden fixed bg-black overflow-y-visible z-100 w-full lg:hidden`,
};
