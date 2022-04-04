import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

interface Props {
  setDate: (value: any) => void;
}
export default function CalendarPickerRangeInput({ setDate }: Props) {
  const [dateRange, setDateRange] = useState([]);
  const [startDate, endDate] = dateRange;
  const handleDateChangeRaw = (e: any) => {
    e.preventDefault();
  };
  return (
    <>
      <DatePicker
        id="reserve"
        placeholderText="Fecha"
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
        className="outline-none font-PrimarySerif font-thin text-gray-300 h-full w-full py-2.5 "
      />
    </>
  );
}
