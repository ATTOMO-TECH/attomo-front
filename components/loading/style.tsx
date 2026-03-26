import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const darkTheme = {
  bodyBg: 'black',
};
export const lightTheme = {
  bodyBg: 'white',
};

export const SectionColor = styled.div`
  background-color: ${(props) => props.theme.bodyBg};
`;
export const BlockDiv = styled.div`
  background-color: ${(props) => props.theme.bodyBg};
  animation: breathe 3.5s linear infinite;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  @keyframes breathe {
    0% {
      opacity: 0.4;
      transform: scale(0.66);
    }
    25% {
      opacity: 0.6;
      transform: scale(1.22);
    }
    50% {
      opacity: 1;
      transform: scale(1.88);
      padding: 1%;
      box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.3), 0 0 0 2px rgba(1, 1, 1, 1);
    }
    75% {
      opacity: 0.6;
      transform: scale(1.22);
    }
    100% {
      opacity: 0.4;
      transform: scale(0.66);
    }
  }
`;

export const Loading = {
  Block: tw(
    SectionColor,
  )`text-primary w-full h-screen block  flex justify-center items-center`,
};
