import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Footer from '../../../components/footer/footerWhite';
import MenuWhite from '../../../components/nav/menuWhite';
import Nav from '../../../components/nav/navWhite';
import { BUTTON_ACTIVE } from '../../../const/const';
import { darkTheme, lightTheme, Styles } from '../../../styles/styles';
import HeaderCases from '../../../components/section/cases/header';
import Back from '../../../components/button/back';
import BodyCases from '../../../components/section/cases/bodyCase';
import BlockSectionWhite from '../../../components/block/block';
import { getLocale } from '../../../public/locales/getLocale';
import ArticlesScroll from '../../../components/slider/article/slider';
import { Props } from '../../types';

function New({ mode, data, locale }: Props) {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale(locale));

  useEffect(() => {
    console.log('tendencias-detail');
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const { slug }: any = router.query;
  let id = 0;
  if (slug) {
    const arrSlug = slug.split('-');
    id = Number(arrSlug[arrSlug.length - 1]);
  }
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <MenuWhite isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} bgFull isOpen={isOpen} />
        </Styles.Margin>
        <Back>{translate.backToNews}</Back>
        <Styles.Center>
          <Styles.AlingCasesNoP>
            <HeaderCases
              category={data?.attributes.blog_tags.data[0].attributes.name}
              title={data?.attributes.title}
              paragraph=""
              image={data?.attributes.coverImage.data.attributes?.url}
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
              filter={data?.attributes.blog_tags.data[0].attributes.name}
              id={Number(id)}
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
