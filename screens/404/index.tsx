import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import IconAnimate from '../../components/button/icon';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import Title from '../../components/Text/title';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from '../../styles/styles';
import { Props } from '../types';

function ErrorView({ locale }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));
  const router = useRouter();
  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

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
              onTouchStart={() => router.back()}>
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
export default ErrorView;
