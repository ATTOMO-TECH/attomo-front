import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE, BUTTON_MODE } from '../../const/const';

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
  height: 2px;
`;
export const Image = styled.div`
  filter: drop-shadow(0rem 0rem 0.1rem rgba(45, 140, 217, 1));
  &:hover {
    filter: grayscale(100%) brightness(200%);
    -webkit-filter: grayscale(100%) brightness(200%);
    -moz-filter: grayscale(100%) brightness(200%);
  }
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

export const Btn = {
  Icon: tw.div<Props>`
w-24 h-24 rounded-full p-2  fixed hover:opacity-80 cursor-pointer z-90 shadow-lg flex justify-center z-100  delay-300 duration-300 ease-in-out
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'bottom-10 right-10  delay-300 duration-300 ease-in-out opacity-100'
      : '-bottom-20 right-10  delay-300 duration-300 ease-in-outopacity-0 overflow-hidden h-0'}
`,
};
