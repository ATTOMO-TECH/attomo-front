import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  text: any;
  value: string;
  color?: string;
}

export default function InputCheck({ text, value, color }: Props) {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <>
      <Styles.LabelCheckBox
        ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        className={`${color}`}>
        <Styles.InputCheck
          type="checkbox"
          value={value}
          onChange={() => setCheck((prevState) => !prevState)}
        />
        {text}
      </Styles.LabelCheckBox>
    </>
  );
}
