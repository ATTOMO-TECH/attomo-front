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
  SectionBlock: tw.h5`lg:py-24 flex flex-wrap justify-between w-full`,
  Block: tw(SectionColor)`text-primary lg:w-3/6 w-full block`,
  Title: tw.h6`opacity-50`,
};
