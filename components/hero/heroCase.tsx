import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string;
  isOpen: boolean;
}

export default function HeroCase({
  toggle,
  date,
  endDate,
  topic,
  isOpen,
}: Props) {
  return (
    <>
      <HeadSection.SectionCase>
        {!isOpen ? (
          <Filter toggle={toggle} date={date} topic={topic} endDate={endDate} />
        ) : null}
        {topic === '' && <HeadSection.SectionHeroCases />}
      </HeadSection.SectionCase>
    </>
  );
}
