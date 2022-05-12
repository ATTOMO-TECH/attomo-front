import styled from 'styled-components';

type Props = {
  active: boolean;
};
export const BlockDiv = styled.div<Props>`
  ${(props) =>
    props.active === true
      ? `
  &:nth-child(1) {
    opacity: 1!important;
    border-bottom: 1px solid white;
    transition: all 0.3s ease-in-out;
  }`
      : ``}
`;
