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
  return (
    <>
      <DatePicker
        id="reserve"
        placeholderText={translate.SelectDate}
        dateFormat="dd/MM/yyyy"
        locale={es}
        selected={startDate}
        onChange={(date: Date) => {
          setStartDate(date);
          handleValue(date);
        }}
        className="outline-none font-PrimarySerif font-light text-gray-300 h-full w-full py-2.5 "
      />
    </>
  );
}
