import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { handleFocus, handleFocusClass } from '../../../hook/eventListener';
import { getLocale } from '../../../public/locales/getLocale';
import { BlockDiv } from './styles';

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
      <BlockDiv
        active={startDate !== undefined || null || false}
        id="trend"
        onTouchStart={() => {
          handleFocus('reserve');
          handleFocusClass('react-datepicker', onChange);
        }}>
        <DatePicker
          id="reserve"
          name="reserve"
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          showDisabledMonthNavigation
          placeholderText={translate.SelectDate}
          dateFormat="dd/MM/yyyy"
          locale={es}
          className="outline-none text-opacity-0 pl-1 h-full w-full py-2  bg-none touch-manipulation"
        />
      </BlockDiv>
    </>
  );
}
