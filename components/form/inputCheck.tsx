/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';

interface Props {
  text: any;
  value: string;

  onChange?: any;
}

export default function InputCheck({ text, value, onChange }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox htmlFor={value} checkedValue={check}>
        <Styles.InputCheck
          type="checkbox"
          name={value}
          id={value}
          checked={check}
          onTouchEnd={(e: any) => {
            setCheck(e.target.value);
            onChange && onChange(e.target.value);
            setCheck(!check);
          }}
          onClick={(e: any) => {
            setCheck(e.target.value);
            onChange && onChange(e.target.value);
            setCheck(!check);
          }}
        />
        <Styles.TextCheck> {text}</Styles.TextCheck>
      </Styles.LabelCheckBox>
    </>
  );
}
