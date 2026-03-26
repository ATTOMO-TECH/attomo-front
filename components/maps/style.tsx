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
    width: 100%;
    height: 316px;
  }
  @media (max-width: 768px) {
    width: 640px;
    height: 316px;
  }
  transition: all 0.3s ease-in-out;
  width: 100%;
  height: 360px;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Block = {
  SectionBlock: tw(SectionZoom)` `,
};
