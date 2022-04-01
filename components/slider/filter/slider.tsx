import { useEffect, useState } from 'react';
import Picker from 'rmc-picker';
import { useUseAllPartner } from '../../../domain/usePartners';
import RenderLoading from '../../loading/loading';

interface Props {
  setTopic: (value: any) => void;
}

export default function FilterScroll({ setTopic }: Props) {
  const [value, setValue] = useState();
  const [query] = useState('');

  const { data: Partner, isLoading } = useUseAllPartner(query);

  useEffect(() => {
    setTopic(value);
  }, [value]);
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <div className="">
        <Picker
          indicatorClassName="my-picker-indicator "
          className=""
          selectedValue={value}
          onScrollChange={(e: any) => {
            setValue(e);
          }}>
          {Partner.data.map((values: any) => (
            <Picker.Item
              key={`${values.attributes.area}+${values.attributes.area}`}
              className="my-picker-view-item text-left  text-white"
              value={values.attributes.area}>
              {values.attributes.area}
            </Picker.Item>
          ))}
        </Picker>
      </div>
    </>
  );
}
