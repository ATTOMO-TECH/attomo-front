import styled from 'styled-components';

type Props = {
  active: boolean;
};
export const BlockDiv = styled.div<Props>`
  border-bottom: 1px solid gray;
  transition: all 0.3s ease-in-out;
  .rrs__label {
    opacity: 0.5 !important;
    font-size: 1.5em !important;
  }
  .date-range,
  .rrs__label:focus,
  .rrs__label:hover {
    opacity: 1 !important;
  }

  :hover {
    border-bottom: 1px solid white;
  }
  ${(props) =>
    props.active === true
      ? `
    color:white!important;
    opacity: 1!important;
    border-bottom: 1px solid white;
    transition: all 0.3s ease-in-out;
    
    .date-range,
    .rrs__label {
      opacity: 1 !important;
    };
  `
      : ``};
`;
