/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  text: any;
  value: string;
  color?: string;
  onChange?: any;
}

export default function InputCheck({ text, value, color, onChange }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox
        htmlFor={value}
        ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        className={`${color}`}>
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
