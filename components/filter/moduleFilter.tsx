import FilterScroll from '../slider/filter/slider';
import { Filter } from './style';
import CalendarPicker from '../calendar/calendar';

// import { useEffect, useState } from 'react';
// import { useUseAllSubServices } from '../../domain/useServices';
// import RenderLoading from '../loading/loading';

interface Props {
  setDate: any;
  setTopic: any;
  setSearch: any;
}

export default function ModulelFilter({ setDate, setTopic, setSearch }: Props) {
  return (
    <>
      <Filter.AlingBlock>
        <Filter.InputSearch
          type="text"
          placeholder="Buscar"
          onChange={(e: any) => {
            setSearch(e.target.value);
          }}
        />
        <Filter.FirtsItemFilter>
          <Filter.TextItemFilter>
            <Filter.ValueFilter>Tématica</Filter.ValueFilter>
          </Filter.TextItemFilter>
          <Filter.SecondItem>
            <FilterScroll setTopic={setTopic} />
          </Filter.SecondItem>
        </Filter.FirtsItemFilter>
        <Filter.BlockSecondFilter>
          <Filter.TextItemFilter>
            <Filter.ValueFilter>Fecha</Filter.ValueFilter>
          </Filter.TextItemFilter>
          <Filter.SecondItem>
            <CalendarPicker setDate={setDate} />
          </Filter.SecondItem>
        </Filter.BlockSecondFilter>
      </Filter.AlingBlock>
    </>
  );
}
