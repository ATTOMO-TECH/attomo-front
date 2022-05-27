import { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesAnimations } from '../animations/animations';
import Subtext from '../Text/subText';
import { KitStyles } from './style';
import Title from '../Text/title';

type Props = {
  title: string;
  subtitle?: string;
  blockSection: { item: string; title?: string; logo?: string }[];
};

export default function HowKit({ title, subtitle, blockSection }: Props) {
  const [shouldShowActions] = useState(false);

  return (
    <>
      <KitStyles.Section>
        <Title size="lg:text-4xl md:text-3xl pb-12 text-2xl text-center m-auto">
          {title}
        </Title>
        {subtitle && (
          <Subtext size="w-full pb-10 font-light text-center">
            {subtitle}
          </Subtext>
        )}
        {blockSection?.map((values: any, index: number) => (
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            transition={{
              type: 'magic',
              stiffness: 100,
              duration: 0.5,
              delay: index * 0.2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '50%' }}
            key={`${values.Value}`}
            className={
              !values?.logo
                ? 'lg:w-5/12 w-full flex items-center justify-between py-4'
                : 'lg:w-6/12 w-full flex items-center justify-between p-4 relative  '
            }>
            {!values?.logo ? (
              <>
                <Subtext size="lg:text-xl text-2xl rounded-full border w-10 h-10 p-5 flex items-center justify-center ">
                  {index + 1}
                </Subtext>
                <KitStyles.Title className="text-left ml-4">
                  {values.item}
                </KitStyles.Title>
              </>
            ) : (
              <>
                <KitStyles.BlockSelectedSub>
                  <img
                    src={values.logo}
                    alt={values.title}
                    className="col-span-4 "
                  />
                  <div>
                    <Title size="text-base col-span-3 ">{values.title}</Title>
                    <KitStyles.Title className="text-left ">
                      {values.item}
                    </KitStyles.Title>
                  </div>
                </KitStyles.BlockSelectedSub>
                <KitStyles.BlurBlock />
              </>
            )}
          </motion.div>
        ))}
      </KitStyles.Section>
    </>
  );
}
