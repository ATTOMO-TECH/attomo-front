import es from 'date-fns/locale/es';
import { DatePicker } from 'react-nice-dates';
import { useState } from 'react';
import { getLocale } from '../../../public/locales/getLocale';
import { BlockDiv } from './styles';
import { handleFocus } from '../../../hook/eventListener';

interface Props {
  handleValue: (value: any) => void;
  id: any;
}

export default function CalendarPickerInput({ handleValue, id }: Props) {
  const [dateValue, setDate] = useState();

  const translate = getLocale();
  return (
    <BlockDiv
      active={!(dateValue === undefined || null)}
      id={id}
      className="relative"
      autoCorrect="off"
      onTouchStart={() => {
        handleFocus('reserve');
      }}>
      <DatePicker
        minimumDate={new Date()}
        format="dd/MM/yyyy"
        date={dateValue}
        locale={es}
        onDateChange={(date: any) => {
          handleValue(date);
          setDate(date);
        }}>
        {({ inputProps, focused }) => (
          <input
            autoComplete="off"
            className={
              dateValue === undefined || null
                ? 'inputDate outline-none  text-sm font-light text-gray-300 h-full w-full py-3 opacity-50 hover:opacity-80  '
                : `inputDate outline-none  text-sm font-light text-gray-300 h-full w-full py-3 opacity-80${
                    focused ? ' -focused' : ''
                  }`
            }
            {...inputProps}
            placeholder={translate.SelectDate}
            id="reserve"
          />
        )}
      </DatePicker>
    </BlockDiv>
  );
}
