import { Field } from 'formik';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode?: string;
  active?: boolean;
};
export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const CheckRadio = styled.input`
  &[type='radio'] {
    appearance: none;
    margin: 0;
    width: 1.5em;
    height: 1.5em;
    border: 0.15em solid white;
    border-radius: 100%;
    margin-right: 10px;
  }

  &:checked {
    content: url(/icon/isoAttomo.svg);
    width: 1.5em;
    height: 1.5em;
    transition: 120ms transform ease-in-out;
    border: 0.15em solid white;
    padding: 2.8px;
  }
`;
export const CheckCheck = styled.input`
  &[type='checkbox'] {
    appearance: none;
    margin: 0;
    width: 1.5em;
    height: 1.5em;
    border: 0.15em solid white;
    border-radius: 100%;
    margin-right: 10px;
  }

  &:checked {
    content: url(/icon/isoAttomo.svg);
    width: 1.5em;
    height: 1.5em;
    transition: 120ms transform ease-in-out;
    border: 0.15em solid white;
    padding: 2.8px;
  }
`;
export const CheckCheckCondition = styled.input`
  &[type='checkbox'] {
    appearance: none;
    margin: 0;
    width: 1.5em;
    height: 1.5em;
    border: 0.15em solid white;

    margin-right: 10px;
  }

  &:checked {
    content: url(/icon/isoAttomo.svg);
    width: 1.5em;
    height: 1.5em;
    transition: 120ms transform ease-in-out;
    border: 0.15em solid white;
    padding: 3px;
  }
`;

export const BtnSelect = styled.button<Props>`
  ${({ active }) =>
    active
      ? '-webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9); -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9); 	opacity: 1;'
      : ''}
`;
export const Styles = {
  Select: tw(
    Select,
  )`bg-black text-primary outline-none text-sm lg:py-4 font-PrimarySerif font-light ml-5 z-90`,

  BtnSelect: tw(
    BtnSelect,
  )`block ease-out duration-200 text-primary border-2 border-primary px-16 lg:text-sm py-4 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none mr-5 `,

  Form: tw.form`lg:w-4/6 m-auto`,
  SectionInput: tw.div`flex flex-col lg:flex-row `,
  SingleInput: tw.div`py-5`,
  BlockBtn: tw.button`text-primary font-thin w-7/12 flex ml-auto z-0`,
  BlockCount: tw.div`text-primary `,
  LineBlock: tw.div`flex flex-wrap justify-between pt-5`,
  TextCount: tw.h6`font-Primary text-xl text-primary`,
  SubText: tw.h6`font-Secundary text-sm opacity-50 text-primary font-thin`,

  Input: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent pr-5 border-b border-primary py-2 mr-5 text-primary opacity-40 focus:opacity-100 ease-out duration-200
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
`,
  InputRadio: tw(CheckRadio)`cursor-pointer`,
  InputCheck: tw(CheckCheck)`cursor-pointer `,
  InputCheckCondition: tw(CheckCheckCondition)`cursor-pointer `,
  LabelCheck: tw.label<Props>`flex ease-out 
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}
  ${(props) => (props.ismode === BUTTON_ACTIVE.OFF ? 'opacity-50' : '')}`,
  LabelCheckBox: tw.label<Props>`
  flex ease-out duration-200 py-2
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}
  ${(props) => (props.ismode === BUTTON_ACTIVE.OFF ? 'opacity-50' : '')}`,
};
