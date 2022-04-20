import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { getLocale } from '../../../public/locales/getLocale';

interface Props {
  setDate: (value: any) => void;
  dateRangeProp?: any;
}
export default function CalendarPickerRangeInput({
  setDate,
  dateRangeProp = [],
}: Props) {
  const [dateRange, setDateRange] = useState(dateRangeProp);
  const [startDate, endDate] = dateRange;
  const handleDateChangeRaw = (e: any) => {
    e.preventDefault();
  };
  const translate = getLocale();
  return (
    <>
      <DatePicker
        id="reserve"
        placeholderText={translate.SelectDate}
        dateFormat="dd/MM/yyyy"
        locale={es}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
          setDate(update);
        }}
        onChangeRaw={handleDateChangeRaw}
        className="outline-none font-PrimarySerif text-sm font-thin text-gray-300 h-full w-full py-2.5 "
      />
    </>
  );
}
