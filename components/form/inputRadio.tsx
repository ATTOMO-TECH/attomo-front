/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  text: string;
  value: string;
  onChange?: any;
}

export default function InputRadio({ text, value, onChange }: Props) {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <>
      <Styles.LabelCheck ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Styles.InputRadio
          type="radio"
          name="partner"
          value={value}
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
        {text}
      </Styles.LabelCheck>
    </>
  );
}
