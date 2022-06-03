/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';

interface Props {
  children: any;
  value: any;
  color?: string;
  onClick?: any;
  onTouched?: any;
}

export default function InputCheckcondition({
  children,
  value,
  color,
  onClick,
  onTouched,
}: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheckBox
        checkedValue={check}
        className={`${color}`}
        htmlFor={value}>
        <Styles.InputCheckCondition
          type="checkbox"
          onTouchStart={() => {
            onTouched && onTouched(!check);
            setCheck(!check);
          }}
          checked={check}
          readOnly
          onChange={() => {
            onClick && onClick(!check);
            setCheck(!check);
          }}
          value={check}
          name={value}
        />
        {children}
      </Styles.LabelCheckBox>
    </>
  );
}
