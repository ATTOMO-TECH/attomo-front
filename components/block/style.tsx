import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode: string;
};
export const darkTheme = {
  headings: 'black',
};
export const lightTheme = {
  headings: 'white',
};

export const SectionColor = styled.div`
  color: ${(props) => props.theme.headings};
`;

export const textTitle = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  align-items: center;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const Block = {
  SectionBlock: tw.h5`py-24 flex flex-wrap justify-between w-full`,
  Block: tw(SectionColor)`text-primary lg:w-3/6 w-full block lg:pl-10 pl-5 `,
  Title: tw(textTitle)<Props>`font-PrimarySerif 
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? `textDegrade  ` : 'bg-black '}
      `,
};
