import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import rehypeRaw from 'rehype-raw';
import IconAnimate from '../../components/button/icon';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import Title from '../../components/Text/title';
import Footer from '../../components/footer/footer';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { ContainerLegal, Styles } from '../../styles/styles';
import { Props } from '../types';

function Privacidad({ locale, data }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));
  const router = useRouter();
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

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

  return (
    <>
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
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
              {data[0].attributes.content}
            </ContainerLegal>
          </Styles.SectionTextLegal>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Privacidad;
