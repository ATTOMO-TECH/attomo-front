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
  z-index: 100 !important;
`;
export const itemMenu = styled.h6`
  font-family: 'Merriweather', 'serif';
  font-style: normal;
  font-weight: 300;
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
export const Navegation = {
  MenuRelative: tw.div`relative`,
  SectionMenu: tw(SectionColor)<Props>`
  lg:transition ease-in-out  fixed overflow-y-scroll 
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-hidden z-100 opacity-100  `
        : 'opacity-0 overflow-hidden h-0 '}
  `,
  Menu: tw.nav``,
  AlinItems: tw.ul<Props>`
  flex items-center justify-between  w-11/12 m-auto mt-2 md:mt-0 md:w-10/12 md:absolute lg:left-24 md:left-12 left-6 top-10 mt-6
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? '' : '')}
  `,
  ItemsMenu: tw.li`flex items-center list-none z-100`,
  BlockMenu: tw.div``,
  TextMenu: tw(SectionColor)<Props>`
 font-Primary colorMenu
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-0' : '')}
  `,
  ButtonLogo: tw(Logo)`relative w-10 h-10 menu`,
  ButtonLogoInvert: tw(LogoInvert)`relative w-10 h-10 menuInvert`,
  AlingItemsMenu: tw.div`flex flex-col items-center justify-center text-center w-full h-screen content-around justify-center`,
  SelectMenu: tw(
    itemMenu,
  )` leading-loose tracking-wide hover:opacity-100 opacity-60 cursor-pointer transition ease-in-out delay-100 duration-100  text-3xl md:text-3xl lg:text-5xl md:py-4`,

  // NAV
  SectionNav: tw(SectionColor)<Props>`
font-Primary cursor-pointer list-none fixed w-full duration-300 ease-in-out delay-700 
${(props) =>
  props.ismode === BUTTON_ACTIVE.ON
    ? 'duration-300 ease-in-out h-24  sm:mb-10 '
    : ''}
`,
  BlockLenguage: tw.div`flex  items-end `,
  BlokSectionLenguage: tw.div`sm:flex font-Secundary text-primary text-sm mr-5 items-center hidden`,
  ButtonSelect: tw.button<Props>`
  block p-2 delay-150 duration-300 ease-in-out hover:opacity-50
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'text-white' : 'text-black'}`,
  LineBlock: tw.span<Props>`
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'text-white' : 'text-black'}`,
};
