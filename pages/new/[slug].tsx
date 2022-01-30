import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
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
import { BLOG, NEWS } from '../../const/constGlobal';

interface Props {
  mode: boolean;
}

function New({ mode }: Props) {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const router = useRouter();

  const currentBlog = BLOG.filter((blog) => blog.Tag === router.query.slug)[0];

  return (
    <>
      <Styles.Body
        ismode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} isOpen={isOpen} />
        </Styles.Margin>
        <Back link="/news">Volver a noticias</Back>
        <Styles.Center>
          <Styles.AlingCasesNoP>
            <HeaderCases
              category={currentBlog.Topic}
              title={currentBlog.Text}
              paragraph={currentBlog.SubText}
              image={currentBlog.Pic}
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
export default New;
