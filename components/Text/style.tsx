import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import '@fontsource/merriweather-sans';

export const TextHero = styled.h2`
  font-family: 'Merriweather';
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
    90deg,
    #b4a9bc 0%,
    #ffffff 17.79%,
    #ffffff 50.33%,
    #b4a9bc 83.38%
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

export const Text = {
  TextTitle: tw(TextHero)` font-Primary font-thin`,
  SubTextTitle: tw(
    SubTitle,
  )`lg:text-sm sm:text-lg text-sm font-thin font-PrimarySerif tracking-wide leading-8`,
};
