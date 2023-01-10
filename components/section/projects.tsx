import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';
import TitleUrl from '../Text/titleUrl';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';
import { VALUESNAV } from '../../const/constGlobal';
/* import { handlers } from '../../hook/longPress'; */

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
  /* console.log(values); */
  const { id } = values;
  /* console.log(company, title, id); */

  // arrNewSlug.push(company?.replaceAll(' ', ''));
  // arrNewSlug.push(
  //   title
  //     .normalize('NFD')
  //     .replace(/[\u0300-\u036f]/g, '')
  //     .replaceAll(/[^\w]/gi, ' ')
  //     .split(' ')
  //     .join('-'),
  // );
  // arrNewSlug.push(id);
  /* console.log(arrNewSlug); */
  // const newSlug = arrNewSlug.join('-');
  /* console.log(newSlug); */
  return (
    <>
      <motion.div
        animate={shouldShowActions}
        variants={servicesAnimations}
        className="actions"
        transition={{
          delay: 0.1,
          type: 'fast',
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: '50%' }}>
        <Styles.BlockSections
          ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
          key={values.Client}>
          <Link href={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}>
            <Styles.BlockSection
              ismode={i % 2 === 0 ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              {values?.attributes?.mainPhoto?.data[0].attributes?.url && (
                <a
                  href={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}>
                  <img
                    src={values?.attributes.mainPhoto.data[0].attributes.url}
                    width={800}
                    height={600}
                    id={`${values.id}`}
                    alt={
                      values.attributes.mainPhoto.data[0].attributes
                        .alternativeText
                    }
                    className="object-cover cursor-pointer"
                  />
                </a>
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
              <TitleUrl
                url={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}
                size="lg:text-4xl md:text-2xl text-xl sm:w-96 w-80  py-3 leading-relaxed lg:leading-normal cursor-pointer">
                {values.attributes.title}
              </TitleUrl>
              <Link
                href={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}>
                <Styles.BlockBtn>
                  <a
                    href={`${VALUESNAV[1].Url}/${values.attributes.URLSlug}-${id}`}>
                    <IconAnimate text={translate.seeMoreCases} mode />
                    {/* {console.log(translate.seeMoreCases)} */}
                  </a>
                </Styles.BlockBtn>
              </Link>
            </motion.div>
          </Styles.BlockText>
        </Styles.BlockSections>
      </motion.div>
    </>
  );
}
