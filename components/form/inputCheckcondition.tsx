/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  children: any;
  value: any;
  color?: string;
  onChange?: any;
}

export default function InputCheckcondition({
  children,
  value,
  color,
  onChange,
}: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox
        ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        className={`${color}`}
        htmlFor={value}>
        <Styles.InputCheckCondition
          type="checkbox"
          onChange={(e: any) => {
            setCheck(e.target.checked);
            onChange && onChange(e.target.checked);
          }}
          name={value}
        />
        {children}
      </Styles.LabelCheckBox>
    </>
  );
}
