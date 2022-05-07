import Link from 'next/link';
import { SubSections } from './style';
import Counter from './counter';
import Title from '../Text/title';
import IconAnimate from '../button/icon';
import { handleClickTouch, useEventListener } from '../../hook/eventListener';

interface Props {
  locale: any;
}
export default function SubSection({ locale }: Props) {
  useEventListener('linkToService', 'touchstart', () =>
    handleClickTouch('/servicios'),
  );
  return (
    <>
      <SubSections.Subsection>
        <SubSections.BlockCounterCircle>
          <Counter />
        </SubSections.BlockCounterCircle>
        {locale.counter.map((values: any) => (
          <SubSections.TextSubsection>
            <Title size="text-2xl md:text-3xl lg:text-4xl font-light pb-5">
              {values.HeaderCounter}
            </Title>
            <SubSections.Title>{values.BodyCounter}</SubSections.Title>
            <Link href="/servicios" passHref>
              <a className="w-48" href="/servicios" id="linkToService">
                <IconAnimate text={values.Button} mode />
              </a>
            </Link>
          </SubSections.TextSubsection>
        ))}
      </SubSections.Subsection>
    </>
  );
}
