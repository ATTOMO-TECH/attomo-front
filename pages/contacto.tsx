import { useState } from 'react';
import Footer from '../components/footer/footer';
import RenderForm from '../components/form/renderForm';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';
import ButtonShare from '../components/button/BtnShare';
import MapsBlock from '../components/maps/maps';
import BgComponent from '../components/animations/bg';
import { getLocale } from '../public/locales/getLocale';

function Contact() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();
  return (
    <>
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.BlockContact>
          <Styles.Center>
            <Title size="lg:text-5xl text-4xl lg:pt-4 lg:pr-10 pb-24 w-full pt-20">
              {translate.contactTitle}
            </Title>
            <RenderForm />
          </Styles.Center>
        </Styles.BlockContact>
        <Styles.Center>
          <Title size="text-2xl  lg:pr-10 "> {translate.whereUs}</Title>
          <Styles.BlockAddresMap>
            <Subtext size="lg:text-sm text-sm w-full pb-10 font-PrimarySerif">
              Calle del Monte Esquinza, 8-Bajo Izquierda <br />
              28010 Madrid
            </Subtext>

            <MapsBlock />
          </Styles.BlockAddresMap>
        </Styles.Center>

        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Contact;
