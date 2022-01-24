import { useState } from 'react';
import BlockSection from '../components/block/block';
import BlockBlog from '../components/blog/blog';

import Footer from '../components/footer/footer';

import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';

import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function Blog() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo />
        <Styles.Margin>
          <Nav toggle={toggle} logo />
        </Styles.Margin>
        <Styles.Center>
          <Styles.Screen>
            <Title size="text-5xl lg:pt-48 lg:pr-24 pb-24 w-full pt-20">
              Ofrecemos información valiosa para ayudar a las empresas a crear
              su estrategia de negocio
            </Title>

            <div className="text-primary flex flex-col lg:flex-row items-baseline justify-center lg:w-9/12 ">
              <Title size="text-xl lg:pt-48 lg:py-24 py-10  lg:w-3/6 w-full">
                Entérate de las novedades del sector:
              </Title>
              <div className="lg:w-3/6 w-full">
                <Styles.Input
                  type="text"
                  placeholder="Escribe tu correo electronico "
                  name="newsletter"
                />
              </div>
            </div>
          </Styles.Screen>
        </Styles.Center>

        <BlockBlog />
        <div className="flex  text-primary font-Primary underline text-center justify-center py-24 font-extralight text-xl ">
          <span className="hover:opacity-75 cursor-pointer ease-out duration-300">
            Ver más noticias
          </span>
        </div>
        <Styles.CenterFlex>
          <BlockSection
            text="¿Tienes un proyecto?"
            button="Contacta con nosotros"
            text2=""
            button2=""
          />
        </Styles.CenterFlex>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Blog;
