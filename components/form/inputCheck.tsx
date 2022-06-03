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
          readOnly
          onTouchEnd={(e: any) => {
            setCheck(e.target.value);
            onChange && onChange(e.target.value);
            setCheck(!check);
          }}
          onChange={(e: any) => {
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
