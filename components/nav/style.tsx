import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
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
  z-index: 100 !important;
`;

export const Navegation = {
  SectionMenu: tw(SectionColor)<Props>`
  lg:transition ease-in-out delay-150 z-100 transition ease-in-out delay-150  overflow-y-scroll 
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-hidden z-100 opacity-100 relative `
        : 'opacity-0 overflow-hidden h-0'}
  `,
  Menu: tw.nav``,
  AlinItems: tw.ul<Props>`
  flex items-center justify-between mb-20 w-10/12 absolute lg:left-24 left-12 lg:top-10
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'pt-10' : '')}
  `,
  ItemsMenu: tw.li`flex items-center list-none`,
  TextMenu: tw(SectionColor)<Props>`
  mr-5 font-Primary 
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-0' : '')}
  `,
  ItemList: tw.li`list-none m-10 absu`,
  SelectMenu: tw.p`text-primary text-center text-4xl opacity-60 hover:opacity-100 cursor-pointer lg:transition ease-in-out delay-50 `,

  // NAV
  SectionNav: tw(SectionColor)<Props>`
font-Primary z-100 lg:py-16 h-24 mb-10 cursor-pointer list-none transition ease-in-out -top-4 
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'fixed w-full' : '')}
`,
};
