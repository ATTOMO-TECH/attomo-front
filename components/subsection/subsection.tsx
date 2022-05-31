import Link from 'next/link';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { SubSections } from './style';
import Counter from './counter';
import Title from '../Text/title';
import IconAnimate from '../button/icon';
import { handleClickTouch } from '../../hook/eventListener';

interface Props {
  locale: any;
}
export default function SubSection({ locale }: Props) {
  const callback = () => {
    handleClickTouch('/servicios');
  };

  const bind = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 200,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  return (
    <>
      <SubSections.Subsection>
        <SubSections.BlockCounterCircle>
          <Counter />
        </SubSections.BlockCounterCircle>
        {locale.counter.map((values: any) => (
          <SubSections.TextSubsection key={values.HeaderCounter}>
            <Title size="text-2xl md:text-3xl lg:text-4xl font-light pb-5">
              {values.HeaderCounter}
            </Title>
            <SubSections.Title>{values.BodyCounter}</SubSections.Title>
            <Link href="/servicios" passHref>
              <SubSections.BlockBtn id="linkToService" {...bind()}>
                <IconAnimate text={values.Button} mode />
              </SubSections.BlockBtn>
            </Link>
          </SubSections.TextSubsection>
        ))}
      </SubSections.Subsection>
    </>
  );
}
