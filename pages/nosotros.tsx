import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import OneProject from '../components/section/onlyProject';
import SelectedClients from '../components/section/selectedclientes';
import ListUs from '../components/section/us';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
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
      <BgComponent />
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Styles.Center>
            <Styles.ScreenMid>
              {translate.us.map((values) => (
                <Styles.BlockDiv>
                  <Title size="text-5xl lg:pt-24 lg:pr-0 pb-12 lg:w-5/6 pt-20 ">
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
        <OneProject data={translate.projectUs[0]} />
        <Styles.Center>
          <Styles.BlockUs>
            <ListUs />
            <SelectedClients
              text={translate.selectedUs[0].Subtext}
              btn={translate.selectedUs[0].Button}
              link="/contacto"
              textPrimary={translate.selectedUs[0].Text}
            />
          </Styles.BlockUs>
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
export default Us;
