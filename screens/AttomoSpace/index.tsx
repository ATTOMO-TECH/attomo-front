import { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import MainTitle from '../../components/Text/mainTitle';
import Title from '../../components/Text/title';
import ParagraphText from '../../components/Text/paragraphText';
import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from '../../styles/styles';
import SelectedClients from '../../components/section/selectedclientes';
import FormReserver from '../../components/form/formReserver';
import ButtonShare from '../../components/button/BtnShare';
import MapsBlock from '../../components/maps/maps';
import { getLocale } from '../../public/locales/getLocale';
import { Props } from '../types';

function Space({ locale }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('position')) {
        window.localStorage.removeItem('position');
      }
    }
  }, []);

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />

        <Styles.Center>
          <Styles.ScreenWS>
            {translate.spaceAttomo?.map((services) => (
              <Styles.BlockDiv key={services.Text}>
                <MainTitle size="lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl">
                  {services.Text}
                </MainTitle>
                <Styles.FlexEnd>
                  <ParagraphText size="lg:w-2/6 pt-10">
                    {services.Subtext}
                  </ParagraphText>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.Center>
        <Styles.HeroEspace />
        <Styles.Center>
          <Styles.BlockSelected>
            {translate.bookingAttomo?.map((values) => (
              <SelectedClients
                key={values.Text}
                text={values.Subtext}
                btn={values.Button}
                textPrimary={values.Text}
              />
            ))}
          </Styles.BlockSelected>
        </Styles.Center>
        <Styles.Center id="reserva">
          <FormReserver locale={locale} />
        </Styles.Center>
        <Styles.CenterMargin>
          <Title size="text-2xl  lg:pr-10 "> {translate.whereUs}</Title>
          <Styles.BlockAddresMap>
            <ParagraphText size="text-regular w-full leading-loose font-Secundary w-full pb-10 ">
              Calle del Monte Esquinza, 8-Bajo Izquierda <br />
              28010 Madrid
            </ParagraphText>
          </Styles.BlockAddresMap>
        </Styles.CenterMargin>
        <Styles.BlockAddresMapImg>
          {typeof window !== 'undefined' && <MapsBlock />}
        </Styles.BlockAddresMapImg>

        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Space;
