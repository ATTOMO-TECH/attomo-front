import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  text: any;
  value: boolean;
  color?: string;
}

export default function InputCheckcondition({ text, value, color }: Props) {
  const [check, setCheck] = useState<boolean>(value);

  return (
    <>
      <Styles.LabelCheckBox
        ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        className={`${color}`}>
        <Styles.InputCheckCondition
          type="checkbox"
          checked={check}
          onChange={(e: any) => setCheck(e.target.checked)}
          value={text}
        />
        {text}
      </Styles.LabelCheckBox>
    </>
  );
}
