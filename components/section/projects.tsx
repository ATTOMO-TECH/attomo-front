import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  Array: any[];
  shouldShowActions: any;
  servicesAnimations: any;
}

export default function SectionProjects({
  Array,
  shouldShowActions,
  servicesAnimations,
}: Props) {
  const [isData] = useState(Array);

  return (
    <>
      <Styles.SectionProjects>
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions"
          transition={{
            delay: 0.2,
            type: 'Magic',

            duration: 1,
          }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: '50%' }}>
          {isData.map((values: any, i) => (
            <Styles.BlockSections
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
              key={values.Client}>
              <Styles.BlockSection
                ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                {values?.attributes?.mainPhoto?.data[0].attributes?.url ? (
                  <Image
                    src={values.attributes.mainPhoto.data[0].attributes.url}
                    width={800}
                    height={600}
                    alt={values.attributes.name}
                    objectFit="cover"
                  />
                ) : (
                  ''
                )}
              </Styles.BlockSection>
              <Styles.BlockText
                ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                <Title size="text-xl ">{values.attributes.name}</Title>
                <Title size="text-5xl py-3 leading-relaxed lg:leading-normal">
                  {values.attributes.shortDescription}
                </Title>
                <Link href={`/casos/${values.id}`}>
                  <Styles.BlockBtn>
                    <IconAnimate text="Ver proyecto" mode />
                  </Styles.BlockBtn>
                </Link>
              </Styles.BlockText>
            </Styles.BlockSections>
          ))}
        </motion.div>
      </Styles.SectionProjects>
    </>
  );
}
