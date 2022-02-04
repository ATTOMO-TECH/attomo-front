import { useState } from 'react';
import BlockSection from '../components/block/block';
import Collapse from '../components/collapse/collapse';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import ArticlesScroll from '../components/slider/article/slider';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { ARTICLES } from '../const/constGlobal';
import { Styles } from '../styles/styles';

function Services() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenMid>
            <div>
              <Title size="text-5xl lg:pt-24 lg:pr-10 pb-24 w-full pt-20 ">
                Combinamos ingeniería, diseño, escalabilidad e innovación para
                transformar industrias, empresas y administraciones
              </Title>
              <Styles.FlexEnd>
                <Subtext size=" text-lg lg:text-base lg:w-3/6 lg:text-right">
                  Ofrecemos cualquier servicio relacionado con la digitalización
                  y la transformación digital
                </Subtext>
              </Styles.FlexEnd>
            </div>
          </Styles.ScreenMid>
        </Styles.Center>
        <Styles.Center>
          <div className="py-48">
            <Collapse />
          </div>
        </Styles.Center>
        <Styles.Center>
          <Styles.TitleSubSection>
            Proyectos relacionados
          </Styles.TitleSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll mode array={ARTICLES} />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
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
export default Services;
