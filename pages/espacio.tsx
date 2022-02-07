import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';
import BlockSection from '../components/block/block';
import SelectedClients from '../components/section/selectedclientes';
import Prices from '../components/section/price';
import FormReserver from '../components/form/formReserver';

function Space() {
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
            <Styles.ContainerFull>
              <Title size="text-5xl lg:pt-36 pb-24 w-full lg:w-4/6 pt-20 leading-relaxed ">
                Espacio Attomo Digital
              </Title>
              <Styles.FlexEnd>
                <Subtext size="text-regular lg:w-2/6 lg:text-left font-PrimarySerif">
                  Ofrecemos a otros profesionales la oportunidad de utilizar
                  nuestras instalaciones para desarrollar sus proyectos o
                  realizar sesiones fotográficas.
                </Subtext>
              </Styles.FlexEnd>
            </Styles.ContainerFull>
          </Styles.ScreenMid>
        </Styles.Center>
        <Styles.HeroEspace />
        <Styles.Center>
          <Styles.BlockSelected>
            <SelectedClients
              text="Contamos con ambientes amplios y polivalentes, que alquilamos por hora o por jornada a emprendedores, fotógrafos, agencias y productoras."
              btn="Reservar"
              link="/Reservar"
              textPrimary="Reserva el espacio"
            />
          </Styles.BlockSelected>
          <Styles.SectionImg>
            <Styles.BlockImg className="bg-space-Attomo" />
            <Styles.BlockImg className="bg-space-Attomo2" />
            <Styles.BlockImg className="bg-space-Attomo3" />
            <Styles.BlockImg className="bg-space-Attomo4" />
          </Styles.SectionImg>
        </Styles.Center>
        <Styles.Center>
          <Styles.ContainerFull>
            <Title size="text-5xl lg:pt-36 pb-24 w-full text-center pt-20 leading-relaxed ">
              Tarifas
            </Title>
            <Prices />
          </Styles.ContainerFull>
        </Styles.Center>
        <Styles.Center>
          <Styles.ContainerFull>
            <Title size="text-5xl lg:pt-36 w-full text-center pt-20 leading-relaxed ">
              Reserva el Espacio Attomo Digital
            </Title>
            <Title size="text-regular lg:pt-3 w-full text-center leading-relaxed pb-8">
              Selecciona la fecha y consulta su disponibilidad
            </Title>
            <FormReserver />
          </Styles.ContainerFull>
        </Styles.Center>
        <Styles.Center>
          <Styles.BlockAddres>
            <Styles.BreakLine />
            <Title size="text-2xl  lg:pr-10 ">Espacio Attomo Digital</Title>
            <Subtext size="lg:text-sm text-sm w-full py-5 font-PrimarySerif ">
              Calle del Monte Esquinza, 8, 28010 Madrid
            </Subtext>
            <Link href="https://www.google.es/maps/?hl=es">
              <a
                target="_blank"
                href="https://www.google.es/maps/?hl=es"
                rel="noreferrer">
                <Image
                  src="/Map_.jpg"
                  width={700}
                  height={400}
                  alt="Maps"
                  layout="responsive"
                />
              </a>
            </Link>
          </Styles.BlockAddres>
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
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Space;
