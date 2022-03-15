import { useRouter } from 'next/router';
import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import ModalFilter from '../components/filter/filter';
import Footer from '../components/footer/footer';
import HeroCase from '../components/hero/heroCase';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllCases } from '../domain/useCasesDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function Cases() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const [date, setDate] = useState<Date[]>();
  const [topic, setTopic] = useState('');
  const handleDate = (dateValue: []) => {
    setDate(dateValue);
  };
  const handleTopic = (topicValue: string) => {
    setTopic(topicValue);
  };
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data, isLoading } = useUseAllCases(locale || 'es');

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
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <ModalFilter
          isOpen={isOpenFilter}
          toggle={toggleFilter}
          setDate={handleDate}
          setTopic={handleTopic}
        />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
        </Styles.Margin>
        {!isOpenFilter && <ButtonShare />}
        {!isOpenFilter && (
          <>
            <HeroCase
              toggle={toggleFilter}
              date={date}
              topic={topic}
              isOpen={isOpen}
            />
            <Styles.BlockSections>
              <SectionProjects
                Array={data.data}
                shouldShowActions={undefined}
                servicesAnimations={undefined}
              />
            </Styles.BlockSections>
            <Styles.CenterFlex>
              {translate.contact.map((values) => (
                <BlockSection
                  key={values.Link}
                  text={values.Text}
                  button={values.Link}
                  text2=""
                  button2=""
                  mode
                  link="/contacto"
                />
              ))}
            </Styles.CenterFlex>
            <Footer subFooter={false} />
          </>
        )}
      </Styles.Body>
    </>
  );
}
export default Cases;
