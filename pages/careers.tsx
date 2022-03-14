import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import ButtonShare from '../components/button/BtnShare';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import HeroFooter from '../components/hero/heroFooter';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Work from '../components/section/work';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllCareer } from '../domain/useCareers';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Carrers() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useUseAllCareer(locale || 'es');
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

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
          <Styles.Center>
            <Styles.ScreenMid>
              {translate.workUs.map((value) => (
                <Styles.BlockDiv>
                  <Title size="text-5xl lg:pt-20 lg:pr-0 pb-12 lg:w-3/6 pt-20 ">
                    {value.Text}
                  </Title>
                  <Styles.FlexEnd>
                    <Subtext size=" text-lg lg:text-base lg:w-3/6  lg:text-left">
                      {value.Subtext}
                    </Subtext>
                  </Styles.FlexEnd>
                </Styles.BlockDiv>
              ))}
            </Styles.ScreenMid>
          </Styles.Center>
        </Styles.Center>
        <Styles.Center>
          <Subtext size=" text-2xl pb-8">{translate.offerWork} </Subtext>
          <Work works={data.data} />
        </Styles.Center>
        {translate.contactUsWork.map((value) => (
          <Styles.Center>
            <Subtext size=" text-2xl pt-12">{value.Text} </Subtext>
            <Subtext size=" text-sm w-3/6 font-PrimarySerif py-5">
              {value.Text}
            </Subtext>
            <Link href="/">
              <div className="lg:w-2/6">
                <IconAnimate text={value.Button} mode />
              </div>
            </Link>
          </Styles.Center>
        ))}

        <Styles.CenterFull>
          <HeroFooter text="Construyamos juntos el futuro digital de las organizaciones" />
        </Styles.CenterFull>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Carrers;
