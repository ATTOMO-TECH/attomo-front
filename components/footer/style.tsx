import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};

export const Image = styled.img`
  filter: drop-shadow(-1px 0px 3px #ffffffc2);
  box-shadow: 1px 1px 1px 1px #ffffff09;
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
  Image: tw(Image)``,
  Button: tw.button<Props>`
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? 'transition ease-in-out delay-150 duration-300 opacity-100'
        : 'opacity-0 duration-300'}
    `,
  SectionInput: tw.div<Props>`
    flex w-full items-center overflow-hidden relative border-b-2 border-primary focus:outline-none lg:text-xs text-xl font-light transition-colors duration-200 ease-in-out 
    transition ease-in-out delay-150 duration-300
    ${(props) =>
      props.ismode === BUTTON_ACTIVE.ON
        ? 'opacity-50 duration-300'
        : 'opacity-100 duration-300'}
    `,
};
export const SubNavegation = {
  SectionSub: tw.div`bg-primary font-Secundary hidden lg:block`,
  BlockSub: tw.div`container px-5 py-6 flex justify-between items-center justify-items-center sm:flex-row flex-col w-10/12 m-auto`,
  Listsub: tw.div`w-auto lg:w-full flex justify-center item-center`,
};
