/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useRouter } from 'next/router';
import { fadeInUp, stagger } from '../../../components/animations/animations';
import BlockSection from '../../../components/block/block';
import ButtonShare from '../../../components/button/BtnShare';
import FilterDetails from '../../../components/filter/filterDetails';
import Footer from '../../../components/footer/footer';
import Menu from '../../../components/nav/menu';
import NavNoLanguage from '../../../components/nav/navNoLanguage';
import SubMenu from '../../../components/nav/submenu';
import Title from '../../../components/Text/title';
import { BUTTON_ACTIVE } from '../../../const/const';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../../const/constGlobal';
import { Styles } from '../../../styles/styles';
import { getLocale } from '../../../public/locales/getLocale';
import ArticlesScroll from '../../../components/slider/article/slider';
import BlockFilter from '../../../components/block/blockFilter';
import Background from '../../../components/animations/background';
import ErrorView from '../../404/index';
import { handleFilter } from '../../../hook/format';
import { Props } from '../../types';
import { Container } from './style';

function DetailsServices({ data, locale }: Props) {
  const router = useRouter();
  const { slug } = router.query;
  const [translate, setTranslate] = useState(getLocale(locale));

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  const [isIdSubServices, SetIsIdSubServices] = useState<any>({});
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [menuId, setMenuId] = useState(null);

  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  useEffect(() => {
    if (data) {
      SetIsIdSubServices(handleFilter(data, slug));
    }
  }, [data, slug]);

  return (
    <>
      {isIdSubServices.length === 0 ? (
        <>
          <Background />
          <ErrorView locale={locale} />
        </>
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit={{ opacity: 0.1 }}
          className="text-primary">
          <FilterDetails
            isOpen={!isOpen && isOpenFilter}
            toggle={toggleFilter}
            logo
            mode
            data={data}
            menuId={menuId}
            router={router}
            setMenuId={setMenuId}
            isOpenFilter={isOpenFilter}
          />
          <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
            {!isOpenFilter && (
              <>
                <Menu isOpen={isOpen} toggle={toggle} logo mode />
                <Styles.Margin>
                  <NavNoLanguage toggle={toggle} logo mode isOpen={isOpen} />
                </Styles.Margin>
              </>
            )}
            {!isOpenFilter && <ButtonShare />}
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0.1 }}
              className="pb-36">
              <Styles.CenterCases>
                <Styles.BlockRenderDetails>
                  {React.Children.toArray(
                    data.map((tab: any) => (
                      <SubMenu
                        isOpen={
                          !menuId
                            ? tab.attributes?.subservices?.data?.some(
                                ({ attributes: { URLSlug } }: any) =>
                                  URLSlug === router.query.slug,
                              )
                            : menuId === tab.id
                        }
                        section={tab.attributes.name}
                        subsection={tab}
                        setIsToggle={setMenuId}
                      />
                    )),
                  )}
                </Styles.BlockRenderDetails>
                {!isOpenFilter && !isOpen && (
                  <BlockFilter
                    toggleFilter={toggleFilter}
                    text={translate.Services}
                  />
                )}
                <motion.div
                  className="lg:pt-12 lg:w-9/12 w-10/12 ml-auto h-auto mr-2"
                  animate={{ x: 0, opacity: 1 }}
                  initial={{ x: 100, opacity: 0.1 }}
                  exit={{ opacity: 0.1 }}
                  transition={{ delay: 0.5 }}>
                  <Title size="lg:text-5xl text-3xl text-lg font-Primary font-light h-20">
                    {isIdSubServices[0]?.attributes?.name}
                  </Title>
                  <motion.div
                    className="pt-2 w-full"
                    animate={{ y: 0, opacity: 1 }}
                    initial={{ y: 50, opacity: 0.1 }}
                    exit={{ opacity: 0.1 }}
                    transition={{ delay: 0.8 }}
                    variants={stagger}>
                    <motion.div
                      variants={fadeInUp}
                      transition={{ delay: 5.5 }}
                      className="pr-5 relative font-PrimarySerif font-light leading-loose textDegrade">
                      <Container
                        remarkPlugins={[gfm]}
                        rehypePlugins={[rehypeRaw]}>
                        {isIdSubServices[0]?.attributes?.description}
                      </Container>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Styles.CenterCases>
            </motion.div>
            <motion.div
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 50, opacity: 0.1 }}
              exit={{ opacity: 0.1 }}
              transition={{ delay: 0.8 }}
              variants={stagger}>
              <Styles.Center>
                <Styles.TitleSubSection>
                  {translate.project}
                </Styles.TitleSubSection>
              </Styles.Center>
              <Styles.FlexEnd>
                <Styles.AlingBlock>
                  <ArticlesScroll
                    renderTouch
                    mode
                    filter={data?.attributes?.sumary}
                    id={0}
                  />
                </Styles.AlingBlock>
              </Styles.FlexEnd>
            </motion.div>
            <Styles.Center>
              {translate.contact.map((values) => (
                <BlockSection
                  key={values.Link}
                  text={values.Text}
                  button={values.Link}
                  text2=""
                  button2=""
                  mode
                  link={
                    locale === 'en'
                      ? VALUESNAV_ENG[5].Url
                      : VALUESNAV_ESP[5].Url
                  }
                />
              ))}
            </Styles.Center>
            {!isOpenFilter ? <Footer subFooter={false} /> : null}
          </Styles.Body>
        </motion.div>
      )}
    </>
  );
}
export default DetailsServices;
