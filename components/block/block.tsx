import Btn from '../button/button';
import { Block } from './style';

interface Props {
  text: string;
  button: string;
  text2: string;
  button2: string;
}

export default function BlockSection({ text, button, text2, button2 }: Props) {
  return (
    <>
      <Block.SectionBlock>
        <Block.Block>
          <Block.Title>{text}</Block.Title>
          <Btn>{button}</Btn>
        </Block.Block>
        <Block.Block>
          <Block.Title>{text2}</Block.Title>
          <Btn>{button2}</Btn>
        </Block.Block>
      </Block.SectionBlock>
    </>
  );
}
