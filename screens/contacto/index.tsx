import { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import RenderForm from '../../components/form/renderForm';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import MainTitle from '../../components/Text/mainTitle';
import Title from '../../components/Text/title';
import ParagraphText from '../../components/Text/paragraphText';
import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from '../../styles/styles';
import ButtonShare from '../../components/button/BtnShare';
import MapsBlock from '../../components/maps/maps';
import { getLocale } from '../../public/locales/getLocale';
import { Props } from '../types';

function Contact({ locale }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));

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
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <MainTitle size="lg:text-4xl md:text-3xl text-2xl lg:pr-0 lg:py-36 md:pb-12 py-36 lg:w-full  w-4/6  ">
            {translate.contactTitle}
          </MainTitle>
          <RenderForm />
        </Styles.Center>
        <Styles.CenterMargin>
          <Title size="text-2xl  lg:pr-10 "> {translate.whereUs}</Title>
          <Styles.BlockAddresMap>
            <ParagraphText size="text-regular w-full leading-loose font-Secundary w-full pb-10 ">
              Calle del Monte Esquinza, 8-Bajo Izquierda <br />
              28010 Madrid
            </ParagraphText>
            {typeof window !== 'undefined' && <MapsBlock />}
          </Styles.BlockAddresMap>
        </Styles.CenterMargin>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Contact;
