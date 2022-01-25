import Image from 'next/image';
import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../const/const';
import Btn from '../button/button';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  Array: any[];
}

export default function SectionProjects({ Array }: Props) {
  return (
    <>
      <Styles.SectionProjects>
        {Array.map((values, i) => (
          <Styles.BlockSections
            ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            <Styles.BlockSection
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              <Image
                src={values.Pic}
                width={800}
                height={600}
                alt={values.Client}
              />
            </Styles.BlockSection>
            <Styles.BlockText
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              <Title size="text-xl ">{values.Client}</Title>
              <Title size="text-5xl py-5 leading-relaxed lg:leading-normal">
                {values.Text}
              </Title>
              <Link href={values.Url}>
                <Btn>Ver proyecto</Btn>
              </Link>
            </Styles.BlockText>
          </Styles.BlockSections>
        ))}
      </Styles.SectionProjects>
    </>
  );
}
