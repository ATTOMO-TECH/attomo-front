/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import Conditions from './conditions';

interface Props {
  value: any;
  color?: string;
  onClick?: any;
  id: string;
}

export default function InputCheckcondition({
  value,
  color,
  onClick,
  id,
}: Props) {
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = () => {
    onClick(!check);
    setCheck(!check);
  };

  return (
    <>
      <Styles.LabelCheckBox
        checkedValue={check}
        id={id}
        className={`${color}`}
        htmlFor={value}
        onTouchStart={() => handleChange()}
        onChange={() => handleChange()}>
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
