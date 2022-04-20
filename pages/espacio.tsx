import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
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
import { servicesAnimations } from '../components/animations/animations';
import { BGSPACE } from '../const/constGlobal';
import EspacioArticle from '../components/slider/espacio/slider';
import useDeviceSize from '../hook/size';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';
import RenderLoading from '../components/loading/loading';

function Space() {
  const [shouldShowActions] = useState(false);
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.SPACE,
    locale || 'es',
  );

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();
  const [width] = useDeviceSize();
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
      <Background />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Styles.Center>
            <Styles.ScreenWS>
              {translate.spaceAttomo.map((values) => (
                <Styles.BlockDiv>
                  <Title size="leading-relaxed lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl w-3/6 md:w-full ">
                    {values.Text}
                  </Title>
                  <Styles.FlexEnd>
                    <Subtext size="lg:text-sm sm:text-lg text-sm font-regular lg:font-PrimarySerif font-Secundary  tracking-wide leadiang-loose lg:w-3/6 pb-48">
                      {values.Subtext}
                    </Subtext>
                  </Styles.FlexEnd>
                </Styles.BlockDiv>
              ))}
            </Styles.ScreenWS>
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
            <EspacioArticle />
          )}
        </Styles.Center>
        <Styles.Center id="reserva">
          <FormReserver />
        </Styles.Center>
        <Styles.Center>
          <Styles.BlockAddres>
            <Styles.BreakLine />
            <Title size="text-2xl  lg:pr-10 pt-12 ">
              {translate.spaceAttomoFooter}
            </Title>
            <Styles.BlockAddresMap>
              <Subtext size="text-regular w-full leading-loose font-Secundary w-full pb-10 ">
                Calle del Monte Esquinza, 8-Bajo Izquierda <br />
                28010 Madrid
              </Subtext>
              <MapsBlock />
            </Styles.BlockAddresMap>
          </Styles.BlockAddres>
        </Styles.Center>
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions"
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 50,
            duration: 2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '50%' }}>
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
        </motion.div>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Space;
