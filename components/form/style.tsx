import { Field, Form } from 'formik';
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

export const Input = styled.div<Props>`
  content: url(/icon/x.svg);
  width: 1.3em;
  height: 1.3em;
  position: absolute;
  right: 0;
  bottom: 40%;
  cursor: pointer;
`;

export const CheckRadio = styled.input`
  &[type='radio'] {
    appearance: none;
    margin: 0;
    min-width: 25px;
    height: 25px;
    border: 0.15em solid white;
    border-radius: 100%;
    margin-right: 10px;
  }

  &:checked {
    content: url(/icon/isoAttomo.svg);
    width: 25px;
    height: 25px;
    transition: 120ms transform ease-in-out;
    border: 0.15em solid white;
    padding: 5px;
  }
`;
export const CheckCheck = styled.input`
  border-radius: 100%;
  &[type='checkbox'] {
    content: url(/icon/isoAttomo.svg);
    transition: 120ms transform ease-in-out;
    appearance: none;
    margin: 0;
    min-width: 20px;
    height: 20px;
    margin-right: 10px;
    opacity: 0.5;
  }

  &:checked {
    opacity: 1;
  }
`;
export const CheckCheckCondition = styled.input`
  &[type='checkbox'] {
    appearance: none;
    margin: 0;
    min-width: 20px;
    height: 20px;
    border: 0.15em solid white;
    margin-right: 10px;
    padding: 2px;
    border-radius: 100%;
  }

  &:checked {
    padding: 2px;
    content: url(/icon/isoAttomo.svg);
    width: 20px;
    height: 20px;
    transition: 120ms transform ease-in-out;
    border: 1px solid white;
  }
`;

export const BtnSelect = styled.button<Props>`
  ${({ active }) =>
    active
      ? '-webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9); -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9); 	opacity: 1;'
      : ''}
`;

export const BtnSend = styled.button`
  &:hover {
    -webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
    opacity: 1;
  };
  &[disabled]{
    opacity-20 
  }
`;

export const Styles = {
  Select: tw(
    Select,
  )`bg-black text-primary outline-none text-sm lg:py-4 font-PrimarySerif font-light ml-5 z-90`,
  BlockButton: tw.div`flex lg:justify-center justify-between`,
  BlockSendButton: tw.div`flex justify-center pt-6`,

  BtnSelect: tw(
    BtnSelect,
  )` ease-out inline-flex justify-center w-3/6 lg:w-2/12 duration-200 text-primary border-2 border-primary text-left lg:text-sm py-2 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none mr-5 `,
  BtnSend: tw(
    BtnSend,
  )` ease-out inline-flex justify-center w-3/6 lg:w-3/12 duration-200 text-primary border-2 border-primary text-left lg:text-sm py-2 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none mr-5 `,
  SectionRenderForm: tw.section`my-12`,
  Form: tw(Form)`lg:w-4/6 m-auto`,
  SectionInputs: tw.div`grid grid-cols-2 gap-6  m-auto`,
  BlockInput: tw.div`col-span-2 lg:col-span-1`,
  BlockInputOnly: tw.div`col-span-2 lg:col-span-2`,
  BlockInputs: tw.div`grid grid-cols-2 gap-6  m-auto  lg:pt-5`,
  BlockInputsCenter: tw.div`grid grid-cols-2 lg:gap-6 -gap-4   m-auto  lg:pt-5`,
  BlockInputEnd: tw.div`grid grid-cols-2 gap-4  m-auto pt-5`,
  MessageError: tw.span``,
  BlockClose: tw(Input)``,
  Input: tw(
    Field,
  )<Props>`pl-1 outline-none w-full bg-transparent border-b border-primary py-2 font-PrimarySerif font-thin text-gray-300 opacity-40 focus:opacity-100 hover:opacity-100 ease-out duration-200
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
`,
  InputDate: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent opacity-20 border-b border-primary mr-7 text-primary opacity-40 focus:opacity-100 ease-out duration-200
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
`,
  InputRadio: tw(CheckRadio)`cursor-pointer`,
  InputCheck: tw(CheckCheck)`cursor-pointer `,
  TextCheck: tw.p`truncate text-ellipsis overflow-hidden w-24 lg:w-auto`,
  InputCheckCondition: tw(CheckCheckCondition)`cursor-pointer `,
  LabelCheck: tw.label<Props>`flex ease-out 
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : 'opacity-50'}
  ${(props) => (props.ismode === BUTTON_ACTIVE.OFF ? 'opacity-50' : '')}`,
  LabelCheckBox: tw.label<Props>`
  flex ease-out duration-200 py-2 text-sm flex-nowrap
  ${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'opacity-100' : '')}
  ${(props) => (props.ismode === BUTTON_ACTIVE.OFF ? 'opacity-50' : '')}`,
  // FORM
  Error: tw.div`text-red-500 absolute text-PrimarySerif text-sm`,
  BlockSelect: tw.div`w-full flex flex-wrap pt-5 text-white font-PrimarySerif font-thin text-sm`,
  BlockSelectSecond: tw.div`w-full flex flex-wrap  text-white font-PrimarySerif font-thin text-sm pb-10`,
  AlingSelect: tw.div`w-3/6`,
  AlingSelectSecond: tw.div`w-2/6`,
  BlockCheck: tw.div`flex flex-wrap`,
  TextChecked: tw.p`mx-1`,
  LinkCheck: tw.h6`ml-1 underline cursor-pointer`,
};
