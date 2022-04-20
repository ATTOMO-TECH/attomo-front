import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Background from '../components/animations/background';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Error() {
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

  return (
    <>
      <Head>
        <title>ATTOMO ESTUDIO</title>
      </Head>
      <Background />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.BlockButtonLegal>
            <Styles.BlockBack onClick={() => router.back()}>
              <IconAnimate text={translate.back} mode />
            </Styles.BlockBack>
          </Styles.BlockButtonLegal>
          <Title size="text-3xl lg:text-5xl mb-12 text-center">{404}</Title>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Error;
