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
import { useUseAPrivacy } from '../domain/usePolicy';
import { getLocale } from '../public/locales/getLocale';
import { ContainerLegal, Styles } from '../styles/styles';

function Privacidad() {
  const router = useRouter();
  let { locale } = router;
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
  const translate = getLocale();

  return (
    <>
      <BgComponent />
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Link href="../">
            <div className="w-full py-10">
              <IconAnimate text="Volver" mode />
            </div>
          </Link>
          <section className="pb-48">
            <Title size="text-5xl ">{translate.policy}</Title>
            <ContainerLegal>{data.data[0].attributes.content}</ContainerLegal>
          </section>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Privacidad;
