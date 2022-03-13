import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Collapse from '../components/collapse/collapse';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import ArticlesScroll from '../components/slider/article/slider';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { ARTICLES } from '../const/constGlobal';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Services() {
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
          <Styles.ScreenMid>
            {translate.services.map((services) => (
              <Styles.BlockDiv>
                <Title size="lg:text-4xl text-3xl lg:pt-24 lg:pr-0 lg:pb-24 pb-12 w-full pt-36  ">
                  {services.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size=" text-lg lg:text-base lg:w-2/6  lg:text-left font-Secundary">
                    {services.Subtext}
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenMid>
        </Styles.Center>
        <Styles.Center>
          <Styles.SpaceCollapse>
            <Collapse />
          </Styles.SpaceCollapse>
        </Styles.Center>
        <Styles.Center>
          <Styles.TitleSubSection>{translate.project}</Styles.TitleSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll mode array={ARTICLES} />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
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
export default Services;
