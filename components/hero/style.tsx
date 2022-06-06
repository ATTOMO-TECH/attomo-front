import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import '@fontsource/merriweather/300.css';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  mode?: string;
};

export const TextHero = styled.h2`
  font-family: 'Merriweather';
  font-weight: 300;
  will-change: transform;
  background: linear-gradient(
    90deg,
    #b4a9bc 0%,
    #ffffff 10.79%,
    #ffffff 70.3%,
    #b4a9bc 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 400% 400%;

  -webkit-animation: gradient 5s ease infinite;
  animation: gradient 5s ease infinite;
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
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
  background: rgb(2, 0, 36);
  background: -moz-linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.26094187675070024) 0%,
    rgba(156, 156, 156, 0.24693627450980393) 50%,
    rgba(17, 24, 39, 0.1741071428571429) 100%
  );
  background: -webkit-linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.26094187675070024) 0%,
    rgba(156, 156, 156, 0.24693627450980393) 50%,
    rgba(17, 24, 39, 0.1741071428571429) 100%
  );
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 0.26094187675070024) 0%,
    rgba(156, 156, 156, 0.24693627450980393) 50%,
    rgba(17, 24, 39, 0.1741071428571429) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#020024",endColorstr="#111827",GradientType=1);
`;
export const BlockHeroSection = styled.section`
  @media screen and (min-width: 1024px) {
    height: 70vh;
  }
  height: 100vh;
`;
export const textSubText = styled.h6`
  font-family: 'Merriweather';
  font-style: normal;
  font-weight: 300;
  font-size: 47.78px;
  line-height: 72px;
`;

export const HeadSection = {
  TextHead: tw(TextHero)` lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl`,
  SectionHero: tw.section`font-Primary`,
  Blockbutton: tw.div`relative cursor-pointer w-20 lg:w-48`,
  TextButton: tw.h6`text-primary font-PrimarySerif font-light text-xs sm:text-lg lg:text-lg pt-10`,
  BlockArrow: tw.span`absolute `,
  SectionHeroCases: tw(
    BlockHeroSection,
  )`md:w-10/12 w-full h-96 md:h-11/12 z-0 relative bg-hero-Case bg-no-repeat bg-center bg-cover `,

  // HeroFooter

  SectionHeroFooter: tw(
    Block,
  )`h-auto lg:h-96 text-primary lg:rounded-3xl font-Primary   lg:my-24  lg:from-gray-900 from-gray-700 border-opacity-10 flex justify-center items-center`,
  TextHeroFooter: tw.h5`text-2xl md:text-4xl lg:p-44 px-4 py-24 font-light leading-relaxed lg:leading-normal tracking-wide`,
  SectionCase: tw.section<Props>`flex justify-end items-center relative lg:pt-24 
  ${(props) => (props.mode === BUTTON_ACTIVE.ON ? 'overflow-hidden' : '')}`,
};
