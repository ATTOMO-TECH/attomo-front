import { useState } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer/footer';
import RenderForm from '../components/form/renderForm';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { Styles } from '../styles/styles';
import ButtonShare from '../components/button/BtnShare';
import MapsBlock from '../components/maps/maps';
import Background from '../components/animations/background';
import { getLocale } from '../public/locales/getLocale';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';
import RenderLoading from '../components/loading/loading';

function Contact() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.CONTACT,
    locale || 'es',
  );

  const translate = getLocale();
  if (screenIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Metadata screen={screen} />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Background />
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Title size="lg:text-4xl md:text-3xl text-2xl lg:pt-24 lg:pr-0 lg:pb-24 md:pb-12 pb-10 lg:w-full pt-20  w-4/6  ">
            {translate.contactTitle}
          </Title>
          <RenderForm />
        </Styles.Center>
        <Styles.Center>
          <Title size="text-2xl  lg:pr-10 "> {translate.whereUs}</Title>
          <Styles.BlockAddresMap>
            <Subtext size="text-regular w-full leading-loose font-Secundary w-full pb-10 ">
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
