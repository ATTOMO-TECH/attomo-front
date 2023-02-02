import { useEffect, useState } from 'react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import BlockSection from '../../components/block/block';
import Footer from '../../components/footer/footer';
import Hero from '../../components/hero/hero';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import SectionProjects from '../../components/section/projects';
import CompaniesScroll from '../../components/slider/companys/slider';
import SubSection from '../../components/subsection/subsection';
import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from '../../styles/styles';
import ButtonShare from '../../components/button/BtnShare';
import { servicesAnimations } from '../../components/animations/animations';
import { getLocale } from '../../public/locales/getLocale';
import { Props } from '../types';

function Home({ data, locale, isCacheView }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [lastYPos, setLastYPos] = useState(0);
  const [shouldShowActions, setShouldShowActions] = useState(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }
    return () => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    };
  }, [lastYPos]);

  return (
    <>
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
          <Styles.Center>
            <Styles.ScreenMid>
              {translate.home.map((values) => (
                <Hero
                  key={`Hero${values.HeroText}`}
                  text={values.HeroText}
                  text2={values.HeroSubTex}
                  button={values.Button}
                  link="conocenos"
                  isCacheView={isCacheView}
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
            {/* <Styles.Center>
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
            </Styles.Center> */}
          </Styles.SectionScreen>
          <Styles.BlockSlider>
            <CompaniesScroll />
          </Styles.BlockSlider>
          <Styles.SectionProjects>
            {data?.map((values: any, i: number) => (
              <SectionProjects
                i={i}
                key={`SectionProjects${values.attributes.title}`}
                values={values}
                shouldShowActions={shouldShowActions}
                servicesAnimations={servicesAnimations}
              />
            ))}
          </Styles.SectionProjects>
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
