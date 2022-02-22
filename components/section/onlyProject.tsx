import Image from 'next/image';
import { BUTTON_ACTIVE } from '../../const/const';
import Title from '../Text/title';
import { Styles } from './style';

type Props = {
  data: any;
};

export default function OneProject({ data }: Props) {
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
            <Title size="text-regular font-light font-PrimarySerif leading-relaxed leading-normal pb-5 font-extralight lg:w-4/6">
              {data.Text}
            </Title>
            <Title size="text-regular font-light font-PrimarySerif leading-relaxed leading-normal pb-5 font-extralight lg:w-4/6">
              {data.Subtext}
            </Title>
          </Styles.OnlyProjectBlock>
        </Styles.BlockSections>
      </Styles.SectionProjects>
    </>
  );
}
