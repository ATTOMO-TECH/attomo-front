import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import RenderForm from '../components/form/renderForm';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Subtext from '../components/Text/subText';
import Title from '../components/Text/title';
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
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Title size="text-5xl lg:pt-4 lg:pr-10 pb-24 w-full pt-20">
            Contacta con nosotros
          </Title>
          <RenderForm />
        </Styles.Center>
        <Styles.Center>
          <Title size="text-2xl  lg:pr-10 ">Dónde encontrarnos</Title>

          <div className="lg:px-48 lg:my-24 my-12 m-auto ">
            <span className="hidden lg:block">
              <Styles.BreakLine />
            </span>
            <Title size="text-2xl lg:pr-10 py-5 ">Madrid</Title>
            <Subtext size="lg:text-xl text-sm w-full pb-10 font-PrimarySerif">
              Calle del Monte Esquinza, 8, 28010 Madrid
            </Subtext>
            <Link href="/https://www.google.es/maps/?hl=es">
              <a
                target="_blank"
                href="https://www.google.es/maps/?hl=es"
                rel="noreferrer">
                <Image src="/Map_.jpg" width={650} height={350} alt="Maps" />
              </a>
            </Link>
          </div>
        </Styles.Center>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Contact;
