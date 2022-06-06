import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Footer from '../../components/footer/footerWhite';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/navWhite';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import BlockSection from '../../components/block/block';
import DetailsCases from '../../components/section/cases/details';
import { useaCase } from '../../domain/useCasesDetails';
import BreadCrumbsCases from '../../components/breadcrumbs/breadcrumbsCases';
import RenderLoading from '../../components/loading/loading';
import CasesScroll from '../../components/slider/cases/slider';
import { getLocale } from '../../public/locales/getLocale';
import { servicesAnimations } from '../../components/animations/animations';

interface Props {
  mode: boolean;
}

export default function Cases({ mode }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const [shouldShowActions] = useState(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data, isLoading } = useaCase(Number(slug), locale || 'es');
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }
  const translate = getLocale();
  return (
    <>
      <Head>
        <title>
          Casos de éxito ATTOMO - Clientes - {data?.data?.attributes.company}
        </title>

        <meta
          name="title"
          content={`Casos de éxito ATTOMO - Clientes - ${slug}`}
        />
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {data?.data?.attributes.metadata && (
          <meta name="description" content={data?.data?.attributes.metadata} />
        )}
        <meta name="keywords" content={data?.data?.attributes.metadata} />
        <link rel="canonical" href="https://attomo.digital" />
        <meta name="type" content="website" />
        <meta name="copyright" content="https://attomo.digital" />
        <meta name="robots" content="index" />
        <meta name="image" content="/FaviconLight.svg" />
      </Head>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} bgFull isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center className="lg:mt-44 mt-20 lg:pl-6">
          <BreadCrumbsCases
            customer={data.data.attributes.company}
            sumary={data.data.attributes.sumary}
          />
          <Styles.TitularText>{data?.data.attributes.title}</Styles.TitularText>
        </Styles.Center>

        {data.data?.attributes?.mainPhoto?.data[0].attributes?.url ? (
          <img
            src={
              data.data?.attributes?.mainPhoto?.data[0].attributes?.url || '/'
            }
            width="80%"
            height="auto"
            alt={data.data.attributes.name}
            className="object-cover"
          />
        ) : null}
        <Styles.Center>
          <DetailsCases data={data.data} translate={translate} />
        </Styles.Center>
        <Styles.Center>
          <Styles.TextSubSection>{translate.moreCases}</Styles.TextSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <CasesScroll
              mode={false}
              filter={data?.data?.attributes?.subservice?.data?.name}
              id={slug}
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
          initial={{ opacity: 0, y: '50%' }}>
          <Styles.Center>
            {translate.contact.map((values) => (
              <BlockSection
                key={values.Link}
                text={values.Text}
                button={values.Link}
                text2=""
                button2=""
                mode={false}
                link="/contacto"
              />
            ))}
          </Styles.Center>
        </motion.div>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
