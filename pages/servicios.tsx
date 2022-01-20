import { useState } from 'react';
import Collapse from '../components/collapse/collapse';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Services() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} />
        <div className="m-auto">
          <Nav toggle={toggle} />
        </div>

        <Styles.Center>
          <div className="  h-screen justify-between">
            <Title size="text-5xl lg:pt-48 lg:pr-10 pb-24 w-full">
              Combinamos ingeniería, diseño, escalabilidad e innovación para
              transformar industrias, empresas y administraciones
            </Title>
            <div className="flex justify-end">
              <Subtext size="text-base w-3/6 text-right">
                Ofrecemos cualquier servicio relacionado con la digitalización y
                la transformación digital
              </Subtext>
            </div>
          </div>
        </Styles.Center>
        <Styles.Center>
          <Collapse />
        </Styles.Center>

        <Footer />
      </Styles.Body>
    </>
  );
}
export default Services;
