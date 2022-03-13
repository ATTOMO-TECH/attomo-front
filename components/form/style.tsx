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
    border: 0em solid white;
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
  )`block ease-out duration-200 text-primary border-2 border-primary px-12 lg:text-sm py-3 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none mr-5 `,

  Form: tw(Form)`lg:w-4/6 m-auto`,
  SectionInput: tw.div`flex flex-col lg:flex-row `,
  BlockSections: tw.div`w-full relative lg:pr-5`,
  BlockSectionMargin: tw.div`w-full relative pt-5 lg:pr-5`,
  BlockSectionMarginTop: tw.div`w-full relative pt-5`,
  SubBlock: tw.div`w-full relative`,
  SingleInput: tw.div`py-1`,
  BlockBtn: tw.button`text-primary font-thin w-7/12 flex ml-auto z-0`,
  BlockCount: tw.div`text-primary `,
  LineBlock: tw.div`flex flex-wrap justify-between pt-5`,
  TextCount: tw.h6`font-Primary text-xl text-primary`,
  SubText: tw.h6`font-Secundary text-sm opacity-50 text-primary font-thin`,
  BlockInput: tw.div`w-full delay-150 duration-300 ease-in-out relative`,
  BlockClose: tw(Input)``,
  Input: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent pr-5 border-b border-primary py-2 mr-5 text-primary opacity-40 focus:opacity-100 ease-out duration-200
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
  flex ease-out duration-200 py-2 text-sm 
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
