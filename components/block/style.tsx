import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const darkTheme = {
  headings: 'black',
};
export const lightTheme = {
  headings: 'white',
};

export const SectionColor = styled.div`
  color: ${(props) => props.theme.headings};
`;

export const Block = {
  Block: tw(SectionColor)`text-primary lg:w-3/6 w-full`,
  SectionBlock: tw.h5`lg:py-24 flex flex-col justify-between w-full`,
  Title: tw.h6`opacity-50`,
};
