import { useState } from 'react';
import { Filter } from './style';
import CalendarPickerRangeInput from '../calendar/input/calendaRangeInput';
import Subtext from '../Text/subText';
import Title from '../Text/title';
import { useUseAllSubServices } from '../../domain/useServices';
import SelectFilterMenu from './selectedFilterMenu';
import RenderLoading from '../loading/loading';
import { handleFocus } from '../../hook/eventListener';

interface Props {
  setDate: any;
  setTopic: any;
  setSearch: any;
  locale: any;
  startDateModal: any;
  endDateModal: any;
  topicModal: any;
  searchModal: any;
}

export default function ModulelFilterResponsive({
  setDate,
  setTopic,
  startDateModal,
  endDateModal,
  topicModal,
  searchModal,
  locale,
  setSearch,
}: Props) {
  const { data: Subservice, isLoading } = useUseAllSubServices(locale || 'es');
  const [selectedTopic, setSelectedTopic] = useState(topicModal);

  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  const DEPARTMENT = Subservice.data.map((values: any) => ({
    label: values.attributes.name,
    value: values.attributes.name,
  }));

  const onChangeTopic = (e: any) => {
    setSelectedTopic(e.value);
    setTopic(e.value);
  };

  return (
    <>
      <Filter.SectionMobile>
        <Title size="text-md text-left pb-0 ">Filtrar por</Title>
        <Filter.BlockItemMobile>
          <Subtext size=" text-xs font-Primary text-left font-light">
            Buscar
          </Subtext>
          <Filter.InputSearch
            type="text"
            placeholder="Añadir texto"
            value={searchModal}
            id="search"
            onTouchStart={() => {
              handleFocus('search');
            }}
            onChange={(e: any) => {
              setSearch(e.target.value);
            }}
          />
        </Filter.BlockItemMobile>
        <Filter.BlockItemMed>
          <Subtext size=" text-xs font-Primary text-left font-light">
            Servicios
          </Subtext>
          <SelectFilterMenu
            selected={selectedTopic}
            options={DEPARTMENT}
            valueLabel={
              selectedTopic === '' ? 'Todos los servicios' : selectedTopic
            }
            name={selectedTopic}
            onChange={onChangeTopic}
          />
        </Filter.BlockItemMed>
        <Filter.BlockItemMobile>
          <Subtext size=" text-xs font-Primary text-left font-light">
            Fecha
          </Subtext>
          <CalendarPickerRangeInput
            setDate={setDate}
            dateRangeProp={[startDateModal, endDateModal]}
          />
        </Filter.BlockItemMobile>
      </Filter.SectionMobile>
    </>
  );
}
