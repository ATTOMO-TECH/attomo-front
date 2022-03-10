import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
}

export default function HeroCase({ toggle }: Props) {
  return (
    <>
      <HeadSection.SectionCase>
        <Filter toggle={toggle} />
        <img
          src="/cases/header_case.jpg"
          alt="header"
          className="sm:w-11/12 w-full object-contain"
        />
      </HeadSection.SectionCase>
    </>
  );
}
