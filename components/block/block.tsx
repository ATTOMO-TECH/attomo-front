import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../const/const';
import { handlers } from '../../hook/longPress';
import { darkTheme, lightTheme } from '../../styles/styles';
import IconAnimate from '../button/icon';
import { Block } from './style';
import { isExternalLink } from '../../functions/isExternalLink';

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
  return (
    <>
      <Block.SectionBlock>
        <Block.Block theme={mode === true ? lightTheme : darkTheme}>
          {text ? (
            <>
              <Block.Title ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                {text}
              </Block.Title>
              <Link href={link} passHref>
                <a
                  {...handlers(link)}
                  target={isExternalLink(link) ? '_blank' : undefined}
                  rel={
                    isExternalLink(link) ? 'noopener noreferrer' : undefined
                  }>
                  <Block.BlockBtn>
                    <IconAnimate text={button} mode={mode} />
                  </Block.BlockBtn>
                </a>
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
              <Link href={link} passHref>
                <a
                  {...handlers(link)}
                  target={isExternalLink(link) ? '_blank' : undefined}
                  rel={
                    isExternalLink(link) ? 'noopener noreferrer' : undefined
                  }>
                  <Block.BlockBtn>
                    <IconAnimate text={button2} mode={mode} />
                  </Block.BlockBtn>
                </a>
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
