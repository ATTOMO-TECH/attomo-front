import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import MainTitle from '../../components/Text/mainTitle';
import Title from '../../components/Text/title';
import ParagraphText from '../../components/Text/paragraphText';
import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from '../../styles/styles';
import BlockSection from '../../components/block/block';
import SelectedClients from '../../components/section/selectedclientes';
import FormReserver from '../../components/form/formReserver';
import ButtonShare from '../../components/button/BtnShare';
import MapsBlock from '../../components/maps/maps';
import { getLocale } from '../../public/locales/getLocale';
import { BGSPACE, VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import { Props } from '../types';
import useDeviceSize from '../../hook/size';

function Space({ locale }: Props) {
  const [width] = useDeviceSize();
  const SliderSSR = dynamic(
    () =>
      import('../../components/slider/espacio/slider').then(
        (module: any) => module.default,
      ),
    { ssr: false },
  );

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
          <Styles.ScreenWS>
            {translate.spaceAttomo.map((services) => (
              <Styles.BlockDiv key={services.Text}>
                <MainTitle size="lg:pr-10 lg:text-4xl md:text-3xl pb-2 text-2xl">
                  {services.Text}
                </MainTitle>
                <Styles.FlexEnd>
                  <ParagraphText size="lg:w-2/6 pt-10">
                    {services.Subtext}
                  </ParagraphText>
                </Styles.FlexEnd>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.Center>
        <Styles.HeroEspace />
        <Styles.Center>
          <Styles.BlockSelected>
            {translate.bookingAttomo.map((values) => (
              <SelectedClients
                key={values.Text}
                text={values.Subtext}
                btn={values.Button}
                link={
                  locale === 'en'
                    ? `${VALUESNAV_ENG[6].Url}#reserva`
                    : `${VALUESNAV_ESP[6].Url}#reserva`
                }
                textPrimary={values.Text}
              />
            ))}
          </Styles.BlockSelected>
          {width > 768 ? (
            <Styles.SectionImg>
              {BGSPACE.map((imageSpace: any) => (
                <Styles.BlockImg
                  className={imageSpace.img}
                  key={imageSpace.id}
                />
              ))}
            </Styles.SectionImg>
          ) : (
            <SliderSSR />
          )}
        </Styles.Center>
        <Styles.Center id="reserva">
          <FormReserver locale={locale} />
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
export default Space;
