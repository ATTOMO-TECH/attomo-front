import { useState, useEffect } from 'react';
import ButtonShare from '../../components/button/BtnShare';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import Work from '../../components/section/work';
import MainTitle from '../../components/Text/mainTitle';
import Title from '../../components/Text/title';
import ParagraphText from '../../components/Text/paragraphText';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from '../../styles/styles';
import BlocKnow from '../../components/block/blockKnowYou';
import { Props } from '../types';

function Carrers({ data, locale }: Props) {
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
        <Styles.CenterUs>
          <Styles.ScreenWS>
            {translate.workUs.map((value) => (
              <Styles.BlockDiv key={`${value.Text}-${value.Subtext}`}>
                <MainTitle size="lg:text-5xl md:text-3xl text-2xl lg:pr-0 lg:pb-4 md:pb-12 pb-6 w-4/6 lg:w-3/6  pt-12 ">
                  {value.Text}
                </MainTitle>
                <Styles.FlexEnd>
                  <ParagraphText size="lg:w-3/6 lg:text-left pt-3 md:pt-0  ">
                    {value.Subtext}
                  </ParagraphText>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.CenterUs>
        <Styles.Center>
          <Title size="text-xl  pb-8 pt-24">{translate.offerWork}</Title>
          <Work works={data} apply={translate.Apply} />
        </Styles.Center>
        {translate.contactUsWork.map((value) => (
          <BlocKnow value={value} />
        ))}
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Carrers;
