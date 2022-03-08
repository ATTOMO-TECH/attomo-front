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
        {isData.map((values: any, i) => (
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            className="actions"
            transition={{
              delay: 0.2,
              type: 'tween',

              duration: 1,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: '50%' }}>
            <Styles.BlockSections
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
              key={values.Client}>
              <Styles.BlockSection
                ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                {values?.attributes?.mainPhoto?.data[0].attributes?.url && (
                  <img
                    src={values.attributes.mainPhoto.data[0].attributes.url}
                    width={800}
                    height={600}
                    alt={values.attributes.name}
                    className="object-cover"
                  />
                )}
              </Styles.BlockSection>
              <Styles.BlockText
                ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                <motion.div
                  animate={shouldShowActions}
                  variants={servicesAnimations}
                  transition={{
                    delay: 0.5,
                    type: 'Magic',

                    duration: 1,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}>
                  <Title size="text-lg font-PrimarySerif uppercase ">
                    {values.attributes.company}
                  </Title>
                  <Title size="text-5xl py-3 leading-relaxed lg:leading-normal">
                    {values.attributes.title}
                  </Title>
                  <Link href={`/casos/${values.id}`}>
                    <Styles.BlockBtn>
                      <IconAnimate
                        text="Ver proyecto"
                        mode
                        styleText=" text-sm"
                      />
                    </Styles.BlockBtn>
                  </Link>
                </motion.div>
              </Styles.BlockText>
            </Styles.BlockSections>
          </motion.div>
        ))}
      </Styles.SectionProjects>
    </>
  );
}
