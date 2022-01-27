import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const IconMoveS = styled.span`
  width: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: width 0.5s;
`;

export const IconMove = styled.div`
  bottom: 0px;
  background-color: #ffffff;
  width: 100%;
  height: 1px;
`;

export const Button = {
  ButtonRegular: tw.h5`font-Primary py-5 text-left text-xl text-Primary pr-2 `,
  SectionBack: tw.div`w-11/12 m-auto px-10`,
  BlockBack: tw.div`flex font-PrimarySerif font-extralight`,
  TextBack: tw.h5``,
};

export const Icon = {
  BlockHidden: tw.div`overflow-hidden flex flex-wrap  cursor-pointer btn`,
  SectionIcon: tw(IconMoveS)`flex items-center `,
  Icon: tw(IconMove)` `,
};
