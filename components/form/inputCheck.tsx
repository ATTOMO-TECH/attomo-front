/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  text: any;
  value: string;
  onChange?: any;
  id: string;
}

export default function InputCheck({ text, value, onChange, id }: Props) {
  const iOSDevice = !!navigator.userAgent.match(/iPhone|iPod|iPad/);
  const [check, setCheck] = useState<boolean>(false);
  const handleChange = ({ event }: any) => {
    onChange(event.target.value);
    setCheck(!check);
  };

  return (
    <>
      <Styles.LabelCheckBox
        htmlFor={value}
        checkedValue={check}
        onClick={(e: any) => {
          if (!iOSDevice) {
            onChange(e.target.value);
            setCheck(!check);
          }
        }}
        {...handlersFuntion(handleChange)}>
        <Styles.InputCheck
          readOnly
          type="checkbox"
          name={value}
          id={id}
          checked={check}
        />
        <Styles.TextCheck> {text}</Styles.TextCheck>
      </Styles.LabelCheckBox>
    </>
  );
}
