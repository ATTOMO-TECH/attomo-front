import { useState } from 'react';
import BlockSection from '../components/block/block';
import BlockBlog from '../components/blog/blog';

import Footer from '../components/footer/footer';

import InputNew from '../components/input/inputNews';

import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';

import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { Styles } from '../styles/styles';

function News() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const OptionsSelect: {
    Option: string;
  }[] = [
    {
      Option: 'Estrategia1',
    },
    {
      Option: 'Estrategia2',
    },
    {
      Option: 'Estrategia3',
    },
  ];
  return (
    <>
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenMid>
            <Title size="text-5xl lg:pt-48 lg:pr-24 pb-24 w-full pt-20">
              Ofrecemos información valiosa para ayudar a las empresas a crear
              su estrategia de negocio
            </Title>
            <Styles.BlockInputSend>
              <Styles.SectionInput>
                <Title size="text-xl lg:py-4 w-full py-6">
                  Entérate de las novedades del sector:
                </Title>
                <Styles.BlockFullInput>
                  <InputNew />
                </Styles.BlockFullInput>
              </Styles.SectionInput>
            </Styles.BlockInputSend>
          </Styles.ScreenMid>
        </Styles.Center>
        <div className="lg:pt-48 flex w-full m-auto lg:justify-center justify-start pl-8 lg:pl-0 pt-36 pb-16 ">
          <Title size="text-lg lg:py-4 font-PrimarySerif">
            Filtrar noticias por
          </Title>
          <Styles.Select name="select">
            {OptionsSelect.map((options) => (
              <option value={options.Option} key={options.Option}>
                {options.Option}
              </option>
            ))}
          </Styles.Select>
        </div>
        <BlockBlog />
        <Styles.CenterFlex>
          <BlockSection
            text="¿Tienes un proyecto?"
            button="Contacta con nosotros"
            text2=""
            button2=""
            mode
          />
        </Styles.CenterFlex>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default News;
