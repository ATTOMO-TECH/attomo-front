import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Background from '../components/animations/background';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Footer from '../components/footer/footer';
import { Metadata } from '../components/head/metadata';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import SelectedUs from '../components/section/selectedUs';
import Nav from '../components/nav/nav';
import OneProject from '../components/section/onlyProject';
import ListUs from '../components/section/us';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { useAScreen } from '../domain/useScreensMetadata';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Us() {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));

  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);

  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.ABOUT,
    locale || 'es',
  );
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

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
        <Styles.CenterUs>
          <Styles.ScreenWS>
            {translate.us.map((values) => (
              <Styles.BlockDiv key={values.Text}>
                <Title size="lg:text-4xl md:text-3xl text-xl lg:pt-24 lg:pr-0 lg:pb-24 md:pb-12 pb-6 w-full md:pt-36  ">
                  {values.Text}.
                  <br/>
                  {values.Subtext}
                </Title>
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
              link="/casosdeexito"
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
