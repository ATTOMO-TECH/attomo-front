import Head from 'next/head';
import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Collapse from '../components/collapse/collapse';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import ArticlesScroll from '../components/slider/article/slider';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Services() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();

  return (
    <>
      <Head>
        <title>Servicios - ATTOMO ESTUDIO</title>
      </Head>
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Styles.ScreenMid>
            {translate.services.map((services) => (
              <Styles.BlockDiv>
                <Title size="lg:text-4xl md:text-3xl text-xl lg:pt-24 lg:pr-0 lg:pb-24 md:pb-12 pb-6 w-full md:pt-36  ">
                  {services.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size=" md:text-lg lg:text-base lg:w-2/6  lg:text-left font-Secundary">
                    {services.Subtext}
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenMid>
        </Styles.Center>
        <Styles.Center>
          <Styles.SpaceCollapse>
            <Collapse />
          </Styles.SpaceCollapse>
        </Styles.Center>
        <Styles.Center>
          <Styles.TitleSubSection>{translate.project}</Styles.TitleSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll mode filter="Estrategia" />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <Styles.Center>
          {translate.contact.map((values) => (
            <BlockSection
              key={values.Link}
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
    </>
  );
}
export default Services;
