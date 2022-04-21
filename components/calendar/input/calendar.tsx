import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { getLocale } from '../../../public/locales/getLocale';

interface Props {
  handleValue: (value: any) => void;
}

export default function CalendarPickerInput({ handleValue }: Props) {
  const [startDate, setStartDate] = useState<Date>();
  const translate = getLocale();
  const handleDateChangeRaw = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <DatePicker
        id="reserve"
        onChangeRaw={() => handleDateChangeRaw}
        placeholderText={translate.SelectDate}
        dateFormat="dd/MM/yyyy"
        locale={es}
        autoComplete="off"
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          handleValue(date);
        }}
        className={
          startDate === undefined
            ? 'outline-none font-PrimarySerif font-thin text-regular text-gray-300 opacity-50 hover:opacity-70 h-full w-full py-3  '
            : 'outline-none font-PrimarySerif font-thin text-regular text-gray-300 opacity-100 h-full w-full py-3 '
        }
      />
    </>
  );
}
