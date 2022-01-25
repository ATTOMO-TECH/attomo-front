import Image from 'next/image';
import { BUTTON_ACTIVE } from '../../const/const';
import Title from '../Text/title';
import { Styles } from './style';

export default function OneProject() {
  return (
    <>
      <Styles.SectionProjects>
        <Styles.BlockSections ismode={BUTTON_ACTIVE.ON}>
          <Styles.BlockSection ismode={BUTTON_ACTIVE.ON}>
            <Image
              src="/customers/US.png"
              width={800}
              height={600}
              alt="Nosotros"
            />
          </Styles.BlockSection>
          <Styles.OnlyProjectBlock>
            <Title size="text-regular leading-relaxed lg:leading-normal pb-5 font-extralight">
              ATTOMO nace en enero de 2021 con la misión de ayudar a las pymes
              en su proceso de digitalización.
            </Title>
            <Title size="text-regular leading-relaxed lg:leading-normal font-extralight">
              Está fundada por Álvaro Barrera y Mateo Hernández, que llevan 10
              años en el sector tecnológico.
            </Title>
          </Styles.OnlyProjectBlock>
        </Styles.BlockSections>
      </Styles.SectionProjects>
    </>
  );
}
