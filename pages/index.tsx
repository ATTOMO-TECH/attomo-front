import { useState } from 'react';
import BlockSection from '../components/block/block';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import Hero from '../components/hero/hero';
import HeroFooter from '../components/hero/heroFooter';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import CompaniesScroll from '../components/slider/companys/slider';
import SubSection from '../components/subsection/subsection';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { HOMECUSTOMERS } from '../const/constGlobal';
import { Styles } from '../styles/styles';

function Home() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />

        <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />

        <Styles.Center>
          <Hero
            text="Somos una consultora tecnológica con una única misión: ayudar a las empresas y administraciones a liderar a través de la digitalización"
            button="Conoce más"
            link="conocenos"
          />
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
              <div className="w-full lg:pl-24">
                <IconAnimate text="Casos de éxito" />
              </div>
            </Styles.DivideSection>
          </Styles.BlockMargin>
          <Styles.BlockSlider>
            <CompaniesScroll />
          </Styles.BlockSlider>
        </Styles.Center>
        <SectionProjects Array={HOMECUSTOMERS} />
        <Styles.CenterFlex>
          <BlockSection
            text=""
            button=""
            text2="¿Quieres ver más casos de éxito?"
            button2="Nuestro portfolio"
            mode
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
            mode
          />
        </Styles.CenterFlex>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Home;
