import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import ArticlesScroll from '../../components/slider/article/slider';
import BlockSection from '../../components/block/block';
import { NEWS } from '../../const/constGlobal';
import DetailsCases from '../../components/section/cases/details';
import { useAPost } from '../../domain/useBlogDetails';

interface Props {
  mode: boolean;
}

function Cases({ mode }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const { data, isLoading } = useAPost(Number(slug));
  if (isLoading) {
    return <>...Cargando</>;
  }

  return (
    <>
      <Styles.Body
        ismode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} isOpen={isOpen} />
        </Styles.Margin>
        {/* <Styles.Center>
          <Styles.Center>
            <BreadCrumbs
              Author={data.attributes.title}
              Date={data.attributes.publishedAt}
            />
            <Styles.TitularText>
              {data.data.attributes.title}
            </Styles.TitularText>
          </Styles.Center>
        </Styles.Center> */}
        {/*  <Image src={ '/'} width={950} height={500} /> */}
        <Styles.Center>
          <DetailsCases data={data.data.attributes.title} />
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
