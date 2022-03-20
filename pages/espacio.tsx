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
// import Prices from '../components/section/price';
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
                  <Title size="leading-relaxed text-5xl lg:pt-24 lg:pr-0 pb-6 lg:w-5/6 pt-20 ">
                    {values.Text}
                  </Title>
                  <Styles.FlexEnd>
                    <Subtext size=" text-md lg:text-base lg:w-3/6  lg:text-left">
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
        <Styles.Center id="reserva">
          {translate.formBooking.map((values) => (
            <Styles.BlockDiv>
              <Title size="lg:text-4xl md:text-3xl text-xl lg:pt-24 lg:pr-0 lg:pb-24 md:pb-12 pb-6 w-full md:pt-36  ">
                {values.Text}
              </Title>
              <Styles.FlexEnd>
                <Subtext size=" md:text-lg lg:text-base lg:w-2/6  lg:text-left font-Secundary">
                  {values.Subtext}
                </Subtext>
              </Styles.FlexEnd>
            </Styles.BlockDiv>
          ))}
        </Styles.Center>
        <Styles.Center>
          <Styles.BlockAddres>
            <Styles.BreakLine />
            <Title size="text-2xl  lg:pr-10 ">
              {translate.spaceAttomoFooter}
            </Title>
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
