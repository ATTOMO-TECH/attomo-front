import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const BgMovement = styled.div`
  background: #0f0b11;
  z-index: -1 !important;
  touch-action: none !important;
  -ms-touch-action: none !important;
  pointer-events: all !important;
  min-height: 100vh;
  min-height: -webkit-fill-available;
`;
export const Styles = {
  Bg: tw(BgMovement)`w-full h-screen  fixed `,
};
