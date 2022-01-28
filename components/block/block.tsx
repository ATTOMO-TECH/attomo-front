import { darkTheme, lightTheme } from '../../styles/styles';
import Btn from '../button/button';
import { Block } from './style';

interface Props {
  text: string;
  button: string;
  text2: string;
  button2: string;
  mode: boolean;
}

export default function BlockSection({
  text,
  button,
  text2,
  button2,
  mode,
}: Props) {
  return (
    <>
      <Block.SectionBlock>
        <Block.Block theme={mode === true ? lightTheme : darkTheme}>
          <Block.Title>{text}</Block.Title>
          <Btn>{button}</Btn>
        </Block.Block>
        <Block.Block theme={mode === true ? lightTheme : darkTheme}>
          <Block.Title>{text2}</Block.Title>
          <Btn>{button2}</Btn>
        </Block.Block>
      </Block.SectionBlock>
    </>
  );
}
