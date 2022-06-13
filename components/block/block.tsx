import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../const/const';
import useTap from '../../hook/longPress';
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
  const [handlers] = useTap(link);

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
                <Block.BlockBtn {...handlers()}>
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
                <Block.BlockBtn {...handlers()}>
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
