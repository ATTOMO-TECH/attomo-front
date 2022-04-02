import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string;
  isOpen: boolean;
  scroll: boolean;
}

export default function HeroCase({
  toggle,
  date,
  endDate,
  topic,
  isOpen,
  scroll,
}: Props) {
  return (
    <>
      <HeadSection.SectionCase>
        {!isOpen && scroll ? (
          <Filter toggle={toggle} date={date} topic={topic} endDate={endDate} />
        ) : null}
        <HeadSection.SectionHeroCases />
      </HeadSection.SectionCase>
    </>
  );
}
