import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};

export const Navegation = {
  SectionMenu: tw.section<Props>`
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? 'cursor-pointer h-screen w-full fixed overflow-hidden bg-black h-auto z-100 font-Primary'
        : 'hidden'}
    `,
  Menu: tw.nav``,
  AlinItems: tw.ul<Props>`flex items-center justify-between pb-20 m-auto w-10/12
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'pt-10' : '')}
  `,
  ItemsMenu: tw.li`text-primary flex items-center `,
  TextMenu: tw.h6<Props>`
  mr-5
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-0' : '')}
  `,
  ItemList: tw.li``,
  SelectMenu: tw.p`text-primary text-center text-4xl opacity-60 hover:opacity-100 cursor-pointer transition ease-in-out delay-50`,

  // NAV
  SectionNav: tw.nav<Props>`
font-Primary bg-secundary z-100 h-24 cursor-pointer
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'fixed w-full' : '')}
`,
};
