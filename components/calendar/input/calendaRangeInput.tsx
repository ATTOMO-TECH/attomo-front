import es from 'date-fns/locale/es';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { getLocale } from '../../../public/locales/getLocale';
import { handleFocus, handleFocusClass } from '../../../hook/eventListener';
import { BlockDiv } from './styles';

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
    <BlockDiv
      active={(dateRange.length > 0 && true) || false}
      id="trend"
      onTouchStart={() => {
        handleFocus('reserve');
        handleFocusClass('react-datepicker', setDate);
      }}>
      <DatePicker
        id="reserve"
        placeholderText={translate.SelectDate}
        dateFormat="dd/MM/yyyy"
        autoComplete="off"
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
    </BlockDiv>
  );
}
