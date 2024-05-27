import { useEffect, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from '../../styles/styles';
import ButtonShare from '../../components/button/BtnShare';
import { servicesAnimations } from '../../components/animations/animations';
import { getLocale } from '../../public/locales/getLocale';
import Title from '../../components/Text/title';
import MainTitle from '../../components/Text/mainTitle';
import ParagraphText from '../../components/Text/paragraphText';
import HowKit from '../../components/section/howKit';
import FormKitConsulting from '../../components/form/formKitConsulting';
import ButtonsKitConsul from '../../components/button/buttonsKitConsul';
import ButtonKit from '../../components/button/buttonKit';
import { Props } from '../types';

function KitConsulting({ locale }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  useEffect(() => {
    let isMounted = true;

    function handleScroll() {
      if (isMounted) {
        const yPos = window.scrollY;
        const isScrollingUp = yPos < lastYPos;

        setShouldShowActions(isScrollingUp);
        setLastYPos(yPos);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastYPos]);

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('position')) {
        window.localStorage.removeItem('position');
      }
    }
  }, []);

  return (
    <>
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
                {translate.kitConsulting.map((services) => (
                  <Styles.BlockDiv key={services.HeroText}>
                    <MainTitle size="lg:pr-10 lg:w-7/12 lg:text-4xl md:text-3xl pb-2 text-2xl">
                      {services.HeroText}
                    </MainTitle>
                    <Styles.FlexEnd>
                      <ParagraphText size="lg:w-2/6 pt-10  absolute">
                        {services.HeroSubTex}
                      </ParagraphText>
                    </Styles.FlexEnd>
                  </Styles.BlockDiv>
                ))}
              </Styles.ScreenWS>
            </Styles.Center>
            <ButtonsKitConsul
              translate={translate}
              shouldShowActions={shouldShowActions}
            />
            <Styles.SectionImage
              animate={shouldShowActions}
              variants={servicesAnimations}
              transition={{
                type: 'magic',
                stiffness: 100,
                duration: 0.5,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0.1, y: '50%' }}>
              <img
                src="/kit/logos-estado.png"
                alt="Logos de Gobierno de España, financiación de la unión y organismos relacionados con el Kit Digital"
              />
            </Styles.SectionImage>
          </Styles.SectionsKits>
          <Styles.BlockKits id="section-how-kit">
            <Styles.SectionsKits>
              <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-2 text-2xl pb-12">
                {translate.HeaderKitConsult}
              </Title>
              {translate.programKitConsul.map((values: { item: string }) => (
                <ParagraphText
                  size="text-justify  w-full  font-light pb-6"
                  key={`program-kit-${values.item}`}>
                  {values.item}
                </ParagraphText>
              ))}
              <Styles.SectionsKits>
                <Styles.BlockSelectedSub>
                  <Styles.TextSecundary>
                    {translate.subTextConsult}
                  </Styles.TextSecundary>
                </Styles.BlockSelectedSub>
                <Styles.BlurBlock />
              </Styles.SectionsKits>
            </Styles.SectionsKits>
          </Styles.BlockKits>
          <Styles.BlockKits>
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-12 text-2xl">
              {translate.kitConsulTitlerequirements}
            </Title>
            <Styles.SectionsKits>
              <Styles.BlockSelectedSub className="p-12">
                {translate.kitConsultRequirements.map((values) => (
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
              title={translate.howKitConsulTitle}
              subtitle={translate.helpYouKitConsul}
              blockSection={translate.howConsulRequeriments}
            />
            <ButtonKit translate={translate} />
          </Styles.BlockKits>
          <Styles.BlockKits>
            <HowKit
              title={translate.AgentKit}
              blockSection={translate.AgentRequerimentsConsul}
            />
          </Styles.BlockKits>
          <Styles.BlockKits className="pb-12" id="form-kit">
            <Title size="lg:pr-10  lg:text-4xl md:text-3xl pb-2 text-2xl">
              {translate.searchAgent}
            </Title>
            <ParagraphText size="text-justify flex justify-center lg:text-lg text-xl text-center font-light pb-6">
              {translate.helpYouKitConsul}
            </ParagraphText>
            <FormKitConsulting locale={locale} />
          </Styles.BlockKits>
          <Footer subFooter={false} />
        </Styles.Body>
      </AnimateSharedLayout>
    </>
  );
}

export default KitConsulting;
