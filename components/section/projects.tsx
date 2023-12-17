import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import TitleUrl from '../Text/titleUrl';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';
import { VALUESNAV_ESP, VALUESNAV_ENG } from '../../const/constGlobal';

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
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const [translate, setTranslate] = useState(getLocale(locale || 'es'));

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);
  const { id } = values;

  const VALUESNAV = locale === 'en' ? VALUESNAV_ENG : VALUESNAV_ESP;
  return (
    <>
      <motion.div
        animate={shouldShowActions}
        variants={servicesAnimations}
        className="actions"
        transition={{
          type: 'fast',
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0.3, x: '50%' }}>
        <Styles.BlockSections
          ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
          key={values.Client}>
          <Link href={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}>
            <Styles.BlockSection
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              {values?.attributes?.mainPhoto?.data[0].attributes?.url && (
                <Image
                  src={values?.attributes.mainPhoto.data[0].attributes.url}
                  width={800}
                  height={500}
                  id={`${values.id}`}
                  alt={
                    values.attributes.mainPhoto.data[0].attributes
                      .alternativeText
                  }
                  className="object-cover cursor-pointer"
                />
              )}
            </Styles.BlockSection>
          </Link>
          <Styles.BlockText
            ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            <motion.div
              animate={shouldShowActions}
              variants={servicesAnimations}
              transition={{
                type: 'magic',
                duration: 1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0.1, y: 50 }}>
              <Styles.Paragraph className="text-sm font-PrimarySerif uppercase">
                {values.attributes.company}
              </Styles.Paragraph>
              <TitleUrl
                url={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}
                size="lg:text-4xl md:text-2xl text-xl  mb-4 py-3 leading-relaxed lg:leading-normal cursor-pointer">
                {values.attributes.title}
              </TitleUrl>
              <Link
                href={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}>
                <Styles.BlockBtn>
                  <IconAnimate text={translate.seeMoreCases} mode />
                </Styles.BlockBtn>
              </Link>
            </motion.div>
          </Styles.BlockText>
        </Styles.BlockSections>
      </motion.div>
    </>
  );
}
