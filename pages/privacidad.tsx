import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import rehypeRaw from 'rehype-raw';
import Background from '../components/animations/background';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAPrivacy } from '../domain/usePolicy';
import { getLocale } from '../public/locales/getLocale';
import { ContainerLegal, Styles } from '../styles/styles';

function Privacidad() {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));
  let { locale } = router;

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  if (locale === '/') {
    locale = 'es';
  }
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useUseAPrivacy(locale || 'es');
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Politica de Privacidad - ATTOMO ESTUDIO</title>
        <meta name="robots" content="noindex follow" />
      </Head>
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Background />
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.BlockButtonLegal>
            <Styles.BlockBack
              onClick={() => router.back()}
              onTouchEnd={() => router.back()}>
              <IconAnimate text={translate.back} mode />
            </Styles.BlockBack>
          </Styles.BlockButtonLegal>
          <Styles.SectionTextLegal>
            <Title size="text-3xl lg:text-5xl mb-12">{translate.policy}</Title>
            <ContainerLegal rehypePlugins={[rehypeRaw]}>
              {data.data[0].attributes.content}
            </ContainerLegal>
          </Styles.SectionTextLegal>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Privacidad;
