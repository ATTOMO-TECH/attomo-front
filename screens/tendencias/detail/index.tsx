import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Footer from '../../../components/footer/footerWhite';
import MenuWhite from '../../../components/nav/menuWhite';
import Nav from '../../../components/nav/navWhite';
import { BUTTON_ACTIVE } from '../../../const/const';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../../const/constGlobal';
import { darkTheme, lightTheme, Styles } from '../../../styles/styles';
import HeaderCases from '../../../components/section/cases/header';
// import Back from '../../../components/button/back';
import BodyCases from '../../../components/section/cases/bodyCase';
import BlockSectionWhite from '../../../components/block/block';
import { getLocale } from '../../../public/locales/getLocale';
import ArticlesScroll from '../../../components/slider/article/slider';
import { Props } from '../../types';
import { Button } from '../../../components/button/style';

function New({ mode, data, locale, relatedPost }: Props) {
  const router = useRouter();
  const { slug }: any = router.query;
  const [translate, setTranslate] = useState(getLocale(locale));

  let id = 0;
  if (slug) {
    const arrSlug = slug.split('-');
    id = Number(arrSlug[arrSlug.length - 1]);
  }
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  return (
    <>
      <Styles.Body
        mode={isOpen ? BUTTON_ACTIVE.ON : ''}
        theme={mode === true ? lightTheme : darkTheme}>
        <MenuWhite isOpen={isOpen} toggle={toggle} logo={false} mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode={false} bgFull isOpen={isOpen} />
        </Styles.Margin>
        <>
          <Button.SectionBack
            onClick={() =>
              router.locale === 'es'
                ? router.push(`${VALUESNAV_ESP[3].Url}`)
                : router.push(`${VALUESNAV_ENG[3].Url}`)
            }
            onTouchEnd={() =>
              router.locale === 'es'
                ? router.push(`${VALUESNAV_ESP[3].Url}`)
                : router.push(`${VALUESNAV_ENG[3].Url}`)
            }>
            <Button.BlockBack>
              <Image
                src="/icon/arrowBack.svg"
                width={30}
                height={20}
                alt="back"
              />
              <Button.TextBack>{translate.backToNews}</Button.TextBack>
            </Button.BlockBack>
          </Button.SectionBack>
        </>
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
              relatedPost={relatedPost}
              locale={locale}
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
              link={
                locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url
              }
            />
          ))}
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default New;
