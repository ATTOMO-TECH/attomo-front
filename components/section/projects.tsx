import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';
import { handleClickTouch, useEventListener } from '../../hook/eventListener';

interface Props {
  data: any;
  shouldShowActions: any;
  servicesAnimations: any;
}

export default function SectionProjects({
  data,
  shouldShowActions,
  servicesAnimations,
}: Props) {
  const translate = getLocale();

  data?.map((values: any) =>
    useEventListener(`casos-${values.id}`, 'touchmove', () =>
      handleClickTouch(`/casos/${values.id}`),
    ),
  );
  data?.map((values: any) =>
    useEventListener(`link-${values.id}`, 'touchmove', () =>
      handleClickTouch(`/casos/${values.id}`),
    ),
  );

  return (
    <>
      <Styles.SectionProjects>
        {data?.map((values: any, i: any) => (
          <motion.div
            key={values.id}
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
              <Link href={`/casos/${values.id}`}>
                <a href={`/casos/${values.id}`} id={`casos-${values.id}`}>
                  <Styles.BlockSection
                    ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                    {values?.attributes?.mainPhoto?.data[0].attributes?.url && (
                      <img
                        src={
                          values?.attributes.mainPhoto.data[0].attributes.url
                        }
                        width={800}
                        height={600}
                        alt={values.attributes.name}
                        className="object-cover cursor-pointer"
                      />
                    )}
                  </Styles.BlockSection>
                </a>
              </Link>
              <Styles.BlockText
                ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                <motion.div
                  animate={shouldShowActions}
                  className="pb-2"
                  variants={servicesAnimations}
                  transition={{
                    delay: 0.5,
                    type: 'Magic',
                    duration: 1,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 50 }}>
                  <Styles.Paragraph className="text-sm font-PrimarySerif uppercase">
                    {values.attributes.company}
                  </Styles.Paragraph>
                  <Title size="lg:text-4xl text-2xl w-96 py-3 leading-relaxed lg:leading-normal">
                    {values.attributes.title}
                  </Title>
                  <Link href={`/casos/${values.id}`} passHref>
                    <a href={`/casos/${values.id}`} id={`link-${values.id}`}>
                      <Styles.BlockBtn>
                        <IconAnimate text={translate.seeMoreProject} mode />
                      </Styles.BlockBtn>
                    </a>
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
