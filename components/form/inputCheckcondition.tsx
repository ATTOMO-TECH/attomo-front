/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import Conditions from './conditions';
import { handlersFuntion } from '../../hook/longPress';

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
  const iOSDevice = !!navigator.userAgent.match(/iPhone|iPod|iPad/);
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
        onClick={() => {
          if (!iOSDevice) {
            handleChange();
          }
        }}
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
