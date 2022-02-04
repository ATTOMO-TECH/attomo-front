import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  text: string;
  value: string;
}

export default function InputRadio({ text, value }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheck ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Styles.InputRadio
          type="radio"
          name="partner"
          value={value}
          onChange={(e: any) => setCheck(e.target.checked)}
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
