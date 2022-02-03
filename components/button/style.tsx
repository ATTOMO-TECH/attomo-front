import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_MODE } from '../../const/const';

type Props = {
  ismode: string;
};

export const IconMoveS = styled.span`
  width: 0%;
  cursor: pointer;
  transition: width 0.5s;
`;

export const IconMove = styled.div`
  bottom: 0px;
  width: 100%;
  height: 1px;
`;

export const Button = {
  ButtonRegular: tw.h5<Props>`
    text-Primary font-Primary py-5 text-left text-xl pr-2
  ${(props) =>
    props.ismode === BUTTON_MODE.LIGHT ? 'text-primary' : 'text-secundary'}`,
  SectionBack: tw.div`z-100 lg:w-3/12 w-10/12 ml-12 lg:px-10 lg:p-14 py-10 block cursor-pointer hover:opacity-50`,
  BlockBack: tw.div`flex font-PrimarySerif font-extralight`,
  TextBack: tw.h5``,
};

export const Icon = {
  BlockHidden: tw.div`overflow-hidden flex flex-wrap cursor-pointer btn z-90 w-full `,
  SectionIcon: tw(IconMoveS)`flex items-center `,
  Icon: tw(IconMove)<Props>`
  ${(props) => (props.ismode === BUTTON_MODE.LIGHT ? 'bg-white' : 'bg-black')}`,
};
