import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextHero = styled.h2`
  background: linear-gradient(
    to right,
    #cccfe8 26.04%,
    #ffffff 69.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeadSection = {
  TextHead: tw(TextHero)`lg:py-48 lg:pr-10 pb-24 text-5xl font-thin`,
  SectionHero: tw.section`h-screen font-Primary`,
  Blockbutton: tw.div`relative cursor-pointer`,
  TextButton: tw.h6`text-primary`,
  BlockArrow: tw.span`absolute -left-12`,
  // HeroFooter

  SectionHeroFooter: tw.section`h-auto lg:h-96 text-primary lg:rounded-3xl font-Primary lg:border border-primary my-24 bg-gradient-to-b lg:from-gray-900 from-gray-700 border-opacity-10 flex justify-center items-center`,
  TextHeroFooter: tw.h5`text-4xl lg:p-44 p-14 font-light leading-relaxed lg:leading-normal`,
};
