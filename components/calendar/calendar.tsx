import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';

interface Props {
  setDate: (value: any) => void;
  dateRangeProp?: any;
}

export default function CalendarPicker({ setDate, dateRangeProp = [] }: Props) {
  const [dateRange, setDateRange] = useState(dateRangeProp);
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
