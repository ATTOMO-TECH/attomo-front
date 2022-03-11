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
  BlockInput: tw.div`relative flex flex xl:flex-nowrap md:flex-nowrap w-11/12 lg:flex-wrap flex-wrap justify-center items-end md:justify-start`,
  Input: tw.input`w-full flex bg-secundary text-primary bg-none focus:bg-none outline-none  py-1 px-1 lg:text-xs text-xl font-light  `,
  BlockSubText: tw.div`flex flex-col lg:flex-row justify-end text-primary text-sm font-Secundary`,
  SubText: tw.p`lg:px-10 px-5 py-3 hover:opacity-50 cursor-pointer ease-out duration-300`,
  ListIcon: tw.li`w-auto px-1 cursor-pointer `,
  Form: tw.form`flex flex-col items-baseline`,

  SectionInput: tw.div<Props>`
      flex w-full items-center overflow-hidden relative border-b-2 border-primary focus:outline-none lg:text-xs text-xl font-light transition-colors duration-200 ease-in-out 
      transition delay-700 duration-300 ease-in-out
      ${(props) =>
        props.ismode === BUTTON_ACTIVE.ON
          ? 'opacity-50 duration-300'
          : 'opacity-100 duration-300'}
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
  BlockFilter: tw.div`w-1/12 text-center transform -rotate-90  flex absolute left-10 bottom-72 z-100 lg:z-0 `,
  TextFilter: tw.h6`text-primary text-xs font-PrimarySerif font-thin w-24 absolute lg:right-10 right-24`,
  FlexFilter: tw.div`flex`,
  FirtsItem: tw.div`text-primary outline-none text-sm absolute -right-6 w-24`,
  DateItem: tw.div`absolute -right-56 w-48 flex`,
  ValueDate: tw.h6`text-primary outline-none text-sm flex w-48 `,
  Select: tw(
    Select,
  )`bg-black text-primary outline-none text-sm absolute -right-16`,
  InputFilterInv: tw(Input)``,
};
