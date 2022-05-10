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
        checked={check && value}
        className={`${color}`}
        htmlFor={value}>
        <Styles.InputCheckCondition
          type="checkbox"
          checked={check}
          onTouchedStart={(e: any) => {
            setCheck(!check);

            onTouched && onTouched(e.target.checked);
          }}
          onClick={(e: any) => {
            setCheck(e.target.checked);
            onClick && onClick(e.target.checked);
          }}
          name={value}
        />
        {children}
      </Styles.LabelCheckBox>
    </>
  );
}
