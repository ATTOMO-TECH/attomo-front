import { useState } from 'react';
import Footer from '../components/footer/footer';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Contact() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo={false} mode isOpen={isOpen} />
        </Styles.Margin>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Contact;
