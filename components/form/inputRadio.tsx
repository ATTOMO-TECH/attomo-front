/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';

interface Props {
  text: string;
  value: string;
  onChange?: any;
}

export default function InputRadio({ text, value, onChange }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheck checkedValue={check && value}>
        <Styles.InputRadio
          key={text}
          type="radio"
          name="partner"
          defaultChecked={check}
          value={value}
          readOnly
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
