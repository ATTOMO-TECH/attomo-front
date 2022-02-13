import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const darkTheme = {
  headings: 'black',
};
export const lightTheme = {
  headings: 'white',
};

export const SectionZoom = styled.div`
  @media (max-width: 640px) {
    width: 420px;
    height: 316px;
  }
  @media (max-width: 768px) {
    width: 640px;
    height: 316px;
  }
  width: 860px;
  height: 360px;
  &:hover div {
    transform: scale(1.2);
  }
`;

export const Block = {
  SectionBlock: tw(SectionZoom)`w-96 h-96 overflow-hidden `,
  Maps: tw.div`w-full h-full bg-localitation bg-center bg-cover ease-in-out duration-500 `,
};
