import { useState } from 'react';
import { Filter } from './style';
import CalendarPickerRangeInput from '../calendar/input/calendaRangeInput';
import Subtext from '../Text/subText';
import Title from '../Text/title';
import { useUseAllSubServices } from '../../domain/useServices';
import SelectFilterMenu from './selectedFilterMenu';
import RenderLoading from '../loading/loading';
import { useUseDisciplines } from '../../domain/useCasesDetails';

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
  setSearch,
  startDateModal,
  endDateModal,
  topicModal,
  searchModal,
  locale,
}: Props) {
  const { data: Subservice, isLoading } = useUseAllSubServices(locale || 'es');
  const { data: Discipline, isLoading: isLoadingDiscipline } =
    useUseDisciplines(locale || 'es');
  const [selectedTopic, setSelectedTopic] = useState(topicModal);
  const [selectedDiscipline, setSelectedDiscipline] = useState(searchModal);

  if (isLoading || isLoadingDiscipline) {
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

  const DISCIPLINE = Discipline.data.map((values: any) => ({
    label: values.attributes.name,
    value: values.attributes.name,
  }));

  const onChangeTopic = (e: any) => {
    setSelectedTopic(e.value);
    setTopic(e.value);
  };
  const onChangeSearch = (e: any) => {
    setSelectedDiscipline(e.value);
    setSearch(e.value);
  };

  return (
    <>
      <Filter.SectionMobile>
        <Title size="text-md text-left pb-0 ">Filtrar por</Title>
        <Filter.BlockItemMobile>
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
        </Filter.BlockItemMobile>
        <Filter.BlockItemMed>
          <Subtext size=" text-xs font-Primary text-left font-light">
            Temática
          </Subtext>
          <SelectFilterMenu
            selected={selectedDiscipline}
            options={DISCIPLINE}
            valueLabel={
              selectedDiscipline === ''
                ? 'Todas las disciplinas'
                : selectedDiscipline
            }
            name={selectedDiscipline}
            onChange={onChangeSearch}
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
