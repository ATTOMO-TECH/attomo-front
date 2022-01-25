import Image from 'next/image';
import { Button, Icon } from './style';

interface Props {
  text: string;
}

export default function IconAnimate({ text }: Props) {
  return (
    <>
      <Icon.BlockHidden>
        <Button.ButtonRegular>{text}</Button.ButtonRegular>
        <Icon.SectionIcon>
          <Icon.Icon />
          <Image src="/icon/iconBtn.svg" width={8} height={8} />
        </Icon.SectionIcon>
      </Icon.BlockHidden>
    </>
  );
}
