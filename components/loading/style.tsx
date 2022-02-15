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

export const Loading = {
  Block: tw(
    SectionColor,
  )`text-primary w-full h-screen block pl-10 flex justify-center items-center`,
  BlockStyle: tw(SectionColor)`h-10 w-10 rounded-full animate-pulse`,
};
