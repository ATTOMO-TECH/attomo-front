import Image from 'next/image';
import Btn from '../button/button';
import Title from '../Text/title';
import { Styles } from './style';

export default function SectionProjects() {
  return (
    <>
      <Styles.SectionProjects>
        <Styles.BlockSections>
          <Styles.BlockSection>
            <Image
              src="/customers/customer1.png"
              width={600}
              height={400}
              alt="customer"
            />
          </Styles.BlockSection>
          <Styles.BlockText>
            <Title size="text-xl "> Grandes Viviendas Real Estate</Title>
            <Title size="text-5xl py-5 leading-relaxed lg:leading-normal">
              Reinventando la industria de la intermediación de viviendas
            </Title>
            <Btn>Ver proyecto</Btn>
          </Styles.BlockText>
        </Styles.BlockSections>
        <Styles.BlockSectionsReverse>
          <Styles.BlockSectionReverses>
            <Image
              src="/customers/customer2.png"
              width={650}
              height={400}
              alt="customer"
            />
          </Styles.BlockSectionReverses>
          <Styles.BlockSectionReverse>
            <Title size="text-xl"> Chi & Su</Title>
            <Title size="text-5xl py-5 leading-relaxed lg:leading-normal">
              Transformando la industria de la moda femenina
            </Title>
            <Btn>Ver proyecto</Btn>
          </Styles.BlockSectionReverse>
        </Styles.BlockSectionsReverse>
      </Styles.SectionProjects>
    </>
  );
}
