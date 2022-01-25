import { useState } from 'react';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Carrers() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} />
        <Styles.Center>
          <Nav toggle={toggle} logo={false} />
        </Styles.Center>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Carrers;
