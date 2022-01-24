import Image from 'next/image';
import { Icon } from './style';

export default function IconAnimate() {
  return (
    <>
      <Icon.BlockHidden>
        <Icon.SectionIcon>
          <Icon.Icon />
          <Image src="/icon/iconBtn.svg" width={8} height={8} />
        </Icon.SectionIcon>
      </Icon.BlockHidden>
    </>
  );
}
