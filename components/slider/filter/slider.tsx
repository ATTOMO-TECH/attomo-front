import { useState } from 'react';
import Picker from 'rmc-picker';
import { DEPARTMENT } from '../../../const/constGlobal';

interface Props {
  setTopic: (value: any) => void;
}

export default function FilterScroll({ setTopic }: Props) {
  const [value, setValue] = useState();

  return (
    <>
      <div className="">
        <Picker
          indicatorClassName="my-picker-indicator "
          className=""
          selectedValue={value}
          onScrollChange={(e: any) => {
            setValue(e);
            setTopic(e);
          }}>
          {DEPARTMENT.map((values) => (
            <Picker.Item
              key={`${values.label}+${values.value}`}
              className="my-picker-view-item text-left  text-white"
              value={values}>
              {values.label}
            </Picker.Item>
          ))}
        </Picker>
      </div>
    </>
  );
}
