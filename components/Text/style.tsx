import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const TextTitle = styled.h2`
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
  TextTitle: tw(TextTitle)` font-Primary font-thin `,
};
