/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  text: any;
  value: string;
  onChange?: any;
}

export default function InputCheck({ text, value, onChange }: Props) {
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
        {...handlersFuntion(handleChange)}
        onClick={(e: any) => {
          onChange(e.target.value);
          setCheck(!check);
        }}>
        <Styles.InputCheck
          type="checkbox"
          name={value}
          id={value}
          checked={check}
        />
        <Styles.TextCheck> {text}</Styles.TextCheck>
      </Styles.LabelCheckBox>
    </>
  );
}
