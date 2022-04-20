import { Field } from 'formik';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};
export const BtnSend = styled.button`
  &:hover {
    -webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    opacity: 1;
  }
`;
export const Select = styled.select`
  option,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  background: none;
  color: white;
`;
export const Options = styled.option`
  option,
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  background: none;
  color: white;
`;
export const Filter = {
  RelativeSection: tw.section``,
  SectionFilter: tw(motion.div)<Props>`
  fixed
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'block h-screen z-100 flex flex-col w-full bg-black opacity-1'
      : 'opacity-0'}`,

  AlinItems: tw.ul<Props>`
  flex items-center fixed z-100 justify-between w-11/12 m-auto md:mt-0 md:w-10/12 md:absolute lg:left-24 md:left-12 left-4 top-2 md:top-6
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'pt-10' : '')}
  `,
  ItemsMenu: tw.li`flex items-center list-none z-100 min-h-min`,

  InputDate: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent opacity-20 border-b border-primary mr-7 text-primary opacity-40 focus:opacity-100 ease-out duration-200
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-10' : '')}
  `,
  BlockFilterItems: tw.div`flex flex-col justify-center text-center w-full pt-24`,
  AlingBlock: tw.div`w-full flex flex-col justify-items-stretch items-center w-full`,
  InputSearch: tw.input`border-b border-primary bg-secundary text-primary w-full lg:w-4/6 lg:font-Primary text-xl outline-none focus:opacity-100 opacity-50 ease-in-out duration-300 font-light outline-none font-PrimarySerif font-thin text-gray-300 h-full w-full py-2  text-sm lg:text-lg`,
  FirtsItemFilter: tw.div`w-8/12 flex items-center justify-between m-auto `,
  TextItemFilter: tw.div`lg:w-3/6 text-left`,
  ValueFilter: tw.h6`lg:text-xl text-white`,
  SecondItem: tw.div`w-3/6`,
  BlockSecondFilter: tw.div`w-8/12 pt-12 flex items-center justify-between m-auto`,
  // MOBILE
  SectionMobile: tw.div`w-8/12 m-auto`,
  TitleFilter: tw.h5`text-white text-left font-Primary`,
  BlockItemMobile: tw.div`py-10`,
  SelectResponsive: tw(Select)`appearance-none w-full`,
  OptionsResponsive: tw(Options)`appearance-none w-full outline-none`,
  BlockItemMed: tw.div``,
  SubTextMobile: tw.h6`text-white text-left font-light text-sm`,
  BlockSendButton: tw.div`flex justify-around pt-6`,
  BtnSend: tw(
    BtnSend,
  )` ease-out inline-flex justify-center w-3/6 lg:w-3/12 duration-200 text-primary border-2 border-primary text-left lg:text-sm py-2 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none mr-5 `,
};
