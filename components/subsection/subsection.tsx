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
            <Title size="text-xl md:text-3xl lg:text-4xl font-light">
              {values.HeaderCounter}
            </Title>
            <SubSections.Paragraph>{values.BodyCounter}</SubSections.Paragraph>
            <Link href="/servicios">
              <IconAnimate text={values.Button} mode />
            </Link>
          </SubSections.TextSubsection>
        ))}
      </SubSections.Subsection>
    </>
  );
}
