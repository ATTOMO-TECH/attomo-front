import Image from 'next/image';
import { HeadSection } from './style';

const OptionsSelect: {
  Option: string;
}[] = [
  {
    Option: 'Estrategia1',
  },
  {
    Option: 'Estrategia2',
  },
  {
    Option: 'Estrategia3',
  },
];

export default function HeroCase() {
  return (
    <>
      <HeadSection.SectionCase>
        <HeadSection.BlockFilter>
          <HeadSection.TextFilter>Filtrar por</HeadSection.TextFilter>
          <HeadSection.Select name="select">
            {OptionsSelect.map((options) => (
              <option value={options.Option} key={options.Option}>
                {options.Option}
              </option>
            ))}
          </HeadSection.Select>
        </HeadSection.BlockFilter>

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
