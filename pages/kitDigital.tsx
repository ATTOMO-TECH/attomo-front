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
    function handleScroll(e: any) {
      if (e.cancelable) {
        e.preventDefault();
      }
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    return () => {
      window.addEventListener('scroll', handleScroll, { passive: false });
    };
  }, [lastYPos]);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section !== null) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
          <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
          <Styles.Margin>
            <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
          </Styles.Margin>
          <ButtonShare />
          <Styles.SectionsKits mode={BUTTON_ACTIVE.ON}>
            <Styles.Center>
              <Styles.ScreenWS>
                {translate.kitDigital.map((services) => (
                  <Styles.BlockDiv key={services.HeroText}>
                    <Title size="lg:pr-10 lg:w-4/12 lg:text-4xl md:text-3xl pb-2 text-2xl">
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
                  className="flex flex-col lg:flex-row  justify-center items-center actions my-24 lg:my-0 bottom-0 ">
                  <Styles.BtnKit
                    mode={BUTTON_ACTIVE.ON}
                    onClick={() => scrollTo('section-how-kit')}
                    onTouchEnd={() => scrollTo('section-how-kit')}>
                    {translate.btnHow}
                  </Styles.BtnKit>

                  <Styles.BtnKit
                    className="mt-5 lg:mt-0"
                    onClick={() => scrollTo('form-kit')}
                    onTouchEnd={() => scrollTo('form-kit')}>
                    {translate.btnForm}
                  </Styles.BtnKit>
                </motion.div>
              </Styles.Center>
            </Styles.SectionScreen>
            <Styles.SectionImage
              animate={shouldShowActions}
              variants={servicesAnimations}
              transition={{
                type: 'magic',
                stiffness: 100,
                duration: 0.5,
                delay: 1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: '50%' }}>
              <img src="/kit/logos-estado.png" alt="" />
            </Styles.SectionImage>
          </Styles.SectionsKits>
          <Styles.BlockKits id="section-how-kit">
            <Styles.SectionsKits>
              <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-2 text-2xl pb-12">
                {translate.HeaderKit}
              </Title>
              {translate.programKit.map((values: { item: string }) => (
                <Subtext
                  size="text-justify  w-full  font-light pb-6"
                  key={`program-kit-${values.item}`}>
                  {values.item}
                </Subtext>
              ))}
              <Styles.SectionsKits>
                <Styles.BlockSelectedSub>
                  <Styles.TextSecundary>
                    {translate.subText}
                  </Styles.TextSecundary>
                </Styles.BlockSelectedSub>
                <Styles.BlurBlock />
              </Styles.SectionsKits>
            </Styles.SectionsKits>
          </Styles.BlockKits>
          <Styles.BlockKits>
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-12 text-2xl">
              {translate.kitTitlerequirements}
            </Title>
            <Styles.SectionsKits>
              <Styles.BlockSelectedSub className="p-12">
                {translate.kitRequirements.map((values) => (
                  <Styles.ListType key={`program-kit-${values.item}`}>
                    {values.item}
                  </Styles.ListType>
                ))}
              </Styles.BlockSelectedSub>
              <Styles.BlurBlock />
            </Styles.SectionsKits>
          </Styles.BlockKits>
          <Styles.BlockKits>
            <HowKit
              title={translate.howKitTitle}
              subtitle={translate.howSubtex}
              blockSection={translate.howRequeriments}
            />
            <Styles.BtnKit
              onClick={() => scrollTo('form-kit')}
              onTouchStart={() => scrollTo('form-kit')}>
              {translate.helpYou}
            </Styles.BtnKit>
          </Styles.BlockKits>
          <Styles.BlockKits>
            <HowKit
              title={translate.AgentKit}
              blockSection={translate.AgentRequeriments}
            />
          </Styles.BlockKits>
          <Styles.BlockKits className="pb-12" id="form-kit">
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-2 text-2xl">
              {translate.searchAgent}
            </Title>
            <Subtext size="text-justify lg:text-lg text-xl  text-center  font-light pb-6">
              {translate.helpYouKit}
            </Subtext>
            <FormKit />
          </Styles.BlockKits>
          <Footer subFooter={false} />
        </Styles.Body>
      </AnimateSharedLayout>
    </>
  );
}

export default KitDigital;
