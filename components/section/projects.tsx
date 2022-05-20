import { useRouter } from 'next/router';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';

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
  const router = useRouter();

  const callback = (id: any) => {
    router.push(`/casos/${id}`);
  };

  const bind = useLongPress((id: any) => callback(id.target.id), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 200,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  return (
    <>
      <Styles.SectionProjects>
        {data?.map((values: any, i: any) => (
          <motion.div
            key={`${values.Title}${values.id}`}
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
                    <Styles.BlockBtn
                      onTouchStart={() => router.push(`/casos/${values.id}`)}>
                      <IconAnimate text={translate.seeMoreProject} mode />
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
