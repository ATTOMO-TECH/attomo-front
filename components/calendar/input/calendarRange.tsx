import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { getLocale } from '../../../public/locales/getLocale';

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
  const translate = getLocale();
  return (
    <>
      <div id="trend reserve">
        <DatePicker
          selected={startDate}
          disabledKeyboardNavigation
          autoComplete="off"
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText={translate.SelectDate}
          dateFormat="dd/MM/yyyy"
          locale={es}
          className="outline-none text-opacity-0 pl-1 h-full w-full py-2  bg-none "
        />
      </div>
    </>
  );
}
