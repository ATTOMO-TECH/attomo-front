import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import Footer from '../../components/footer/footerWhite';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/navWhite';
import { BUTTON_ACTIVE } from '../../const/const';
import { darkTheme, lightTheme, Styles } from '../../styles/styles';
import HeaderCases from '../../components/section/cases/header';
import Back from '../../components/button/back';
import BodyCases from '../../components/section/cases/bodyCase';
import BlockSectionWhite from '../../components/block/block';
import { useAPost } from '../../domain/useBlogDetails';
import RenderLoading from '../../components/loading/loading';
import { getLocale } from '../../public/locales/getLocale';
import ArticlesScroll from '../../components/slider/article/slider';

interface Props {
  mode: boolean;
}

function New({ mode }: Props) {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));

  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
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
      <Head>
        <title>#ATTOMOtrends - {data?.data?.attributes.title}</title>
        <meta
          name="title"
          content={`ATTOMOtrends - ${data?.data?.attributes.title}`}
        />
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        {data?.data?.attributes.metadata && (
          <meta name="description" content={data?.data?.attributes.metadata} />
        )}
        <meta name="keywords" content={data?.data?.attributes.metadata} />
        <link rel="canonical" href="https://attomo.digital" />
        <meta name="type" content="website" />
        <meta name="copyright" content="https://attomo.digital" />
        <meta name="robots" content="index" />
        <meta name="image" content="/FaviconLight.svg" />
      </Head>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <Menu isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} bgFull isOpen={isOpen} />
        </Styles.Margin>
        <Back>{translate.backToNews}</Back>
        <Styles.Center>
          <Styles.AlingCasesNoP>
            <HeaderCases
              category={data?.data.attributes.blog_tags.data[0].attributes.name}
              title={data?.data.attributes.title}
              paragraph=""
              image={data?.data.attributes.coverImage.data.attributes?.url}
            />
            <BodyCases data={data} />
          </Styles.AlingCasesNoP>
        </Styles.Center>
        <Styles.Center>
          <Styles.TextSubSection>{translate.interested}</Styles.TextSubSection>
        </Styles.Center>
        <Styles.FlexEnd>
          <Styles.AlingBlock>
            <ArticlesScroll
              mode={false}
              renderTouch={false}
              filter={data?.data.attributes.blog_tags.data[0].attributes.name}
              id={Number(slug)}
            />
          </Styles.AlingBlock>
        </Styles.FlexEnd>
        <Styles.Center>
          {translate.contact.map((values) => (
            <BlockSectionWhite
              key={values.Link}
              text={values.Text}
              button={values.Link}
              text2=""
              button2=""
              mode={false}
              link="/contacto"
            />
          ))}
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default New;
