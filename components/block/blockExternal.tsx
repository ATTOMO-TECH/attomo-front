import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme } from '../../styles/styles';
import IconAnimate from '../button/icon';
import { Block } from './style';
import { handlersExternal } from '../../hook/longPress';

interface Props {
  text: string;
  button: string;
  text2: string;
  button2: string;
  mode: boolean;
  link: string;
}

export default function BlockSectionExternal({
  text,
  button,
  text2,
  button2,
  mode,
  link,
}: Props) {
  return (
    <Block.SectionBlock>
      <Block.Block theme={mode ? lightTheme : darkTheme}>
        {text && (
          <>
            <Block.Title ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              {text}
            </Block.Title>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              {...handlersExternal(link)}>
              <Block.BlockBtn>
                <IconAnimate text={button} mode={mode} />
              </Block.BlockBtn>
            </a>
          </>
        )}
      </Block.Block>
      <Block.Block theme={mode ? lightTheme : darkTheme}>
        {text2 && (
          <>
            <Block.Title ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              {text2}
            </Block.Title>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              {...handlersExternal(link)}>
              <Block.BlockBtn>
                <IconAnimate text={button2} mode={mode} />
              </Block.BlockBtn>
            </a>
          </>
        )}
      </Block.Block>
    </Block.SectionBlock>
  );
}
