import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextTitle = styled.h2`
  @media screen and (max-width: 1024px) {
    background: linear-gradient(
      to right,
      #cccfe8 26.04%,
      #ffffff 69.27%,
      #cccfe8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Styles = {
  Body: tw.body`bg-secundary`,
  Center: tw.section`w-10/12 m-auto`,
  CenterFlex: tw.section`w-10/12 m-auto flex`,
};

export const StylesArticle = {
  BlockImg: tw.div`w-11/12 h-auto fill`,
  TextBlog: tw(
    TextTitle,
  )`text-primary font-Primary lg:w-4/6 text-xl lg:text-sm w-5/6 pt-5 lg:pt-2`,
  BlockArrow: tw.div`flex text-red-500 w-full text-xl justify-end lg:pr-44 pr-10 `,
  ArrowPrev: tw.div`cursor-pointer py-20 pr-5 hidden lg:block`,
  ArrowNext: tw.div`cursor-pointer lg:py-20 py-10`,
};
