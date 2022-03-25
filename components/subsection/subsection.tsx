import Link from 'next/link';
import { SubSections } from './style';
import Counter from './counter';
import Title from '../Text/title';
import IconAnimate from '../button/icon';

interface Props {
  locale: any;
}
export default function SubSection({ locale }: Props) {
  return (
    <>
      <SubSections.Subsection>
        <SubSections.BlockCounter>
          <Counter />
        </SubSections.BlockCounter>
        {locale.counter.map((values: any) => (
          <SubSections.TextSubsection>
            <Title size="text-2xl md:text-3xl lg:text-4xl font-light pb-5">
              {values.HeaderCounter}
            </Title>
            <SubSections.Title>{values.BodyCounter}</SubSections.Title>
            <Link href="/servicios">
              <div>
                <IconAnimate text={values.Button} mode />
              </div>
            </Link>
          </SubSections.TextSubsection>
        ))}
      </SubSections.Subsection>
    </>
  );
}
