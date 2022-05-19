import es from 'date-fns/locale/es';
import { DateRangePicker } from 'react-nice-dates';
import { handleFocus } from '../../../hook/eventListener';
import { BlockDiv } from './styles';

interface Props {
  setStartDateFilter: any;
  setEndDateFilter: any;
  startDate: Date | undefined;
  endDate: Date | undefined;
  placeholderFrom: string;
  placeholderTo: string;
}

export default function CalendarPickerInput({
  setStartDateFilter,
  setEndDateFilter,
  startDate,
  endDate,
  placeholderFrom,
  placeholderTo,
}: Props) {
  return (
    <BlockDiv
      active={startDate !== null && startDate !== undefined}
      className="relative"
      autoCorrect="off"
      onTouchEnd={() => {
        handleFocus('reserveForm');
      }}>
      <form id="reserveForm">
        <DateRangePicker
          key="reserve"
          format="dd MMM yyyy"
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDateFilter}
          onEndDateChange={setEndDateFilter}
          locale={es}>
          {({ startDateInputProps, endDateInputProps, focus }) => (
            <div className="date-range flex items-center">
              <input
                onTouchEnd={() => {
                  handleFocus('reserve');
                }}
                id="reserve"
                className={`input  w-3/6  outline-none inputDate   text-sm font-light text-gray-300 h-full  py-3 opacity-50 hover:opacity-80${
                  focus ? ' -focused' : ''
                }`}
                {...startDateInputProps}
                placeholder={placeholderFrom}
                autoComplete="off"
              />

              <div className="w-3 h-0.5 border-b mx-5 " />

              <input
                onTouchStart={() => {
                  handleFocus('reserve2');
                }}
                autoComplete="off"
                id="reserve2"
                className={`input w-3/6   outline-none inputDate   text-sm font-light text-gray-300 h-full  py-3 opacity-50 hover:opacity-80${
                  focus ? ' -focused' : ''
                }`}
                {...endDateInputProps}
                placeholder={placeholderTo}
              />
            </div>
          )}
        </DateRangePicker>
      </form>
    </BlockDiv>
  );
}
