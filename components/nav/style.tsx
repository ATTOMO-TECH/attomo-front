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
    background-color: black;
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
  SectionMenu: tw(SectionColor)<Props>`
  lg:transition ease-in-out delay-150 z-100 overflow-y-scroll 
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-hidden z-100 opacity-100 relative `
        : 'opacity-0 overflow-hidden h-0 '}
  `,
  Menu: tw.nav``,
  AlinItems: tw.ul<Props>`
  flex items-center justify-between mb-20 w-10/12 absolute lg:left-24 left-12 lg:top-10
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'pt-10' : '')}
  `,
  ItemsMenu: tw.li`flex items-center list-none z-100`,
  BlockMenu: tw.div``,
  TextMenu: tw(SectionColor)<Props>`
  mr-5 font-Primary colorMenu
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-0' : '')}
  `,
  ButtonLogo: tw(Logo)`relative w-10 h-10 menu`,
  ButtonLogoInvert: tw(LogoInvert)`relative w-10 h-10 menuInvert`,
  ItemList: tw(itemMenu)`list-none `,
  SelectMenu: tw.p`leading-loose hover:opacity-100 opacity-60 cursor-pointer transition ease-in-out delay-100 duration-100 text-4xl lg:text-5xl lg:py-5`,

  // NAV
  SectionNav: tw(SectionColor)<Props>`
font-Primary z-100 lg:py-16 h-24 mb-10 cursor-pointer list-none fixed w-full duration-300 ease-in-out delay-700
${(props) =>
  props.ismode === BUTTON_ACTIVE.ON ? 'duration-300 ease-in-out' : ''}
`,
};
