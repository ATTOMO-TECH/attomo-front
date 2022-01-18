import Image from 'next/image';
import Link from 'next/link';
import { HeadSection } from './style';

export default function Hero() {
  return (
    <>
      <HeadSection.SectionHero>
        <HeadSection.TextHead>
          Somos una consultora tecnológica con una única misión: ayudar a las
          empresas y administraciones a liderar a través de la digitalización
        </HeadSection.TextHead>
        <HeadSection.Blockbutton>
          <Link href="#conocenos">
            <HeadSection.TextButton>Conoce más</HeadSection.TextButton>
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
