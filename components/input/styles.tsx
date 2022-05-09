import { Field } from 'formik';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;
export const Input = styled.input`
  will-change: transform;
  background-color: #fff;
  background-image: url(/bg.png);
  background-position: 0px 0px;
  background-repeat: repeat-x;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
export const textFilter = styled.h6`
@media screen and (max-width: 768px) {
  background: linear-gradient(
    90deg,
    #b4a9bc 0%,
    #ffffff 17.79%,
    #ffffff 50.33%,
    #b4a9bc 83.38%
  }
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
);
  
color:gray;
`;

export const Navegation = {
  SectionFooter: tw.footer`text-gray-600 body-font border-t border-primary bg-secundary`,
  BlockFooter: tw.div`container px-5 py-20 mx-auto flex flex-wrap md:text-left text-center order-first items-start`,
  BlockLogo: tw.div`lg:w-3/6 md:w-1/2 w-full text-left`,
  BlockNav: tw.div`lg:w-2/12 md:w-1/2 w-full text-left `,
  TitleNav: tw.h2`font-Primary text-primary tracking-widest text-lg mb-3 hidden lg:block`,
  TitleNavResponsive: tw.h2`font-Primary text-primary tracking-widest text-lg mb-3`,
  NavFooter: tw.nav`list-none mb-10 font-secundary text-primary text-sm cursor-pointer`,
  NavFooterFlex: tw.nav`list-none mb-10 flex cursor-pointer justify-start items-center`,
  ItemsMenu: tw.p`py-1 leading-relaxed lg:leading-none text-lg font-extralight`,
  BlockInput: tw.div`relative flex flex xl:flex-nowrap md:flex-nowrap w-full lg:flex-wrap flex-wrap justify-center items-end md:justify-start`,
  Input: tw(
    Field,
  )`w-full opacity-50 focus:opacity-100  flex bg-transparent text-primary bg-none focus:bg-none outline-none  py-1 px-1 lg:text-xs  text-lg font-light  `,
  BlockSubText: tw.div`flex flex-col lg:flex-row justify-end text-primary text-sm font-Secundary`,
  SubText: tw.p`lg:px-10 px-5 py-3 hover:opacity-50 cursor-pointer ease-out duration-300`,
  ListIcon: tw.li`w-auto px-1 cursor-pointer `,
  Form: tw.form`flex flex-col items-baseline`,

  SectionInput: tw.div<Props>`
touch-action: none;
      flex w-full items-center overflow-hidden relative border-b border-primary focus:outline-none text-xs font-light  duration-200 ease-in-out 
      transition delay-700 duration-300 ease-in-out bg-none
      ${(props) =>
        props.ismode === BUTTON_ACTIVE.ON
          ? 'opacity-100 duration-300'
          : 'opacity-50 duration-300'}
      `,
  Button: tw.button<Props>`
    transition delay-300 duration-500 ease-in-out
      ${(props) =>
        props.ismode === BUTTON_ACTIVE.ON
          ? ' opacity-100 '
          : 'opacity-0 duration-600'}
      `,
};
export const Styles = {
  BlockFilter: tw.div`w-1/12 text-center transform -rotate-90  flex  absolute left-3 sm:left-10 lg:bottom-44 sm:bottom-72 z-100 lg:z-0 cursor-pointer `,
  BlockFilterAling: tw.div`w-full text-center flex justify-center absolute bottom-0 z-100`,
  TextFilter: tw.h6`text-gray-700 md:text-primary font-light text-xs font-PrimarySerif font-thin w-24 absolute lg:right-10 sm:right-24 right-12 opacity-100 sm:opacity-50`,
  FlexFilter: tw.div`flex flex-wrap w-full items-center`,
  TexItem: tw(textFilter)``,
  FirtsItem: tw(
    textFilter,
  )`sm:text-primary outline-none text-sm absolute lg:-right-12 -right-6 font-light w-24`,
  DateItem: tw.div`absolute sm:-right-64 -right-56 w-48 flex `,
  ValueDate: tw(
    textFilter,
  )`sm:text-primary outline-none text-sm flex w-48 text-sm font-light`,
  LineValue: tw(textFilter)`text-primary outline-none text-sm flex text-xs px-`,
  Select: tw(
    Select,
  )`bg-black text-primary outline-none text-sm absolute -right-16`,
  InputFilterInv: tw(Input)``,
};
