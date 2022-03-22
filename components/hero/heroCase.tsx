import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
  date: Date[] | undefined;
  topic: string;
  isOpen: boolean;
}

export default function HeroCase({ toggle, date, topic, isOpen }: Props) {
  return (
    <>
      <HeadSection.SectionCase>
        {!isOpen ? <Filter toggle={toggle} date={date} topic={topic} /> : null}
        {topic === '' && <HeadSection.SectionHeroCases />}
      </HeadSection.SectionCase>
    </>
  );
}
