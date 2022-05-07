import { useRouter } from 'next/router';
import { useState } from 'react';
import Background from '../components/animations/background';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import Collapse from '../components/collapse/collapse';
import Footer from '../components/footer/footer';
import { Metadata } from '../components/head/metadata';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import ArticlesScroll from '../components/slider/article/slider';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { useAScreen } from '../domain/useScreensMetadata';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Services() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.HOME,
    locale || 'es',
  );
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
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
          <Styles.ScreenWS>
            {translate.services.map((services) => (
              <Styles.BlockDiv>
                <Title size="lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl">
                  {services.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size="lg:w-2/6 pt-10  absolute">
                    {services.Subtext}
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
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
            <ArticlesScroll mode filter="" id={0} />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
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
export default Services;
