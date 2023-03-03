import { useState, useEffect } from 'react';
import BlockSection from '../../components/block/block';
import ButtonShare from '../../components/button/BtnShare';
import Collapse from '../../components/collapse/collapse';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import ArticlesScroll from '../../components/slider/article/slider';
import MainTitle from '../../components/Text/mainTitle';
import ParagraphText from '../../components/Text/paragraphText';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from '../../styles/styles';
import { Props } from '../types';

function Services({ data, locale, relatedPost }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));

  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  return (
    <>
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <Styles.Center>
          <Styles.ScreenWS>
            {translate.services.map((services) => (
              <Styles.BlockDiv key={services.Text}>
                <MainTitle size="lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl">
                  {services.Text}
                </MainTitle>
                <Styles.FlexEnd>
                  <ParagraphText size="lg:w-2/6 pt-10  absolute">
                    {services.Subtext}
                  </ParagraphText>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.Center>
        <Styles.Center>
          <Styles.SpaceCollapse>
            <Collapse data={data} />
          </Styles.SpaceCollapse>
        </Styles.Center>
        <Styles.Center>
          <Styles.TitleSubSectionH2>
            {translate.project}
          </Styles.TitleSubSectionH2>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll
              mode
              filter=""
              id={0}
              renderTouch
              relatedPost={relatedPost}
              locale={locale}
            />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <Styles.Center>
          {translate.contact.map((values) => (
            <BlockSection
              key={values.Link}
              text={values.Text}
              button={values.Link}
              text2=""
              button2=""
              mode
              link={
                locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url
              }
            />
          ))}
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Services;
