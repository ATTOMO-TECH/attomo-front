import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  Array: any[];
}

export default function SectionProjects({ Array }: Props) {
  const [isData] = useState(Array);

  return (
    <>
      <Styles.SectionProjects>
        {isData.map((values: any, i) => (
          <Styles.BlockSections
            ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
            key={values.Client}>
            <Styles.BlockSection
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              <Image src="/" width={800} height={600} alt={values.Client} />
            </Styles.BlockSection>
            <Styles.BlockText
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              <Title size="text-xl ">{values.Client}</Title>
              <Title size="text-5xl py-3 leading-relaxed lg:leading-normal">
                {values.title}
              </Title>
              <Link href={`/casos/${values.id}`}>
                <div className=" text-primary z-100">
                  <IconAnimate text="Ver proyecto" mode />
                </div>
              </Link>
            </Styles.BlockText>
          </Styles.BlockSections>
        ))}
      </Styles.SectionProjects>
    </>
  );
}
