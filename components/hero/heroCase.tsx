import Image from 'next/image';
import Filter from '../input/filter';
import { HeadSection } from './style';

export default function HeroCase() {
  return (
    <>
      <HeadSection.SectionCase>
        <Filter />
        <Image
          src="/cases/header_case.jpg"
          width={1200}
          height={900}
          alt="header"
          className="sm:w-11/12 w-full"
        />
      </HeadSection.SectionCase>
    </>
  );
}
