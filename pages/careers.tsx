import { useState } from 'react';
import BlockSection from '../components/block/block';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Carrers() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenMid>
            <div className="w-full">
              <Title size="text-5xl lg:pt-48 lg:pr-10 pb-24 w-full lg:w-3/6 pt-20 leading-relaxed ">
                Trabaja con nosotros
              </Title>
              <Styles.FlexEnd>
                <Subtext size=" text-lg lg:text-base lg:w-2/6 lg:text-left">
                  Siempre estamos buscando perfiles digitales, tecnológicos y
                  creativos para incorporar a nuestro equipo
                </Subtext>
              </Styles.FlexEnd>
            </div>
          </Styles.ScreenMid>
        </Styles.Center>

        <Styles.Center>
          <Subtext size=" text-2xl -mb-20">Queremos conocerte </Subtext>
          <BlockSection
            text="Si no hay ninguna oferta que se ajuste a tu perfil, súmate a nuestra base de datos. Nos pondremos en contacto contigo cuando necesitemos a alguien como tú."
            button="Enviar mi candidatura"
            text2=""
            button2=""
            mode
            link=""
          />
        </Styles.Center>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Carrers;
