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
        <div className="p-6 lg:p-0">
          <Counter />
        </div>
        {locale.counter.map((values: any) => (
          <SubSections.TextSubsection>
            <Title size="text-2xl md:text-3xl lg:text-4xl font-light">
              {values.HeaderCounter}
            </Title>
            <SubSections.Paragraph>{values.BodyCounter}</SubSections.Paragraph>
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
