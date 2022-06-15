import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Background from '../components/animations/background';
import ButtonShare from '../components/button/BtnShare';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Work from '../components/section/work';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { useUseAllCareer } from '../domain/useCareers';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';
import { Metadata } from '../components/head/metadata';
import { useAScreen } from '../domain/useScreensMetadata';
import { handlers } from '../hook/longPress';

function Carrers() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.CAREERS,
    locale || 'es',
  );

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useUseAllCareer(locale || 'es');
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();

  if (isLoading || screenIsLoading) {
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
            {translate.workUs.map((value) => (
              <Styles.BlockDiv key={`${value.Text}-${value.Subtext}`}>
                <Title size="lg:text-5xl md:text-3xl text-2xl lg:pr-0 lg:pb-4 md:pb-12 pb-6 w-4/6 lg:w-3/6  pt-12 ">
                  {value.Text}
                </Title>
                <Styles.FlexEnd>
                  <Subtext size="lg:w-3/6 lg:text-left pt-3 md:pt-0  ">
                    {value.Subtext}
                  </Subtext>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.CenterUs>
        <Styles.Center>
          <Title size="text-xl  pb-8 pt-24">{translate.offerWork}</Title>
          <Work works={data?.data} />
        </Styles.Center>
        {translate.contactUsWork.map((value) => (
          <Styles.CenterMargin key={value.Text}>
            <Link href="/contacto" passHref>
              <a className="w-12" href="/contacto" {...handlers('/contacto')}>
                <Title size="lg:text-xl w-4/6 lg:w-3/6 cursor-pointer">
                  {value.Text}
                </Title>
              </a>
            </Link>
            <Subtext size=" text-2xl font-Primary"> </Subtext>
            <Subtext size=" text-sm lg:w-3/6 font-PrimarySerif py-5">
              {value.Subtext}
            </Subtext>
            <Styles.BtnLimit>
              <Link href="/contacto" passHref>
                <a
                  href="/contacto"
                  className="w-12 "
                  {...handlers('/contacto')}>
                  <IconAnimate text={value.Button} mode />
                </a>
              </Link>
            </Styles.BtnLimit>
          </Styles.CenterMargin>
        ))}

        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Carrers;
