/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import Conditions from './conditions';

interface Props {
  value: any;
  color?: string;
  onClick?: any;
  onTouched?: any;
}

export default function InputCheckcondition({
  value,
  color,
  onClick,
  onTouched,
}: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox
        onTouchStart={() => {
          onTouched && onTouched(!check);
          setCheck(!check);
        }}
        checkedValue={check}
        className={`${color}`}
        onChange={() => {
          onClick && onClick(!check);
          setCheck(!check);
        }}
        htmlFor={value}>
        <Styles.InputCheckCondition
          type="checkbox"
          checked={check}
          readOnly
          id={value}
          value={check}
          name={value}
        />
        <Conditions />
      </Styles.LabelCheckBox>
    </>
  );
}
