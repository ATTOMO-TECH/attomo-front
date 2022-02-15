import { useState } from 'react';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import FilterMenu from '../components/filter/filter';
import Footer from '../components/footer/footer';
import HeroCase from '../components/hero/heroCase';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllCases } from '../domain/useCasesDetails';
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
  const { data, isLoading } = useUseAllCases();
  if (isLoading) {
    return <>...Cargando</>;
  }

  return (
    <>
      <FilterMenu isOpen={isOpenFilter} toggle={toggleFilter} />
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <ButtonShare />
        <HeroCase toggle={toggleFilter} />
        <Styles.BlockSections>
          <SectionProjects
            Array={data.data}
            shouldShowActions={undefined}
            servicesAnimations={undefined}
          />
        </Styles.BlockSections>
        <Styles.CenterFlex>
          <BlockSection
            text="¿Tienes un proyecto?"
            button="Contacta con nosotros"
            text2=""
            button2=""
            mode
            link="/contacto"
          />
        </Styles.CenterFlex>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default Cases;
