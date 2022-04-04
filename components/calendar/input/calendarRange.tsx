import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';

interface Props {
  setStartDateFilter: (dateStart: any) => void;
  setEndDateFilter: (dateEnd: any) => void;
  startDate: any;
  endDate: any;
}

export default function CalendarPickerInputRange({
  setStartDateFilter,
  setEndDateFilter,
  startDate,
  endDate,
}: Props) {
  const onChange = (dates: any) => {
    const [start, end] = dates;
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
          className="outline-none font-PrimarySerif font-thin text-gray-300 h-full w-full py-2 trend text-sm bg-none "
        />
      </div>
    </>
  );
}
