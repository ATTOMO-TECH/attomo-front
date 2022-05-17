import { useRouter } from 'next/router';
import FilterScroll from '../slider/filter/slider';
import { Filter } from './style';
import { getLocale } from '../../public/locales/getLocale';
import CalendarPickerInput from '../calendar/input/calendarRange';

interface Props {
  setTopic: any;
  setSearch: any;
  startDateModal: any;
  endDateModal: any;
  topicModal: any;
  searchModal: any;
  setStartDateModal: any;
  setEndDateModal: any;
}

export default function ModulelFilter({
  setTopic,
  setSearch,
  startDateModal,
  endDateModal,
  topicModal,
  searchModal,
  setStartDateModal,
  setEndDateModal,
}: Props) {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const translate = getLocale();
  return (
    <>
      <Filter.AlingBlock>
        <Filter.InputSearch
          type="text"
          placeholder="Buscar"
          value={searchModal}
          onChange={(e: any) => {
            setSearch(e.target.value);
          }}
        />
        <Filter.FirtsItemFilter>
          <Filter.TextItemFilter>
            <Filter.ValueFilter>Tématica</Filter.ValueFilter>
          </Filter.TextItemFilter>
          <Filter.SecondItem>
            <FilterScroll setTopic={setTopic} initialValue={topicModal} />
          </Filter.SecondItem>
        </Filter.FirtsItemFilter>
        <Filter.BlockSecondFilter>
          <Filter.TextItemFilter>
            <Filter.ValueFilter>Fecha</Filter.ValueFilter>
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
