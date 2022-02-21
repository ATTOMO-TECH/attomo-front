import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextHero = styled.h2`
  will-change: transform;
  background-color: #fff;
  background-image: url(/bg.png);
  background-position: 0px 0px;
  background-repeat: repeat-x;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-animation: backgroundScroll 20s linear infinite;
  animation: backgroundScroll 20s linear infinite;

  @-webkit-keyframes backgroundScroll {
    from {
      top: 0;
    }
    to {
      top: 10;
    }
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;
export const Block = styled.section`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const HeadSection = {
  TextHead: tw(TextHero)` lg:pr-10 lg:text-4xl font-thin text-5xl `,
  SectionHero: tw.section`font-Primary`,
  Blockbutton: tw.div`relative cursor-pointer`,
  TextButton: tw.h6`text-primary`,
  BlockArrow: tw.span`absolute `,

  // HeroFooter

  SectionHeroFooter: tw(
    Block,
  )`h-auto lg:h-96 text-primary lg:rounded-3xl font-Primary lg:border border-primary my-24 bg-gradient-to-b lg:from-gray-900 from-gray-700 border-opacity-10 flex justify-center items-center`,
  TextHeroFooter: tw.h5`text-4xl lg:p-44 p-14 font-light leading-relaxed lg:leading-normal`,
  SectionCase: tw.section`flex justify-center items-center pt-12`,
};
