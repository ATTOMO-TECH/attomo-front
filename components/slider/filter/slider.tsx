import { useState } from 'react';
import Picker from 'rmc-picker';
import 'rmc-picker/assets/index.css';
import { DEPARTMENT } from '../../../const/constGlobal';

interface Props {
  setTopic: (value: any) => void;
}

export default function FilterScroll({ setTopic }: Props) {
  const [value, setValue] = useState();

  return (
    <>
      <Picker
        indicatorClassName="my-picker-indicator bg-none"
        className=""
        selectedValue={value}
        onScrollChange={(e: any) => {
          setValue(e);
          setTopic(e);
        }}>
        {DEPARTMENT.map((values) => (
          <Picker.Item
            key={values.label}
            className="my-picker-view-item text-left bg-none text-white"
            value={values}>
            {values.label}
          </Picker.Item>
        ))}
      </Picker>
    </>
  );
}
