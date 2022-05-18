import { useState } from 'react';
import { Filter } from './style';
import { getLocale } from '../../public/locales/getLocale';
import CalendarPickerInput from '../calendar/input/calendarRange';
import Subtext from '../Text/subText';
import Title from '../Text/title';
import { useUseAllSubServices } from '../../domain/useServices';
import { handleFocus } from '../../hook/eventListener';
import InputSelect from '../form/select';

interface Props {
  setTopic: any;
  setSearch: any;
  locale: any;
  startDateModal: any;
  endDateModal: any;
  topicModal: any;
  searchModal: any;
  setStartDateModal: any;
  setEndDateModal: any;
}

export default function ModulelFilterResponsive({
  setTopic,
  startDateModal,
  endDateModal,
  topicModal,
  searchModal,
  locale,
  setSearch,
  setStartDateModal,
  setEndDateModal,
}: Props) {
  const translate = getLocale();
  const { data: Subservice, isLoading } = useUseAllSubServices(locale || 'es');
  const [selectedTopic, setSelectedTopic] = useState(topicModal);

  if (isLoading) {
    return <></>;
  }
  const DEPARTMENT = Subservice.data.map((values: any) => ({
    text: values.attributes.name,
    value: values.attributes.name,
  }));

  const onChangeTopic = (e: any) => {
    setSelectedTopic(e);
    setTopic(e);
  };

  return (
    <>
      <Filter.SectionMobile id="MobileFilterCases">
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
          <InputSelect
            selected={selectedTopic}
            options={DEPARTMENT}
            valueLabel={
              selectedTopic === '' ? `${translate.allServices}` : selectedTopic
            }
            name="filter"
            onChange={onChangeTopic}
            handleValue={setSelectedTopic}
          />
        </Filter.BlockItemMed>
        <Filter.BlockItemMobile>
          <Subtext size=" text-xs font-Primary text-left font-light">
            Fecha
          </Subtext>
          <CalendarPickerInput
            placeholderFrom={translate.FromDate}
            placeholderTo={translate.ToDate}
            setStartDateFilter={setStartDateModal}
            setEndDateFilter={setEndDateModal}
            startDate={startDateModal}
            endDate={endDateModal}
          />
        </Filter.BlockItemMobile>
      </Filter.SectionMobile>
    </>
  );
}
