import tw from 'tailwind-styled-components';

export const Blogstyles = {
  Article: tw.article`flex flex-col items-end py-6 mx-auto md:flex-row justify-end px-8 lg:px-0 items-end `,
  BlockImg: tw.div`w-full lg:w-1/3 lg:max-w-lg md:w-1/2`,
  BlockText: tw.div`flex flex-col text-left lg:flex-grow w-full lg:w-1/2 lg:pl-12 md:pr-16 pt-5 `,
  Text: tw.h2`text-sm font-thin tracking-widest text-primary  title-font`,
  SubText: tw.h4`text-sm font-thin leading-relaxed text-left text-primary `,
  Btn: tw.button`font-Primary pt-5 text-left text-regular text-Primary text-primary`,

  SectionMore: tw.div`flex  text-primary font-Primary underline text-center justify-center py-24 font-extralight text-xl`,
  BlockMore: tw.span`hover:opacity-75 cursor-pointer ease-out duration-300`,
};
