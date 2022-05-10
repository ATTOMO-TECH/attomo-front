/* eslint-disable no-unused-expressions */
import { useState, useEffect } from 'react';
import { Styles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  text: string;
  value: string;
  onChange?: any;
}

export default function InputRadio({ text, value, onChange }: Props) {
  const [check, setCheck] = useState<boolean>(false);
  const [sectionInputDetailKey, setSectionInputDetailKey] = useState(
    Math.random(),
  );

  useEffect(() => {
    if (check === false) {
      setCheck(false);
      setSectionInputDetailKey(Math.random());
    }
  }, [check]);

  return (
    <>
      <Styles.LabelCheck
        ismode={check ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        key={sectionInputDetailKey}>
        <Styles.InputRadio
          key={sectionInputDetailKey}
          type="radio"
          name="partner"
          value={value}
          onTouchEnd={(e: any) => {
            setCheck(e.target.value);
            onChange && onChange(e.target.value);
            setCheck(!check);
          }}
          checked={check}
          onClick={(e: any) => {
            setCheck(e.target.value);
            onChange && onChange(e.target.value);
            setCheck(!check);
          }}
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
