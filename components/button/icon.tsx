import Image from 'next/image';
import { BUTTON_MODE } from '../../const/const';
import { Button, Icon } from './style';

interface Props {
  text: string;
  mode: boolean;
}

export default function IconAnimate({ text, mode }: Props) {
  return (
    <>
      <Icon.BlockHidden>
        <Button.ButtonRegular
          ismode={mode ? BUTTON_MODE.LIGHT : BUTTON_MODE.DARK}>
          {text}
        </Button.ButtonRegular>
        <Icon.SectionIcon>
          <Icon.Icon ismode={mode ? BUTTON_MODE.LIGHT : BUTTON_MODE.DARK} />
        </Icon.SectionIcon>
        <Image
          src={mode ? '/icon/iconBtn.svg' : '/icon/darkAttomo.svg'}
          width={8}
          height={8}
        />
      </Icon.BlockHidden>
    </>
  );
}
