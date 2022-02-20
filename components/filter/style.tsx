import { Field } from 'formik';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};

export const Filter = {
  BlockFilter: tw.div<Props>`
   z-100 transition delay-100 duration-500 ease-in-out bg-black fixed 
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-hidden z-100 opacity-100 top-0 delay-100 duration-500 ease-in-out `
        : 'opacity-0 overflow-hidden h-0 delay-100 duration-500 ease-in-out -top-96'}
  `,

  AlinItems: tw.ul<Props>`
  flex items-center justify-between mb-20 w-10/12 absolute lg:left-24 left-12 lg:top-24
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'pt-10' : '')}
  `,
  ItemsMenu: tw.li`flex items-center list-none`,

  InputDate: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent opacity-20 border-b border-primary mr-7 text-primary opacity-40 focus:opacity-100 ease-out duration-200
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
  `,
};
