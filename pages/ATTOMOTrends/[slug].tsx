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
import { NEWS } from '../../const/constGlobal';
import { useAPost } from '../../domain/useBlogDetails';
import RenderLoading from '../../components/loading/loading';
import { getLocale } from '../../public/locales/getLocale';

interface Props {
  mode: boolean;
}

function New({ mode }: Props) {
  const translate = getLocale();
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query;
  const { data, isLoading } = useAPost(Number(slug));
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} isOpen={isOpen} />
        </Styles.Margin>
        <Back link="/ATTOMOTrends">Volver a noticias</Back>
        <Styles.Center>
          <Styles.AlingCasesNoP>
            <BreadCrumbs Author="Autor" Date="Fecha" />
            <HeaderCases
              category={data?.data.attributes.blog_tags.data[0].attributes.name}
              title={data?.data.attributes.title}
              paragraph=""
              image={data?.data.attributes.coverImage.data.attributes?.url}
            />

            <BodyCases data={data?.data.attributes.content} />
          </Styles.AlingCasesNoP>
          <Styles.TextSubSection>{translate.interested}</Styles.TextSubSection>
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
              link="/contacto"
            />
          </Styles.CenterFlex>
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default New;
