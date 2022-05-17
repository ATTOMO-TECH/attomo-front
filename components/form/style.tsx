import { Field, Form } from 'formik';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { BUTTON_ACTIVE } from '../../const/const';

type Props = {
  ismode?: string;
  active?: boolean;
  checkedValue?: boolean;
};
export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
`;
export const Label = styled.label<Props>`
  ${({ checkedValue }) => (checkedValue ? 'opacity:1' : 'opacity:0.4')}
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
    opacity: 0.5;
  }
  &:checked {
    content: url(/icon/isoAttomo.svg);
    width: 2px;
    height: 25px;
    transition: 120ms transform ease-in-out;
    border: 0.15em solid white;
    padding: 5px;
    opacity: 1;
  }
`;
export const CheckCheck = styled.input`
  border-radius: 100%;
  &[type='checkbox'] {
    appearance: none;
    margin: 0;
    min-width: 25px;
    height: 25px;
    border: 0.15em solid white;
    border-radius: 100%;
    margin-right: 10px;
    opacity: 0.5;
  }

  &:checked {
    content: url(/icon/isoAttomo.svg);
    width: 25px;
    height: 25px;
    transition: 120ms transform ease-in-out;
    border: 0.15em solid white;
    padding: 5px;
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
    padding: 5px;
    content: url(/icon/isoAttomo.svg);
    width: 20px;
    height: 20px;
    transition: 120ms transform ease-in-out;
    border: 1px solid white;
  }
`;

export const BtnSelect = styled.button<Props>`
  z-index: 1;
  ${({ active }) =>
    active
      ? '-webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9); -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9); 	opacity: 1;'
      : ''}
`;
export const ErrorText = styled.div<Props>`
  color: #ee3e54;
  opacity: 0.8;
`;
export const BtnSend = styled.button`
  -webkit-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
  -moz-box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 18px -1px rgba(255, 255, 255, 0.9);
`;

export const Succes = styled.div`
  body {
    background: black;
  }
  .success-checkmark {
    width: 80px;
    height: 115px;
    margin: 0 auto;
  }
  .success-checkmark .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #4caf50;
  }
  .success-checkmark .check-icon::before {
    top: 3px;
    left: -2px;
    width: 30px;
    transform-origin: 100% 50%;
    border-radius: 100px 0 0 100px;
  }
  .success-checkmark .check-icon::after {
    top: 0;
    left: 30px;
    width: 60px;
    transform-origin: 0 50%;
    border-radius: 0 100px 100px 0;
    animation: rotate-circle 4.25s ease-in;
  }
  .success-checkmark .check-icon::before,
  .success-checkmark .check-icon::after {
    content: '';
    height: 100px;
    position: absolute;
    background: transparent;
    transform: rotate(-45deg);
  }
  .success-checkmark .check-icon .icon-line {
    height: 5px;
    background-color: #4caf50;
    display: block;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
  }
  .success-checkmark .check-icon .icon-line.line-tip {
    top: 46px;
    left: 14px;
    width: 25px;
    transform: rotate(45deg);
    animation: icon-line-tip 0.75s;
  }
  .success-checkmark .check-icon .icon-line.line-long {
    top: 38px;
    right: 8px;
    width: 47px;
    transform: rotate(-45deg);
    animation: icon-line-long 0.75s;
  }
  .success-checkmark .check-icon .icon-circle {
    top: -4px;
    left: -4px;
    z-index: 10;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    box-sizing: content-box;
    border: 4px solid rgba(76, 175, 80, 0.5);
  }
  .success-checkmark .check-icon .icon-fix {
    top: 8px;
    width: 5px;
    left: 26px;
    z-index: 1;
    height: 85px;
    position: absolute;
    transform: rotate(-45deg);
    background-color: transparent;
  }
  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }
  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }
  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
    }
  }
`;

export const Styles = {
  Select: tw(
    Select,
  )`bg-black text-primary outline-none text-sm lg:py-4 font-PrimarySerif font-light ml-5 z-90`,
  BlockButton: tw.div`flex lg:justify-center justify-between`,
  BlockSendButton: tw.div`flex justify-center  pt-6`,

  BtnSelect: tw(
    BtnSelect,
  )` ease-out inline-flex justify-center  w-5/12  lg:w-2/12 duration-200 text-primary border-2 border-primary text-left lg:text-sm py-2 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none lg:mr-5`,
  BtnSend: tw(
    BtnSend,
  )<Props>` ease-out inline-flex justify-center w-3/6 lg:w-3/12 duration-200 text-primary border-2 border-primary text-left lg:text-sm py-2 rounded-full opacity-20 font-PrimarySerif font-thin shadow-none mr-5
  ${(props) =>
    props.ismode === BUTTON_ACTIVE.ON
      ? 'opacity-20 cursor-auto'
      : 'opacity-90 cursor-pointer'} `,
  SectionRenderForm: tw.section`my-12`,
  Form: tw(Form)`lg:w-4/6 m-auto touch-enabled`,
  SectionInputs: tw.div`grid grid-cols-2 gap-6  m-auto`,
  BlockInput: tw.div`col-span-2 lg:col-span-1 relative`,
  BlockInputOnly: tw.div`col-span-2 lg:col-span-2 relative`,
  BlockInputs: tw.div`grid grid-cols-2 gap-6  m-auto  lg:pt-5`,
  BlockInputsCenter: tw.div`grid grid-cols-2 lg:gap-6 -gap-4   m-auto  lg:pt-5`,
  BlockInputEnd: tw.div`grid grid-cols-2 gap-4  m-auto pt-5`,
  MessageError: tw.span``,
  BlockClose: tw(Input)``,
  Input: tw(
    Field,
  )<Props>`pl-1 outline-none w-full bg-transparent border-b border-primary py-2 font-light text-gray-300 opacity-40 focus:opacity-100 hover:opacity-100 ease-out duration-200
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
`,
  InputDate: tw(
    Field,
  )<Props>`pl-2 lg:pl-0 outline-none w-full bg-transparent opacity-20 border-b border-primary mr-7 text-primary opacity-40 focus:opacity-100 ease-out duration-200
${(props) => (props.ismode === BUTTON_ACTIVE.ON ? 'lg:my-0 my-5' : '')}
`,
  InputRadio: tw(CheckRadio)`cursor-pointer`,
  InputCheck: tw(CheckCheck)`cursor-pointer `,
  TextCheck: tw.p`truncate text-ellipsis overflow-hidden lg:w-24 lg:w-auto`,
  InputCheckCondition: tw(CheckCheckCondition)`cursor-pointer `,
  LabelCheck: tw(Label)`flex ease-out `,
  LabelCheckBox: tw(Label)`
  flex ease-out duration-200 py-2 text-sm flex-nowrap`,
  // FORM
  Error: tw(ErrorText)` absolute text-PrimarySerif text-sm pt-0.5`,
  BlockSelect: tw.div`w-full flex flex-wrap pt-5 text-white font-PrimarySerif font-thin text-sm`,
  BlockSelectSecond: tw.div`w-full flex flex-wrap  text-white font-PrimarySerif font-thin text-sm lg:pb-10 pb-4`,
  AlingSelect: tw.div`w-3/6`,
  AlingSelectSecond: tw.div`w-full lg:w-2/6 `,
  BlockCheck: tw.div`flex flex-wrap`,
  TextChecked: tw.p`mx-1`,
  LinkCheck: tw.h6`ml-1 underline cursor-pointer`,
  SuccesButton: tw(Succes)``,
};
