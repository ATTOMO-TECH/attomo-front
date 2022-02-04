import { useState } from 'react';
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

function Home() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const { data, isLoading } = useUseAllCases();
  if (isLoading) {
    return <>...Cargando</>;
  }

  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenMid>
            <div>
              <Hero
                text="Somos una consultora tecnológica con una única misión: ayudar a las empresas y administraciones a liderar a través de la digitalización"
                button="Conoce más"
                link="conocenos"
              />
            </div>
          </Styles.ScreenMid>
        </Styles.Center>

        <Styles.SectionScreen id="conocenos">
          <Styles.CenterFlex>
            <SubSection />
          </Styles.CenterFlex>
          <Styles.Center>
            <div className="lg:w-8/12 m-auto flex flex-wrap py-0">
              <SelectedClients
                text="Trabajamos de la mano con nuestros clientes para impulsar y transformar sus áreas de operación."
                btn="Casos de éxito"
                link="/casosdeexito"
              />
            </div>
          </Styles.Center>
        </Styles.SectionScreen>

        <Styles.BlockSlider>
          <CompaniesScroll />
        </Styles.BlockSlider>
        <SectionProjects Array={data.data} />
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
            link="/contacto"
          />
        </Styles.CenterFlex>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Home;
