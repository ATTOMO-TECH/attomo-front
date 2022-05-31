import Link from 'next/link';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { BUTTON_ACTIVE } from '../../const/const';
import { handleClickTouch } from '../../hook/eventListener';
import { darkTheme, lightTheme } from '../../styles/styles';
import IconAnimate from '../button/icon';
import { Block } from './style';

interface Props {
  text: string;
  button: string;
  text2: string;
  button2: string;
  mode: boolean;
  link: string;
}

export default function BlockSection({
  text,
  button,
  text2,
  button2,
  mode,
  link,
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
      <Block.SectionBlock>
        <Block.Block theme={mode === true ? lightTheme : darkTheme}>
          {text ? (
            <>
              <Block.Title ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                {text}
              </Block.Title>
              <Link href={`${link}`} passHref>
                <Block.BlockBtn {...bind()}>
                  <IconAnimate text={button} mode={mode} />
                </Block.BlockBtn>
              </Link>
            </>
          ) : (
            ''
          )}
        </Block.Block>
        <Block.Block theme={mode === true ? lightTheme : darkTheme}>
          {text2 ? (
            <>
              <Block.Title ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                {text2}
              </Block.Title>
              <Link href={`${link}`} passHref>
                <Block.BlockBtn {...bind()}>
                  <IconAnimate text={button2} mode={mode} />
                </Block.BlockBtn>
              </Link>
            </>
          ) : (
            ''
          )}
        </Block.Block>
      </Block.SectionBlock>
    </>
  );
}
