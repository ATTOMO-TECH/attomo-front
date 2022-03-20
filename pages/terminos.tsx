import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import IconAnimate from '../components/button/icon';
import Footer from '../components/footer/footer';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseATerms } from '../domain/usePolicy';
import { getLocale } from '../public/locales/getLocale';
import { ContainerLegal, Styles } from '../styles/styles';

function Conditions() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/terminos/') {
    locale = 'es';
  }
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const { data, isLoading } = useUseATerms(locale || 'es');
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
  const translate = getLocale();
  return (
    <>
      <Head>
        <title>ATTOMO - Terminos y condicciones </title>
      </Head>
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.BlockButtonLegal>
            <Link href="../">
              <Styles.BlockBack>
                <IconAnimate text="Volver" mode />
              </Styles.BlockBack>
            </Link>
          </Styles.BlockButtonLegal>
          <Styles.SectionTextLegal>
            <Title size="text-3xl lg:text-5xl mb-12 ">{translate.policy}</Title>
            <ContainerLegal>{data.data[0].attributes.content}</ContainerLegal>
          </Styles.SectionTextLegal>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Conditions;
