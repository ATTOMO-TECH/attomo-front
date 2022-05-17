import styled from 'styled-components';

type Props = {
  active: boolean;
};
export const BlockDiv = styled.div<Props>`
  border-bottom: 1px solid gray;
  transition: all 0.3s ease-in-out;
  :hover {
    border-bottom: 1px solid white;
  }
  ${(props) =>
    props.active === true
      ? `

    opacity: 1!important;
    border-bottom: 1px solid white;
    transition: all 0.3s ease-in-out;
  `
      : ``};
`;
