import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextHero = styled.h2`
  will-change: transform;
  background-color: #fff;
  background-image: url(/bg.png);
  background-repeat: no-repeat;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation-name: movingBox;
  animation-duration: 1300ms;
  animation-iteration-count: infinite;

  @keyframes movingBox {
    0% {
      opacity: 0.8;
    }

    25% {
      opacity: 0.9;
    }

    50% {
      opacity: 0.8;
    }

    100% {
      opacity: 0.9;
    }
  }
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const HeadSection = {
  TextHead: tw(
    TextHero,
  )`lg:py-48 lg:pr-10 pb-12 pt-12 lg:text-4xl font-thin text-5xl `,
  SectionHero: tw.section`font-Primary`,
  Blockbutton: tw.div`relative cursor-pointer`,
  TextButton: tw.h6`text-primary`,
  BlockArrow: tw.span`absolute `,

  // HeroFooter

  SectionHeroFooter: tw.section`h-auto lg:h-96 text-primary lg:rounded-3xl font-Primary lg:border border-primary my-24 bg-gradient-to-b lg:from-gray-900 from-gray-700 border-opacity-10 flex justify-center items-center`,
  TextHeroFooter: tw.h5`text-4xl lg:p-44 p-14 font-light leading-relaxed lg:leading-normal`,
  SectionCase: tw.section`flex justify-center items-center pt-12`,
};
