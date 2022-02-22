import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextTitle = styled.h2`
  background: linear-gradient(
    90deg,
    #b4a9bc 0%,
    #ffffff 17.79%,
    #ffffff 50.33%,
    #b4a9bc 83.38%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubTitle = styled.h2`
  background: linear-gradient(
    to right,
    #cccfe8 26.04%,
    #ffffff 69.27%,
    #cccfe8 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Text = {
  TextTitle: tw(TextTitle)` font-Primary font-thin`,
  SubTextTitle: tw(TextTitle)` font-Primary font-thin `,
};
