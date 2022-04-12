import Head from 'next/head';
import { useState } from 'react';
import Background from '../components/animations/background';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import OneProject from '../components/section/onlyProject';
import SelectedUs from '../components/section/selectedUs';
import ListUs from '../components/section/us';
import Title from '../components/Text/title';
import Subtext from '../components/Text/subText';
import { BUTTON_ACTIVE } from '../const/const';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Us() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();
  return (
    <>
      <Head>
        <title>About us - ATTOMO DIGITAL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Background />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.CenterUs>
          <Styles.ScreenWS>
            {translate.us.map((values) => (
              <Styles.BlockDiv>
                <Title size="lg:text-4xl md:text-3xl text-2xl lg:pt-24 lg:pr-0 lg:pb-12 md:pb-12 pb-6 w-full md:pt-36 sm:text-justify  ">
                  {values.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size=" lg:w-3/6 lg:text-justify pt-0 md:pt-0 tracking-wild leading-loose pb-24">
                    {values.Subtext}
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.CenterUs>
        <OneProject data={translate.projectUs[0]} />
        <Styles.Center>
          <Styles.BlockUs>
            <ListUs />
            <SelectedUs
              text={translate.selectedUs[0].Subtext}
              // btn={translate.selectedUs[0].Button}
              link="/contacto"
              textPrimary={translate.selectedUs[0].Text}
            />
          </Styles.BlockUs>
        </Styles.Center>
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
export default Us;
