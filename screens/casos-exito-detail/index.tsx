import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Footer from '../../components/footer/footerWhite';
import MenuWhite from '../../components/nav/menuWhite';
import Nav from '../../components/nav/navWhite';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import BlockSectionWhite from '../../components/block/block';
import DetailsCases from '../../components/section/cases/details';
import BreadCrumbsCases from '../../components/breadcrumbs/breadcrumbsCases';
import CasesScroll from '../../components/slider/cases/slider';
import { getLocale } from '../../public/locales/getLocale';
import { servicesAnimations } from '../../components/animations/animations';
import { Props } from '../types';

export default function Cases({ data, locale, mode }: Props) {
  const router = useRouter();
  const { slug }: any = router.query;
  const [translate, setTranslate] = useState(getLocale(locale || 'en'));

  let id = 0;
  if (slug) {
    const arrSlug = slug.split('-');
    id = Number(arrSlug[arrSlug.length - 1]);
  }
  const [shouldShowActions] = useState(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  return (
    <>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <MenuWhite isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} bgFull isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center className="lg:mt-44 mt-20 lg:pl-6">
          <BreadCrumbsCases
            customer={data?.attributes?.company}
            sumary={data?.attributes?.sumary}
          />
          <Styles.TitularText>{data?.attributes?.title}</Styles.TitularText>
        </Styles.Center>

        {data?.attributes?.mainPhoto?.data[0].attributes?.url ? (
          <Image
            src={data?.attributes?.mainPhoto?.data[0].attributes?.url || '/'}
            width={1200}
            height={800}
            alt={data.attributes.name}
            className="object-cover"
          />
        ) : null}
        <Styles.Center>
          <DetailsCases data={data} translate={translate} />
        </Styles.Center>
        <Styles.Center>
          <Styles.TextSubSection>{translate.moreCases}</Styles.TextSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <CasesScroll
              mode={false}
              filter={data?.attributes?.subservice?.data?.name}
              id={id.toString()}
              renderTouch={false}
            />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions "
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 50,
            duration: 2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0.1, y: '50%' }}>
          <Styles.Center>
            {translate.contact.map((values) => (
              <BlockSectionWhite
                key={values.Link}
                text={values.Text}
                button={values.Link}
                text2=""
                button2=""
                mode={false}
                link={
                  locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url
                }
              />
            ))}
          </Styles.Center>
        </motion.div>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
