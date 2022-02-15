import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
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

function Home() {
  const { data, isLoading } = useUseAllCases();
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

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
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <div>
        <AnimateSharedLayout>
          <AnimatePresence>
            <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
              <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
              <Styles.Margin>
                <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
              </Styles.Margin>
              <ButtonShare />
              <Styles.Center>
                <Styles.ScreenMid>
                  <Hero
                    text="Somos una consultora tecnológica con una única misión: "
                    text2=" ayudar a las empresas y administraciones a liderar a través de la digitalización"
                    button="Conoce más"
                    link="conocenos"
                  />
                </Styles.ScreenMid>
              </Styles.Center>
              <Styles.SectionScreen id="conocenos">
                <Styles.CenterFlex>
                  <motion.div
                    animate={shouldShowActions}
                    variants={servicesAnimations}
                    className="actions"
                    transition={{
                      delay: 0.2,
                      type: 'fade',
                      stiffness: 50,
                      duration: 2,
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: '50%' }}>
                    <SubSection />
                  </motion.div>
                </Styles.CenterFlex>
                <Styles.Center>
                  <Styles.BlockSelected>
                    <motion.div
                      animate={shouldShowActions}
                      variants={servicesAnimations}
                      className="actions"
                      transition={{
                        delay: 0.2,
                        type: 'fade',
                        stiffness: 50,
                        duration: 2,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: '50%' }}>
                      <SelectedClients
                        text="Trabajamos de la mano con nuestros clientes para impulsar y transformar sus áreas de operación."
                        btn="Casos de éxito"
                        link="/casosdeexito"
                        textPrimary="Selected clients"
                      />
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
                <Styles.CenterFlex>
                  <BlockSection
                    text=""
                    button=""
                    text2="¿Quieres ver más casos de éxito?"
                    button2="Nuestro portfolio"
                    mode
                    link="/ATTOMOTrends"
                  />
                </Styles.CenterFlex>
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
                  <HeroFooter text="Diseñamos, desarrollamos e implantamos proyectos a medida para nuestros socios y clientes" />
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
                <Styles.CenterFlex>
                  <BlockSection
                    text="¿Tienes un proyecto?"
                    button="Contacta con nosotros"
                    text2=""
                    button2=""
                    mode
                    link="/contacto"
                  />
                </Styles.CenterFlex>
              </motion.div>
              <Footer subFooter />
            </Styles.Body>
          </AnimatePresence>
        </AnimateSharedLayout>
      </div>
    </>
  );
}
export default Home;
