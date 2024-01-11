/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';
import { handlersFuntion } from '../../hook/longPress';
import ConditionsFooter from './conditionsFooter';

interface Props {
  value: any;
  color?: string;
  onClick?: any;
  id: string;
}

export default function InputCheckBoxConditionFooter({
  value,
  color,
  onClick,
  id,
}: Props) {
  const [check, setCheck] = useState<boolean>(false);
  const iOSDevice =
    typeof window !== 'undefined' &&
    !!navigator.userAgent.match(/iPhone|iPod|iPad/);
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
        <ConditionsFooter />
      </Styles.LabelCheckBox>
    </>
  );
}
