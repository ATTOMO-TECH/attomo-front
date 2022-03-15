import { Field } from 'formik';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};

export const Filter = {
  RelativeSection: tw.section`relative`,
  BlockFilter: tw.div<Props>`
  relative transition delay-100 duration-500 ease-in-out bg-black
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? `cursor-pointer h-screen w-full overflow-hidden z-10   opacity-100 top-0 delay-100 duration-500 ease-in-out  `
        : 'opacity-0 overflow-hidden h-0 delay-100 duration-500 ease-in-out -top-96'}
  `,

  AlinItems: tw.ul<Props>`
  flex items-center justify-between w-10/12 absolute lg:left-24 left-12 pt-12 
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'pt-10' : '')}
  `,
  ItemsMenu: tw.li`flex items-center list-none`,

  InputDate: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent opacity-20 border-b border-primary mr-7 text-primary opacity-40 focus:opacity-100 ease-out duration-200
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
  `,
  BlockFilterItems: tw.div`flex flex-col justify-center h-screen text-center`,
  AlingBlock: tw.div`w-full flex flex-col justify-items-stretch items-center w-2/12`,
  InputSearch: tw.input`border-b border-primary bg-secundary text-primary w-4/6 font-Primary text-xl outline-none focus:opacity-100 opacity-50 ease-in-out duration-300 font-light`,
  FirtsItemFilter: tw.div`w-8/12 flex items-center justify-between m-auto`,
  TextItemFilter: tw.div`lg:w-3/6 text-left`,
  ValueFilter: tw.h6`lg:text-xl text-white`,
  SecondItem: tw.div`w-3/6`,
  BlockSecondFilter: tw.div`w-8/12 pt-12 flex items-center justify-between m-auto`,
  // MOBILE
  SectionMobile: tw.div`w-9/12 m-auto`,
  TitleFilter: tw.h5`text-white text-left font-Primary`,
  BlockItemMobile: tw.div`py-10`,
  BlockItemMed: tw.div``,
  SubTextMobile: tw.h6`text-white text-left`,
};
