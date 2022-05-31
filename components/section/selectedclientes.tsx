import Link from 'next/link';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { handleClickTouch } from '../../hook/eventListener';
import IconAnimate from '../button/icon';
import { SubSections } from '../subsection/style';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  text: string;
  btn: string;
  link: string;
  textPrimary: any;
}

export default function SelectedClients({
  text,
  btn,
  link,
  textPrimary,
}: Props) {
  const callback = () => {
    handleClickTouch(link);
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
      <Styles.BlockMargin>
        <Styles.DivideSection>
          <SubSections.BlockCounter>
            <Link href={`${link}`}>
              <SubSections.BlockBtn {...bind()}>
                <Title size="text-2xl md:text-3xl lg:text-4xl font-light w-4/6  lg:pl-10 cursor-pointer ">
                  {textPrimary}
                </Title>
              </SubSections.BlockBtn>
            </Link>
          </SubSections.BlockCounter>

          <SubSections.TextSubsectionSelected>
            <div className="lg:w-4/6 w-full">
              <SubSections.Title> {text}</SubSections.Title>
              <Link href={`${link}`}>
                <SubSections.BlockBtn {...bind()}>
                  <IconAnimate text={btn} mode />
                </SubSections.BlockBtn>
              </Link>
            </div>
          </SubSections.TextSubsectionSelected>
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
