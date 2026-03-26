import es from 'date-fns/locale/es';
import { enGB } from 'date-fns/locale';
import { useRouter } from 'next/router';
import { DatePicker } from 'react-nice-dates';
import { useState, useEffect } from 'react';
/* import { getLocale } from '../../../public/locales/getLocale'; */
import { BlockDiv } from './styles';

interface Props {
  handleValue: (value: any) => void;
  id: any;
  translate: any;
}

export default function CalendarPickerInput({
  handleValue,
  id,
  translate,
}: Props) {
  const [dateValue, setDate] = useState();
  const router = useRouter();
  const [locale, setLocale] = useState(es);
  if (router.locale === '/') {
    router.locale = 'es';
  }
  useEffect(() => {
    if (router.locale === 'es') {
      setLocale(es);
    } else {
      setLocale(enGB);
    }
  }, [router.locale]);
  /* const translate = getLocale(); */
  return (
    <BlockDiv
      active={!(dateValue === undefined || null)}
      className="relative"
      autoCorrect="off">
      <DatePicker
        minimumDate={new Date()}
        format="dd/MM/yyyy"
        date={dateValue}
        locale={locale}
        onDateChange={(date: any) => {
          handleValue(date);
          setDate(date);
        }}>
        {({ inputProps, focused }) => (
          <input
            autoComplete="off"
            className={
              dateValue === undefined || null
                ? 'inputDate outline-none text-sm font-light text-gray-300 h-full w-full py-3 opacity-50 hover:opacity-80  '
                : `inputDate outline-none text-sm font-light text-white h-full w-full py-3 opacity-100${
                    focused ? ' -focused' : ''
                  }`
            }
            {...inputProps}
            placeholder={translate.SelectDate}
            id={id}
          />
        )}
      </DatePicker>
    </BlockDiv>
  );
}
