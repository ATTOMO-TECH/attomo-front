import { useState } from 'react';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import BlockBlog from '../components/blog/blog';
import Footer from '../components/footer/footer';
import InputNew from '../components/input/inputNews';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllPost } from '../domain/useBlogDetails';
import { Styles } from '../styles/styles';

function News() {
  const { data, isLoading } = useUseAllPost();

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
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <BgComponent />
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>

        <Styles.Center>
          <Styles.ScreenMid>
            <Styles.BlockDiv>
              <Title size="text-5xl lg:pt-2 lg:pr-10 pb-24 w-full pt-20 lg:w-5/6">
                Ofrecemos información valiosa para ayudar a las empresas a crear
                su estrategia de negocio
              </Title>

              <Styles.BlockInputSend>
                <Title size="text-xl lg:py-4 lg:w-auto w-full py-6 lg:pr-5">
                  Entérate de las novedades del sector:
                </Title>
                <Styles.BlockFullInput>
                  <InputNew />
                </Styles.BlockFullInput>
              </Styles.BlockInputSend>
            </Styles.BlockDiv>
          </Styles.ScreenMid>
        </Styles.Center>

        <Styles.BlockTrends>
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
        </Styles.BlockTrends>
        <BlockBlog dataBlog={data.data} />
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
export default News;
