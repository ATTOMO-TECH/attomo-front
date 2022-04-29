import router from 'next/router';
import { useEffect, useState } from 'react';
import Picker from 'rmc-picker';
import { useUseAllSubServices } from '../../../domain/useServices';
import RenderLoading from '../../loading/loading';

interface Props {
  setTopic: (value: any) => void;
  initialValue?: any;
}

export default function FilterScroll({ setTopic, initialValue = '' }: Props) {
  const [value, setValue] = useState(initialValue);
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }

  const { data: Subservice, isLoading } = useUseAllSubServices(locale || 'es');

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
          defaultSelectedValue={5}
          onScrollChange={(e: any) => {
            setValue(e);
          }}>
          {Subservice.data.map((values: any) => (
            <Picker.Item
              key={`${values.attributes.name}+${values.attributes.name}`}
              className="my-picker-view-item text-left  text-white touch-pan-y"
              value={values.attributes.name}>
              {values.attributes.name}
            </Picker.Item>
          ))}
        </Picker>
      </div>
    </>
  );
}
