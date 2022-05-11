/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { Styles } from './style';

interface Props {
  text: string;
  value: string;
  onChange?: any;
}

export default function InputRadio({ text, value, onChange }: Props) {
  const [select, setSelect] = useState();
  const handleSelectChange = (e: any) => {
    setSelect(e.value);
  };

  return (
    <>
      <Styles.LabelCheck htmlFor="team" checkedValue={select === value}>
        <Styles.InputRadio
          onChange={(e: any) => {
            handleSelectChange(e);
            onChange(e.target.value);
          }}
          checked={select === value}
          type="radio"
          name="team"
          value={value}
          readOnly
          defaultChecked
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
