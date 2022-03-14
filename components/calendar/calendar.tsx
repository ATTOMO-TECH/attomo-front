import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

interface Props {
  setDate: (value: any) => void;
}

export default function CalendarPicker({ setDate }: Props) {
  const [dateRange, setDateRange] = useState([]);
  const [startDate, endDate] = dateRange;

  return (
    <>
      <DatePicker
        placeholderText="Todas las fechas"
        dateFormat="dd/MM/yyyy"
        locale={es}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
          setDate(update);
        }}
        withPortal
      />
    </>
  );
}
