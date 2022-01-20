import { useState } from 'react';
import BlockSection from '../components/block/block';
import Btn from '../components/button/button';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import HeroFooter from '../components/hero/heroFooter';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import CompaniesScroll from '../components/slider/slider';
import SubSection from '../components/subsection/subsection';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Cases() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} />
        <Styles.Center>
          <Nav toggle={toggle} />
        </Styles.Center>
        <Styles.Center>
          <Hero text="" button="" link="" />
        </Styles.Center>
        <Styles.CenterFlex id="conocenos">
          <SubSection />
        </Styles.CenterFlex>
        <Styles.Center>
          <Styles.BlockMargin>
            <Styles.DivideSection>
              <Title size="text-5xl lg:px-24">Selected clients</Title>
            </Styles.DivideSection>
            <Styles.DivideSection>
              <Title size="text-xl lg:px-24 pt-10">
                Trabajamos de la mano con nuestros clientes para impulsar y
                transformar sus áreas de operación.
              </Title>
              <Styles.BlockButton>
                <Btn>Casos de éxito</Btn>
              </Styles.BlockButton>
            </Styles.DivideSection>
          </Styles.BlockMargin>
          <Styles.BlockSlider>
            <CompaniesScroll />
          </Styles.BlockSlider>
        </Styles.Center>
        <SectionProjects />
        <Styles.CenterFlex>
          <BlockSection
            text=""
            button=""
            text2="¿Quieres ver más casos de éxito?"
            button2="Nuestro portfolio"
          />
        </Styles.CenterFlex>
        <Styles.CenterFull>
          <HeroFooter />
        </Styles.CenterFull>
        <Styles.CenterFlex>
          <BlockSection
            text="¿Tienes un proyecto?"
            button="Contacta con nosotros"
            text2=""
            button2=""
          />
        </Styles.CenterFlex>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Cases;
