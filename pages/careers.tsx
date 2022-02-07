import Link from 'next/link';
import { useState } from 'react';
import IconAnimate from '../components/button/icon';
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
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.Center>
            <Styles.Center>
              <Styles.ScreenMid>
                <div className="w-full">
                  <Title size="text-5xl lg:pt-48 lg:pr-10 pb-24 w-full lg:w-3/6 pt-20 leading-relaxed ">
                    Trabaja con nosotros
                  </Title>
                  <Styles.FlexEnd>
                    <Subtext size="text-lg lg:w-3/6 lg:text-left font-PrimarySerif">
                      Siempre estamos buscando perfiles digitales, tecnológicos
                      y creativos para incorporar a nuestro equipo
                    </Subtext>
                  </Styles.FlexEnd>
                </div>
              </Styles.ScreenMid>
            </Styles.Center>
          </Styles.Center>
        </Styles.Center>
        <Styles.Center>
          <Subtext size=" text-2xl">Queremos conocerte </Subtext>
          <Subtext size=" text-sm w-3/6 font-PrimarySerif py-5">
            Si no hay ninguna oferta que se ajuste a tu perfil, súmate a nuestra
            base de datos. Nos pondremos en contacto contigo cuando necesitemos
            a alguien como tú.{' '}
          </Subtext>
          <Link href="/">
            <div className="lg:w-2/6">
              <IconAnimate text="Enviar mi candidatura" mode />
            </div>
          </Link>
        </Styles.Center>
        <section className="mt-24 bg-blue-700 h-auto flex w-full flex-wrap justify-center items-center lg:p-48 py-24 ">
          <Styles.Center>
            <h6 className="font-Primary text-primary text-5xl leading-relaxed lg:m-auto font-thin">
              Construyamos juntos el futuro digital de las organizaciones
            </h6>
          </Styles.Center>
        </section>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Carrers;
