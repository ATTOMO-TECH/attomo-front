import { useState } from 'react';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs';
import HeaderCases from '../../components/section/cases/header';
import Back from '../../components/button/back';
import BodyCases from '../../components/section/cases/bodyCase';
import ArticlesScroll from '../../components/slider/article/slider';
import BlockSection from '../../components/block/block';
import { NEWS } from '../../const/constGlobal';

interface Props {
  mode: boolean;
}

function Cases({ mode }: Props) {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Styles.Body
        ismode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} isOpen={isOpen} />
        </Styles.Margin>
        <Back link="/casosdeexito">Volver a casos</Back>
        <Styles.Center>
          <Styles.AlingCasesNoP>
            <HeaderCases
              category="Estrategia"
              title="Dictum libero pellentesque faucibus tristique ut"
              paragraph="Eu tincidunt etiam mollis cum sed eu. Tempor, ornare integer enim vulputate. In quis nibh semper semper magna vel faucibus integer augue. Magna pellentesque amet risus pretium lorem. Id lorem dolor ornare sit vestibulum nibh congue nisi pellentesque."
            />
            <BreadCrumbs Author="Autor" Date="Fecha" />
            <BodyCases />
          </Styles.AlingCasesNoP>
          <Styles.TextSubSection>Podría interesarte</Styles.TextSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll mode={false} array={NEWS} />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <Styles.Center>
          <Styles.BreakLine />
          <Styles.CenterFlex>
            <BlockSection
              text="¿Tienes un proyecto?"
              button="Contacta con nosotros"
              text2=""
              button2=""
              mode={false}
            />
          </Styles.CenterFlex>
        </Styles.Center>
        <Footer />
      </Styles.Body>
    </>
  );
}
export default Cases;
