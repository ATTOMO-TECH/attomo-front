import { useState } from 'react';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import OneProject from '../components/section/onlyProject';
import SelectedClients from '../components/section/selectedclientes';
import ListUs from '../components/section/us';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';

import { Styles } from '../styles/styles';

function Us() {
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
        <ButtonShare />
        <Styles.Center>
          <Styles.Center>
            <Styles.ScreenMid>
              <Styles.BlockDiv>
                <Title size="text-5xl lg:pt-24 lg:pr-0 pb-12 lg:w-5/6 pt-20 ">
                  El átomo es el principio de todo, alrededor del cual se
                  construye y fluye todo
                </Title>
                <Styles.FlexEnd>
                  <Subtext size=" text-lg lg:text-base lg:w-3/6  lg:text-left">
                    La digitalización también es el principio de todo para
                    cualquier empresa que quiera sobrevivir en el mundo actual y
                    proyectar a futuro
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            </Styles.ScreenMid>
          </Styles.Center>
        </Styles.Center>
        <OneProject />
        <Styles.Center>
          <Styles.BlockUs>
            <ListUs />
            <SelectedClients
              text="Buscamos ser un partner de primer nivel, centrado en desarrollar productos y proyectos a medida, donde la calidad prima siempre por encima de la cantidad."
              btn="Quiero ser cliente"
              link="/contacto"
              textPrimary="Selected clients"
            />
          </Styles.BlockUs>
        </Styles.Center>
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
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Us;
