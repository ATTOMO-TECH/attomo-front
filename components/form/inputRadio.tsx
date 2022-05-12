import { useState } from 'react';
import { Styles } from './style';

interface Props {
  text: string;
  value: string;
  onChange?: any;
  valueChecked: string;
}

export default function InputRadio({
  text,
  value,
  onChange,
  valueChecked,
}: Props) {
  const [check, setCheck] = useState<boolean>(false);

  return (
    <>
      <Styles.LabelCheck
        htmlFor={value}
        checkedValue={valueChecked === value && check}>
        <Styles.InputRadio
          type="radio"
          name="partner"
          value={value}
          onTouchEnd={(e: any) => [
            setCheck(!check),
            onChange && onChange(e.target.value),
          ]}
          checked={valueChecked === value && check}
          onClick={(e: any) => [
            setCheck(!check),
            onChange && onChange(e.target.value),
          ]}
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
