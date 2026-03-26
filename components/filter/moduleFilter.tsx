import { useRouter } from 'next/router';
import FilterScroll from '../slider/filter/slider';
import { Filter } from './style';
import { getLocale } from '../../public/locales/getLocale';
import CalendarPickerInput from '../calendar/input/calendarRange';
import { handleFocus } from '../../hook/eventListener';

interface Props {
  setTopic: any;
  setSearch: any;
  startDateModal: any;
  endDateModal: any;
  searchModal: any;
  setStartDateModal: any;
  setEndDateModal: any;
}

export default function ModulelFilter({
  setTopic,
  setSearch,
  startDateModal,
  endDateModal,
  searchModal,
  setStartDateModal,
  setEndDateModal,
}: Props) {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const translate = getLocale(locale || 'es');
  return (
    <>
      <Filter.AlingBlock>
        <Filter.InputSearch
          type="text"
          placeholder={translate.Search}
          id="search"
          value={searchModal}
          onChange={(e: any) => {
            setSearch(e.target.value);
          }}
          onTouchStart={() => {
            handleFocus('search');
          }}
        />
        <Filter.FirtsItemFilter>
          <Filter.TextItemFilter>
            <Filter.ValueFilter>{translate.Topic}</Filter.ValueFilter>
          </Filter.TextItemFilter>
          <Filter.SecondItem>
            <FilterScroll setTopic={setTopic} />
          </Filter.SecondItem>
        </Filter.FirtsItemFilter>
        <Filter.BlockSecondFilter>
          <Filter.TextItemFilter>
            <Filter.ValueFilter>{translate.Date}</Filter.ValueFilter>
          </Filter.TextItemFilter>
          <Filter.SecondItem>
            <CalendarPickerInput
              placeholderFrom={translate.FromDate}
              placeholderTo={translate.ToDate}
              setStartDateFilter={setStartDateModal}
              setEndDateFilter={setEndDateModal}
              startDate={startDateModal}
              endDate={endDateModal}
            />
          </Filter.SecondItem>
        </Filter.BlockSecondFilter>
      </Filter.AlingBlock>
    </>
  );
}
