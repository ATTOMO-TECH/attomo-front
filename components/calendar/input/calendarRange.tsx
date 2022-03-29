import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

interface Props {
  setStartDateFilter: (dateStart: any) => void;
  setEndDateFilter: (dateEnd: any) => void;
}

export default function CalendarPickerInputRange({
  setStartDateFilter,
  setEndDateFilter,
}: Props) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setStartDateFilter(start);
    setEndDateFilter(end);
  };
  return (
    <>
      <div id="trend">
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText="Fecha"
          dateFormat="dd/MM/yyyy"
          locale={es}
          className="outline-none font-PrimarySerif font-thin text-gray-300 h-full w-full py-5 trend text-sm "
        />
      </div>
    </>
  );
}
