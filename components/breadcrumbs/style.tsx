import tw from 'tailwind-styled-components';

export const Blogstyles = {
  Article: tw.article`flex flex-col items-end py-6 mx-auto md:flex-row justify-end px-8 lg:px-0`,
  BlockImg: tw.div`w-full lg:w-1/3 lg:max-w-lg md:w-1/2`,
  BlockText: tw.div`flex flex-col text-left lg:flex-grow md:w-1/2 lg:pl-12 md:pr-16 pt-5`,
  Text: tw.h2`text-xs font-semibold tracking-widest text-primary uppercase title-font`,
  SubText: tw.h4`text-sm font-thin leading-relaxed text-left text-primary `,
  Btn: tw.button`font-Primary pt-5 text-left text-regular text-Primary text-primary`,
};
export const BreadStyles = {
  BlockBread: tw.div`flex flex-wrap justify-start items-center font-PrimarySerif font-extralight text-sm py-4`,
  Circle: tw.span`w-1.5 h-1.5 rounded-full bg-black mx-3`,
  TextBread: tw.h6``,
};
