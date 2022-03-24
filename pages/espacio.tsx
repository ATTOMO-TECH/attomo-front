import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Head from 'next/head';
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
import FormReserver from '../components/form/formReserver';
import ButtonShare from '../components/button/BtnShare';
import MapsBlock from '../components/maps/maps';
import BgComponent from '../components/animations/bg';
import { getLocale } from '../public/locales/getLocale';
import { servicesAnimations } from '../components/animations/animations';
import { BGSPACE } from '../const/constGlobal';
import EspacioArticle from '../components/slider/espacio/slider';
import useDeviceSize from '../hook/size';

function Space() {
  const [shouldShowActions] = useState(false);
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
  const [width] = useDeviceSize();
  return (
    <>
      <Head>
        <title>Espacio - ATTOMO ESTUDIO</title>
      </Head>
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
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
                    <Subtext size="text-regular w-full leading-loose font-Secundary lg:w-3/6  ">
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
          {translate.formBooking.map((values) => (
            <Styles.ContainerFull>
              <Title size="lg:text-5xl text-3xl lg:pt-36 w-full text-center pt-20 leading-relaxed ">
                {values.Text}
              </Title>
              <Title size="text-regular lg:pt-3 w-full text-center text-regular w-full leading-loose font-Secundary  pb-8">
                {values.Subtext}
              </Title>
              <FormReserver />
            </Styles.ContainerFull>
          ))}
        </Styles.Center>
        <Styles.Center>
          <Styles.BlockAddres>
            <Styles.BreakLine />
            <Title size="text-2xl  lg:pr-10 ">
              {translate.spaceAttomoFooter}
            </Title>

            <Subtext size="text-regular w-full leading-loose font-Secundary w-full pb-10 ">
              Calle del Monte Esquinza, 8-Bajo Izquierda
              <br />
              28010 Madrid
            </Subtext>
            <MapsBlock />
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
