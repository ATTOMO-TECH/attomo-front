import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import tw from 'tailwind-styled-components';

export const Container = styled(ReactMarkdown)`
  * {
    font-family: [ 'Merriweather Sans', 'sans-serif' ];
  }
  h1 {
  }
  h2 {
  }
  p {
  }
`;
export const Details = {
  Section: tw.section`h-auto flex flex-wrap justify-between py-24  w-full m-auto"`,
  BlockItems: tw.div`lg:w-3/12 w-full leading-relaxed`,
  BlockSecond: tw.div``,
  BlockSpeciality: tw.div`pb-5`,
  TitleSpeciality: tw.h5`font-Primary text-addictional text-xl`,
  SubTextSpeciality: tw.h6`font-PrimarySerif font-thin text-sm flex`,
  SectionContainer: tw.div`lg:w-5/12 py-10 lg:py-0 lg:px-2 leading-relaxed font-PrimarySerif font-thin text-sm`,
  SectionText: tw.div`lg:mt-12 md:py-10 lg:py-0  leading-relaxed font-PrimarySerif font-thin text-sm w-full`,
};
export const BodyTrends = {
  Section: tw.div`flex flex-wrap justify-between`,
  ButtonShare: tw.button`w-1/12 cursor-pointer h-12`,
  AlingData: tw.section``,
};
