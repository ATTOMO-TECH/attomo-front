import { useState, useEffect } from 'react';
import BlockSection from '../../components/block/block';
import ButtonShare from '../../components/button/BtnShare';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import SelectedUs from '../../components/section/selectedUs';
import Nav from '../../components/nav/nav';
import OneProject from '../../components/section/onlyProject';
import ListUs from '../../components/section/us';
import MainTitle from '../../components/Text/mainTitle';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from '../../styles/styles';
import { Props } from '../types';

function Us({ locale }: Props) {
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
        <Styles.CenterUs>
          <Styles.ScreenWS>
            {translate.us.map((values) => (
              <Styles.BlockDiv key={values.Text}>
                <MainTitle size="lg:text-4xl md:text-3xl text-xl lg:pt-24 lg:pr-0 lg:pb-24 md:pb-12 pb-6 w-full md:pt-36  ">
                  {values.Text}.
                  <br />
                  {values.Subtext}
                </MainTitle>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.CenterUs>
        <OneProject data={translate.projectUs[0]} />
        <Styles.Center>
          <Styles.BlockUs>
            <ListUs
              titleValuesUr={translate.titleValuesUr}
              valuesUs={translate.valuesUs}
            />
            <SelectedUs
              text={translate.selectedUs[0].Subtext}
              link={
                locale === 'en' ? VALUESNAV_ENG[1].Url : VALUESNAV_ESP[1].Url
              }
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
              link={
                locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url
              }
            />
          ))}
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Us;
