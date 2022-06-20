/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';

interface Props {
  text: any;
  value: string;
  onChange?: any;
  id: string;
}

export default function InputCheck({ text, value, onChange, id }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox
        htmlFor={value}
        checkedValue={check}
        onTouchStart={(e: any) => {
          onChange(e.target.value);
          setCheck(!check);
        }}
        onClick={(e: any) => {
          onChange(e.target.value);
          setCheck(!check);
        }}>
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
