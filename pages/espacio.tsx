import { useState } from 'react';
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
import ButtonShare from '../components/button/BtnShare';
import MapsBlock from '../components/maps/maps';

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
        <ButtonShare />

        <Styles.Center>
          <Styles.Center>
            <Styles.ScreenMid>
              <Styles.BlockDiv>
                <Title size="text-5xl lg:pt-24 lg:pr-0 pb-12 lg:w-3/6 pt-20 ">
                  Espacio Attomo
                </Title>
                <Styles.FlexEnd>
                  <Subtext size=" text-lg lg:text-base lg:w-3/6  lg:text-left">
                    Ofrecemos a otros profesionales la oportunidad de utilizar
                    nuestras instalaciones para desarrollar sus proyectos o
                    realizar sesiones fotográficas.
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            </Styles.ScreenMid>
          </Styles.Center>
        </Styles.Center>

        <Styles.HeroEspace />
        <Styles.Center>
          <Styles.BlockSelected>
            <SelectedClients
              text="Contamos con ambientes amplios y polivalentes, que alquilamos por hora o por jornada a emprendedores, fotógrafos, agencias y productoras."
              btn="Reservar"
              link="/espacio#reserva"
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
        <Styles.Center id="reserva">
          <Styles.ContainerFull>
            <Title size="text-5xl lg:pt-36 w-full text-center pt-20 leading-relaxed ">
              Reserva el Espacio Attomo
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
            <MapsBlock />
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
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Space;
