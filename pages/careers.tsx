import Link from 'next/link';
import { useState } from 'react';
import ButtonShare from '../components/button/BtnShare';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import HeroFooter from '../components/hero/heroFooter';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Work from '../components/section/work';
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
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Styles.Center>
            <Styles.ScreenMid>
              <Styles.BlockDiv>
                <Title size="text-5xl lg:pt-24 lg:pr-0 pb-12 lg:w-3/6 pt-20 ">
                  Trabaja con nosotros
                </Title>
                <Styles.FlexEnd>
                  <Subtext size=" text-lg lg:text-base lg:w-3/6  lg:text-left">
                    Siempre estamos buscando perfiles digitales, tecnológicos y
                    creativos para incorporar a nuestro equipo
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            </Styles.ScreenMid>
          </Styles.Center>
        </Styles.Center>
        <Styles.Center>
          <Subtext size=" text-2xl pb-8">Ofertas de trabajo </Subtext>

          <Work works={[]} />
        </Styles.Center>
        <Styles.Center>
          <Subtext size=" text-2xl">Queremos conocerte </Subtext>
          <Subtext size=" text-sm w-3/6 font-PrimarySerif py-5">
            Si no hay ninguna oferta que se ajuste a tu perfil, súmate a nuestra
            base de datos. Nos pondremos en contacto contigo cuando necesitemos
            a alguien como tú.
          </Subtext>
          <Link href="/">
            <div className="lg:w-2/6">
              <IconAnimate text="Enviar mi candidatura" mode />
            </div>
          </Link>
        </Styles.Center>

        <Styles.CenterFull>
          <HeroFooter text="Construyamos juntos el futuro digital de las organizaciones" />
        </Styles.CenterFull>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Carrers;
