import styled from 'styled-components';
import tw from 'tailwind-styled-components';

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
export const SubTitle = styled.h2`
  background: linear-gradient(
    to right,
    #cccfe8 0.04%,
    #ffffff 50.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Text = {
  TextTitle: tw(TextHero)` font-Primary font-thin`,
  SubTextTitle: tw(
    SubTitle,
  )`lg:text-sm sm:text-lg text-sm font-thin font-PrimarySerif  tracking-wide leadiang-loose `,
};
