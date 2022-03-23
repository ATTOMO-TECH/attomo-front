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
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;
export const Block = {
  SectionBlock: tw.div`flex flex-wrap justify-between m-auto  py-16  `,

  Block: tw(SectionColor)`text-primary lg:w-3/6 w-full block  `,
  Title: tw(
    textTitle,
  )<Props>`text-regular w-full leading-loose   text-sm  font-PrimarySerif 
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? `textDegrade  ` : 'bg-black '}
      `,
};
