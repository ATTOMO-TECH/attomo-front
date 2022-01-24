import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextTitle = styled.input`
  &:before {
    content: 'hi';
    color: red;
  }
`;

export const Navegation = {
  SectionFooter: tw.footer`text-gray-600 body-font border-t border-primary bg-secundary`,
  BlockFooter: tw.div`container px-5 py-20 mx-auto flex flex-wrap md:text-left text-center order-first items-start`,
  BlockLogo: tw.div`lg:w-3/6 md:w-1/2 w-full text-left`,
  BlockNav: tw.div`lg:w-2/12 md:w-1/2 w-full text-left `,
  TitleNav: tw.h2`font-Primary text-primary tracking-widest text-lg mb-3 hidden lg:block`,
  TitleNavResponsive: tw.h2`font-Primary text-primary tracking-widest text-lg mb-3`,
  NavFooter: tw.nav`list-none mb-10 font-secundary text-primary text-sm cursor-pointer`,
  NavFooterFlex: tw.nav`list-none mb-10 flex cursor-pointer justify-start`,
  ItemsMenu: tw.p`py-2 leading-relaxed lg:leading-none text-lg font-extralight`,
  BlockInput: tw.div`relative flex flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start`,
  Input: tw(
    TextTitle,
  )` flex bg-secundary text-primary  outline-none  py-1 px-1 lg:text-xs text-xl font-light  `,
  BlockSubText: tw.div`flex flex-col lg:flex-row justify-end text-primary text-sm font-Secundary`,
  SubText: tw.p`lg:px-10 px-5 py-3 hover:opacity-50 cursor-pointer ease-out duration-300`,
};
export const SubNavegation = {
  SectionSub: tw.div`bg-primary font-Secundary hidden lg:block`,
  BlockSub: tw.div`container px-5 py-6 flex justify-between items-center justify-items-center sm:flex-row flex-col w-10/12 m-auto`,
  Listsub: tw.div`w-auto lg:w-full flex justify-center item-center`,
};
