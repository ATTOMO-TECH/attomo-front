import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';
import useLongPressHook from '../../hook/longPress';

interface Props {
  values: any;
  shouldShowActions: any;
  servicesAnimations: any;
  i: number;
}

export default function SectionProjects({
  values,
  shouldShowActions,
  servicesAnimations,
  i,
}: Props) {
  const translate = getLocale();

  const [bind] = useLongPressHook(`/casos/${values.id}`);

  return (
    <>
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
          <Link href={`/casos/${values.id}`}>
            <Styles.BlockSection
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
              {...bind()}>
              {values?.attributes?.mainPhoto?.data[0].attributes?.url && (
                <img
                  src={values?.attributes.mainPhoto.data[0].attributes.url}
                  width={800}
                  height={600}
                  id={`${values.id}`}
                  alt={values.attributes.name}
                  className="object-cover cursor-pointer"
                />
              )}
            </Styles.BlockSection>
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
              <Title size="lg:text-4xl md:text-2xl text-xl sm:w-96 w-80  py-3 leading-relaxed lg:leading-normal">
                {values.attributes.title}
              </Title>
              <Link href={`/casos/${values.id}`} passHref>
                <Styles.BlockBtn {...bind()}>
                  <IconAnimate text={translate.seeMoreProject} mode />
                </Styles.BlockBtn>
              </Link>
            </motion.div>
          </Styles.BlockText>
        </Styles.BlockSections>
      </motion.div>
    </>
  );
}
