/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import Conditions from './conditions';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  value: any;
  color?: string;
  onClick?: any;
}

export default function InputCheckcondition({ value, color, onClick }: Props) {
  const [check, setCheck] = useState<boolean>(false);

  const handleChange = () => {
    onClick(!check);
    setCheck(!check);
  };

  return (
    <>
      <Styles.LabelCheckBox
        checkedValue={check}
        className={`${color}`}
        htmlFor={value}
        onChange={() => handleChange()}
        {...handlersFuntion(handleChange)}>
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
