import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const BgMovement = styled.div`
  background: #0f0b11;
  z-index: -1 !important;
  touch-action: none !important;
`;
export const Styles = {
  Bg: tw(BgMovement)`w-full h-screen fixed `,
};
