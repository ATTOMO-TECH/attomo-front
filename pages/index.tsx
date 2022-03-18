import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import * as qs from 'qs';
import { useRouter } from 'next/router';
import BlockSection from '../components/block/block';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import HeroFooter from '../components/hero/heroFooter';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import CompaniesScroll from '../components/slider/companys/slider';
import SubSection from '../components/subsection/subsection';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';
import SelectedClients from '../components/section/selectedclientes';
import { useUseAllCases } from '../domain/useCasesDetails';
import ButtonShare from '../components/button/BtnShare';
import RenderLoading from '../components/loading/loading';
import { servicesAnimations } from '../components/animations/animations';
import BgComponent from '../components/animations/bg';
import { getLocale } from '../public/locales/getLocale';
import { useUseAllQuote } from '../domain/useQuotes';

function Home() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const queryObject: any = {
    filters: {
      featuredInHome: {
        $eq: true,
      },
    },
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });

  const { data, isLoading } = useUseAllCases(locale || 'es', queryQs);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);
  const [random, setRandom] = useState<any>();
  useEffect(() => {
    const randomQuote = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    setRandom(randomQuote(1, 2));
  }, [random]);

  const { data: Quote, isLoading: QuoteIsLoading } = useUseAllQuote(
    random,
    locale || 'es',
  );

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);

    return () => {
      window.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos]);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  if (isLoading || QuoteIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  const translate = getLocale();

  return (
    <>
      <BgComponent />
      <AnimateSharedLayout>
        <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
          <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
          <Styles.Margin>
            <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
          </Styles.Margin>
          <ButtonShare />
          <Styles.Center>
            <Styles.ScreenMid>
              {translate.home.map((values) => (
                <Hero
                  key={`Hero${values.HeroText}`}
                  text={values.HeroText}
                  text2={values.HeroSubTex}
                  button={values.Button}
                  link="conocenos"
                />
              ))}
            </Styles.ScreenMid>
          </Styles.Center>
          <Styles.SectionScreen id="conocenos">
            <Styles.BlockSelected>
              <motion.div
                animate={shouldShowActions}
                variants={servicesAnimations}
                className="actions"
                transition={{
                  type: 'magic',
                  stiffness: 100,
                  duration: 0.5,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: '50%' }}>
                <SubSection locale={translate} />
              </motion.div>
            </Styles.BlockSelected>
            <Styles.Center>
              <Styles.BlockSelected>
                <motion.div
                  animate={shouldShowActions}
                  variants={servicesAnimations}
                  className="actions"
                  transition={{
                    type: 'magic',
                    stiffness: 100,
                    duration: 0.5,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: '50%' }}>
                  {translate.selected.map((values) => (
                    <SelectedClients
                      textPrimary={values.Section}
                      text={values.Title}
                      btn={values.Button}
                      link="/casosdeexito"
                    />
                  ))}
                </motion.div>
              </Styles.BlockSelected>
            </Styles.Center>
          </Styles.SectionScreen>
          <Styles.BlockSlider>
            <CompaniesScroll />
          </Styles.BlockSlider>
          <SectionProjects
            Array={data.data}
            shouldShowActions={shouldShowActions}
            servicesAnimations={servicesAnimations}
          />
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            className="actions"
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 50,
              duration: 2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '50%' }}>
            <Styles.Center>
              {translate.seeMore.map((values) => (
                <BlockSection
                  key={values.Link}
                  text=""
                  button=""
                  text2={values.Text}
                  button2={values.Link}
                  mode
                  link="/ATTOMOTrends"
                />
              ))}
            </Styles.Center>
          </motion.div>
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            className="actions"
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 50,
              duration: 2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '50%' }}>
            <Styles.CenterFull>
              <HeroFooter text={Quote.data.attributes.text} />
            </Styles.CenterFull>
          </motion.div>
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            className="actions"
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
                  mode
                  link="/contacto"
                />
              ))}
            </Styles.Center>
          </motion.div>
          <Footer subFooter />
        </Styles.Body>
      </AnimateSharedLayout>
    </>
  );
}
export default Home;
