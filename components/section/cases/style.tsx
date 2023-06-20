import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import tw from 'tailwind-styled-components';

export const Container = styled(ReactMarkdown)`
  * {
    text-align: justify;
  }
  h1 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 33.18px;
    line-height: 50px;
    padding: 1.5em 0;
  }
  h2 {
    font-family: 'Merriweather';
    font-style: normal;
    font-size: 20px;
    line-height: 2em;
  }
  h3 {
    font-family: 'Merriweather';
    font-style: normal;
    font-size: 18px;
    line-height: 2em;
  }
  h4 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 1em;
    line-height: 2em;
  }
  h5 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 33.18px;
    line-height: 50px;
  }
  h6 {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    font-size: 33.18px;
    line-height: 50px;
  }
  p {
    font-family: 'Merriweather Sans';
    font-weight: 300;
    font-size: 16px;
    line-height: 36px;
  }
  ol {
    list-style: decimal !important;
    padding-left: 2%;
  }
  ul {
    list-style-type: disc !important;
    padding-left: 2%;
  }
  li {
    margin: 10px;
    font-family: 'Merriweather Sans';
    font-weight: 300;
    line-height: 26px;
  }
  a {
    text-decoration: underline;
  }
  &a:hover {
    text-decoration: none;
  }
`;
export const Details = {
  Section: tw.section`h-auto flex flex-wrap justify-between py-24  w-full m-auto w-11/12 ml-auto`,
  BlockItems: tw.div`lg:w-3/12 w-full leading-relaxed`,
  BlockSecond: tw.div``,
  BlockSpeciality: tw.div`pb-5`,
  TitleSpeciality: tw.h5`font-Primary text-addictional text-xl pb-2 opacity-40 font-light`,
  SubTextSpeciality: tw.h6`font-PrimarySerif font-thin text-sm flex leading-loose `,
  SectionContainer: tw.div`lg:w-6/12 py-10 lg:py-0 lg:px-2 leading-loose font-PrimarySerif font-thin text-sm`,
  SectionText: tw.div`lg:mt-12 md:py-10 lg:py-0  leading-relaxed font-PrimarySerif font-thin text-sm w-full`,
};
export const BodyTrends = {
  Section: tw.div`flex flex-wrap justify-between`,
  ButtonShare: tw.button`w-1/12 cursor-pointer h-12 mr-5`,
  BlockShare: tw.div`flex lg:w-2/6`,
  AlingData: tw.section``,
};
