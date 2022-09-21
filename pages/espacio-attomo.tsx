import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { Styles } from '../styles/styles';
import BlockSection from '../components/block/block';
import SelectedClients from '../components/section/selectedclientes';
import FormReserver from '../components/form/formReserver';
import ButtonShare from '../components/button/BtnShare';
import MapsBlock from '../components/maps/maps';
import Background from '../components/animations/background';
import { getLocale } from '../public/locales/getLocale';
import { BGSPACE } from '../const/constGlobal';
import useDeviceSize from '../hook/size';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';
import RenderLoading from '../components/loading/loading';

function Space() {
  const router = useRouter();
  const SliderSSR = dynamic(
    () =>
      import('../components/slider/espacio/slider').then(
        (module: any) => module.default,
      ),
    { ssr: false },
  );
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const [translate, setTranslate] = useState(getLocale('es'));

  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);

  const [width] = useDeviceSize();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.SPACE,
    locale || 'es',
  );

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
          <Styles.ScreenWS>
            {translate.spaceAttomo.map((services) => (
              <Styles.BlockDiv key={services.Text}>
                <Title size="lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl">
                  {services.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size="lg:w-2/6 pt-10">{services.Subtext}</Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.Center>
        <Styles.HeroEspace />
        <Styles.Center>
          <Styles.BlockSelected>
            {translate.bookingAttomo.map((values) => (
              <SelectedClients
                key={values.Text}
                text={values.Subtext}
                btn={values.Button}
                link="/espacio-attomo#reserva"
                textPrimary={values.Text}
              />
            ))}
          </Styles.BlockSelected>
          {width > 768 ? (
            <Styles.SectionImg>
              {BGSPACE.map((imageSpace: any) => (
                <Styles.BlockImg
                  className={imageSpace.img}
                  key={imageSpace.id}
                />
              ))}
            </Styles.SectionImg>
          ) : (
            <SliderSSR />
          )}
        </Styles.Center>
        <Styles.Center id="reserva">
          <FormReserver translate={translate} />
        </Styles.Center>
        <Styles.CenterMargin>
          <Title size="text-2xl  lg:pr-10 "> {translate.whereUs}</Title>
          <Styles.BlockAddresMap>
            <Subtext size="text-regular w-full leading-loose font-Secundary w-full pb-10 ">
              Calle del Monte Esquinza, 8-Bajo Izquierda <br />
              28010 Madrid
            </Subtext>
            <MapsBlock />
          </Styles.BlockAddresMap>
        </Styles.CenterMargin>
        <Styles.Center>
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
        </Styles.Center>

        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Space;
