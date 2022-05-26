import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { useRouter } from 'next/router';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { Styles } from '../styles/styles';
import ButtonShare from '../components/button/BtnShare';
import RenderLoading from '../components/loading/loading';
import { servicesAnimations } from '../components/animations/animations';
import { getLocale } from '../public/locales/getLocale';
import Background from '../components/animations/background';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';
import Title from '../components/Text/title';
import Subtext from '../components/Text/subText';
import HowKit from '../components/section/howKit';
import FormKit from '../components/form/formKit';

function KitDigital() {
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

  if (screenIsLoading) {
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
          mode={isOpen ? BUTTON_ACTIVE.ON : ''}
          id="home"
          className="z-100">
          <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
          <Styles.Margin>
            <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
          </Styles.Margin>
          <ButtonShare />
          <div className="h-screen relative">
            <Styles.Center>
              <Styles.ScreenWS>
                {translate.kitDigital.map((services) => (
                  <Styles.BlockDiv key={services.HeroText}>
                    <Title size="lg:pr-10 w-4/12 lg:text-4xl md:text-3xl pb-2 text-2xl">
                      {services.HeroText}
                    </Title>
                    <Styles.FlexEnd>
                      <Subtext size="lg:w-2/6 pt-10  absolute">
                        {services.HeroSubTex}
                      </Subtext>
                    </Styles.FlexEnd>
                  </Styles.BlockDiv>
                ))}
              </Styles.ScreenWS>
            </Styles.Center>
            <Styles.SectionScreen id="conocenos">
              <Styles.Center>
                <motion.div
                  animate={shouldShowActions}
                  variants={servicesAnimations}
                  transition={{
                    type: 'magic',
                    stiffness: 100,
                    duration: 0.5,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: '50%' }}
                  className="flex justify-center items-center actions mt-24 bottom-0">
                  <Styles.BtnKit mode={BUTTON_ACTIVE.ON}>
                    Qué es el Kit Digital
                  </Styles.BtnKit>
                  <Styles.BtnKit>Solicitar Kit Digital</Styles.BtnKit>
                </motion.div>
              </Styles.Center>
            </Styles.SectionScreen>
            <motion.div
              animate={shouldShowActions}
              variants={servicesAnimations}
              transition={{
                type: 'magic',
                stiffness: 100,
                duration: 0.5,
                delay: 1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: '50%' }}
              className="bg-white flex items-center justify-center  absolute w-full bottom-0">
              <img src="/kit/logos-estado.png" alt="" />
            </motion.div>
          </div>
          <div className="pt-24 w-8/12 text-center m-auto">
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-2 text-2xl">
              {translate.HeaderKit}
            </Title>
            {translate.programKit.map((values: { item: string }) => (
              <Subtext size="text-justify lg:text-lg text-xl w-full  font-light pb-6">
                {values.item}
              </Subtext>
            ))}
            <Styles.BlockSelectedSub>
              <h6 className="text-primary font-light text-justify text-sm p-4 ">
                {translate.subText}
              </h6>
              <Styles.BlurBlock />
            </Styles.BlockSelectedSub>
          </div>
          <div className="pt-24 w-8/12 text-center m-auto">
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-12 text-2xl">
              {translate.kitTitlerequirements}
            </Title>
            <Styles.BlockSelectedSub className="p-12">
              {translate.kitRequirements.map((values) => (
                <li className="  w-full  list-disc text-primary  text-justify  p-2 text-sm font-light font-PrimarySerif tracking-wide leading-loose">
                  {values.item}
                </li>
              ))}
              <Styles.BlurBlock />
            </Styles.BlockSelectedSub>
          </div>
          <div className="pt-24 w-8/12 text-center m-auto">
            <HowKit
              title={translate.howKitTitle}
              subtitle={translate.howSubtex}
              blockSection={translate.howRequeriments}
            />
            <Styles.BtnKit>Solicitar Kit Digital</Styles.BtnKit>
          </div>
          <div className="pt-24 w-8/12 text-center m-auto">
            <HowKit
              title={translate.AgentKit}
              blockSection={translate.AgentRequeriments}
            />
          </div>

          <div className="pt-24  w-10/12 text-center m-auto pb-24">
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-2 text-2xl">
              {translate.searchAgent}
            </Title>
            <Subtext size="text-justify lg:text-lg text-xl  text-center  font-light pb-6">
              {translate.helpYouKit}
            </Subtext>
            <FormKit />
          </div>

          <Footer subFooter />
        </Styles.Body>
      </AnimateSharedLayout>
    </>
  );
}

export default KitDigital;
