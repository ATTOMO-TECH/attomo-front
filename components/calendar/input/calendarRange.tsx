import es from 'date-fns/locale/es';
import { DateRangePicker } from 'react-nice-dates';
import { BlockDiv } from './styles';
import { handlersFuntionFocus } from '../../../hook/longPress';

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
      autoCorrect="off">
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
            <div {...handlersFuntionFocus('reserve')}>
              <input
                id="reserve"
                className={`input  w-3/6  outline-none inputDate opacity-40   text-sm font-light text-gray-300 h-full  py-3 hover:opacity-100${
                  focus ? ' -focused opacity-100' : ''
                }`}
                {...startDateInputProps}
                placeholder={placeholderFrom}
                autoComplete="off"
              />
            </div>
            <div className="w-3 h-0.5 border-b mx-5 " />
            <div {...handlersFuntionFocus('reserve2')}>
              <input
                autoComplete="off"
                id="reserve2"
                className={`input w-3/6   outline-none inputDate opacity-40  text-sm font-light text-gray-300 h-full  py-3  hover:opacity-100${
                  focus ? ' -focused opacity-100' : ''
                }`}
                {...endDateInputProps}
                placeholder={placeholderTo}
              />
            </div>
          </div>
        )}
      </DateRangePicker>
    </BlockDiv>
  );
}
