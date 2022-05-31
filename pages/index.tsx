import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import * as qs from 'qs';
import { useRouter } from 'next/router';
import BlockSection from '../components/block/block';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import CompaniesScroll from '../components/slider/companys/slider';
import SubSection from '../components/subsection/subsection';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { Styles } from '../styles/styles';
import SelectedClients from '../components/section/selectedclientes';
import { useUseAllCases } from '../domain/useCasesDetails';
import ButtonShare from '../components/button/BtnShare';
import RenderLoading from '../components/loading/loading';
import { servicesAnimations } from '../components/animations/animations';
import { getLocale } from '../public/locales/getLocale';
import Background from '../components/animations/background';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';

function Home() {
  const router = useRouter();
  const translate = getLocale();

  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.HOME,
    locale || 'es',
  );
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

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    return () => {
      window.addEventListener('scroll', handleScroll, { passive: false });
    };
  }, [lastYPos]);

  if (isLoading || screenIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Metadata screen={screen} />
      <Background />
      <AnimateSharedLayout>
        <Styles.Body
          onTouchStart={(e: any) =>
            !e.cancelable
              ? (e.preventDefault(),
                {
                  passive: true,
                })
              : null
          }
          onTouchEnd={(e: any) =>
            !e.cancelable
              ? (e.preventDefault(),
                {
                  passive: true,
                })
              : null
          }
          mode={isOpen ? BUTTON_ACTIVE.ON : ''}
          id="home"
          className="z-100">
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
                    key={`SelectedClients${values.Title}`}
                    textPrimary={values.Section}
                    text={values.Title}
                    btn={values.Button}
                    link="/casosdeexito"
                  />
                ))}
              </motion.div>
            </Styles.Center>
          </Styles.SectionScreen>
          <Styles.BlockSlider>
            <CompaniesScroll />
          </Styles.BlockSlider>
          <SectionProjects
            data={data.data}
            shouldShowActions={shouldShowActions}
            servicesAnimations={servicesAnimations}
          />

          <Styles.Center>
            {translate.contact.map((values) => (
              <BlockSection
                key={`BlockSection-${values.Text}`}
                text={values.Text}
                button={values.Link}
                text2=""
                button2=""
                mode
                link="/contacto"
              />
            ))}
          </Styles.Center>
          <Footer subFooter={false} />
        </Styles.Body>
      </AnimateSharedLayout>
    </>
  );
}

export default Home;
