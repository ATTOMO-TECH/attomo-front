import FilterScroll from '../slider/filter/slider';
import { Filter } from './style';
import CalendarPicker from '../calendar/calendar';

interface Props {
  setDate: any;
  setTopic: any;
  setSearch: any;
  startDateModal: any;
  endDateModal: any;
  topicModal: any;
  searchModal: any;
}

export default function ModulelFilter({
  setDate,
  setTopic,
  setSearch,
  startDateModal,
  endDateModal,
  topicModal,
  searchModal,
}: Props) {
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
            <CalendarPicker
              setDate={setDate}
              dateRangeProp={[startDateModal, endDateModal]}
            />
          </Filter.SecondItem>
        </Filter.BlockSecondFilter>
      </Filter.AlingBlock>
    </>
  );
}
