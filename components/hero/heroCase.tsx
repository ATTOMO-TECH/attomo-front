import { useEffect, useState } from 'react';
import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
  date: Date[] | undefined;
  topic: string;
  isOpen: boolean;
}

export default function HeroCase({ toggle, date, topic, isOpen }: Props) {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  return (
    <>
      <HeadSection.SectionCase>
        {scroll && !isOpen ? (
          <Filter toggle={toggle} date={date} topic={topic} />
        ) : null}
        {topic === '' && <HeadSection.SectionHeroCases />}
      </HeadSection.SectionCase>
    </>
  );
}
