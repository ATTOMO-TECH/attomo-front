import Head from 'next/head';
import { useState } from 'react';
import Background from '../components/animations/background';
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
        <title>Servicios ATTOMO - Nuestros servicios</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Styles.ScreenWS>
            {translate.services.map((services) => (
              <Styles.BlockDiv>
                <Title size="lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl">
                  {services.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size="lg:w-2/6 pt-10">{services.Subtext}</Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
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
