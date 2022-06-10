/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';

interface Props {
  text: any;
  value: string;
  key: string;
  onChange?: any;
}

export default function InputCheck({ text, value, onChange, key }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox
        htmlFor={key}
        checkedValue={check}
        onTouchStart={(e: any) => {
          setCheck(e.target.value);
          onChange && onChange(e.target.value);
          setCheck(!check);
        }}
        onClick={(e: any) => {
          setCheck(e.target.value);
          onChange && onChange(e.target.value);
          setCheck(!check);
        }}
        key={`${key}-${value}`}>
        <Styles.InputCheck
          type="checkbox"
          name={key}
          id={key}
          checked={check}
          readOnly
        />
        <Styles.TextCheck> {text}</Styles.TextCheck>
      </Styles.LabelCheckBox>
    </>
  );
}
