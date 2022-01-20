import Image from 'next/image';
import Link from 'next/link';
import { HeadSection } from './style';

type Props = {
  text: string;
  button: string;
  link: string;
};

export default function Hero({ text, button, link }: Props) {
  return (
    <>
      <HeadSection.SectionHero>
        <HeadSection.TextHead>{text}</HeadSection.TextHead>
        <HeadSection.Blockbutton className={button === '' ? 'hidden' : ''}>
          <Link href={`#${link}`}>
            <HeadSection.TextButton>{button}</HeadSection.TextButton>
          </Link>
          <HeadSection.BlockArrow>
            <Image
              src="/icon/arrowDown.svg"
              width={100}
              height={100}
              alt="Down"
            />
          </HeadSection.BlockArrow>
        </HeadSection.Blockbutton>
      </HeadSection.SectionHero>
    </>
  );
}
