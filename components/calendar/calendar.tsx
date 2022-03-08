import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

export default function CalendarPicker() {
  const [dateRange, setDateRange] = useState([]);
  const [startDate, endDate] = dateRange;
  return (
    <>
      <DatePicker
        placeholderText="Todas las fechas"
        locale={es}
        selectsRange
        startDate={startDate}
        endDate={endDate}
        onChange={(update: any) => {
          setDateRange(update);
        }}
        withPortal
      />
    </>
  );
}
