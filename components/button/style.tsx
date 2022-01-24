import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const IconMoveS = styled.div`
  position: relative;
  width: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: width 1s;
  &:hover {
    width: 400px;
    overflow: hidden;
  }
`;

export const IconMove = styled.div`
  bottom: 0px;
  background-color: #ffffff;
  width: 10%;
  height: 1px;
`;

export const Button = {
  ButtonRegular: tw.h5`font-Primary py-5 text-left text-xl text-Primary text-primary`,
};

export const Icon = {
  BlockHidden: tw.div`overflow-hidden`,
  SectionIcon: tw(IconMoveS)`flex items-center `,
  Icon: tw(IconMove)``,
};
