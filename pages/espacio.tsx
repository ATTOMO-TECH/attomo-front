import { useState } from 'react';
import { useRouter } from 'next/router';
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
import BgComponent from '../components/animations/bg';
import { getLocale } from '../public/locales/getLocale';

function Space() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }

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
        <Styles.Center>
          <Styles.Center>
            <Styles.ScreenMid>
              {translate.spaceAttomo.map((values) => (
                <Styles.BlockDiv key={`value${values.Text}`}>
                  <Title size="text-5xl lg:pt-24 lg:pr-0 pb-12 lg:w-3/6 pt-20 ">
                    {values.Text}
                  </Title>
                  <Styles.FlexEnd>
                    <Subtext size=" text-lg lg:text-base lg:w-3/6  lg:text-left">
                      {values.Subtext}
                    </Subtext>
                  </Styles.FlexEnd>
                </Styles.BlockDiv>
              ))}
            </Styles.ScreenMid>
          </Styles.Center>
        </Styles.Center>
        <Styles.HeroEspace />
        <Styles.Center>
          <Styles.BlockSelected>
            {translate.bookingAttomo.map((values) => (
              <SelectedClients
                text={values.Subtext}
                btn={values.Button}
                link="/espacio#reserva"
                textPrimary={values.Text}
              />
            ))}
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
            <Title size="text-5xl lg:pt-36 pb-24 w-full text-center pt-20 ">
              {translate.prices}
            </Title>
            <Prices locale={locale} />
          </Styles.ContainerFull>
        </Styles.Center>
        <Styles.Center id="reserva">
          {translate.formBooking.map((values) => (
            <Styles.ContainerFull>
              <Title size="lg:text-5xl text-3xl lg:pt-36 w-full text-center pt-20 leading-relaxed ">
                {values.Text}
              </Title>
              <Title size="text-regular lg:pt-3 w-full text-center leading-relaxed pb-8">
                {values.Subtext}
              </Title>
              <FormReserver />
            </Styles.ContainerFull>
          ))}
        </Styles.Center>
        <Styles.Center>
          <Styles.BlockAddres>
            <Styles.BreakLine />
            <Title size="text-2xl  lg:pr-10 ">Espacio Attomo</Title>
            <Subtext size="lg:text-sm text-sm w-full pb-10 font-PrimarySerif">
              Calle del Monte Esquinza, 8-Bajo Izquierda <br />
              28010 Madrid
            </Subtext>
            <MapsBlock />
          </Styles.BlockAddres>
        </Styles.Center>
        <Styles.CenterFlex>
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
        </Styles.CenterFlex>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Space;
