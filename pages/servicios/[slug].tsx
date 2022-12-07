/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { fadeInUp, stagger } from '../../components/animations/animations';
import Background from '../../components/animations/background';
import BlockSection from '../../components/block/block';
import ButtonShare from '../../components/button/BtnShare';
import FilterDetails from '../../components/filter/filterDetails';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import SubMenu from '../../components/nav/submenu';
import Title from '../../components/Text/title';
import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from '../../styles/styles';
import { useUseAllServices } from '../../domain/useServices';
import RenderLoading from '../../components/loading/loading';
import { getLocale } from '../../public/locales/getLocale';
import ArticlesScroll from '../../components/slider/article/slider';
import BlockFilter from '../../components/block/blockFilter';

function DetailsServices() {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));

  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);
  const [isIdSubServices, SetIsIdSubServices] = useState<any>({});
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [menuId, setMenuId] = useState(null);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const { slug } = router.query;
  let { locale } = router;
  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  if (locale === '/') {
    locale = 'es';
  }
  const { data, isLoading } = useUseAllServices(locale || 'es');

  useEffect(() => {
    if (data) {
      const valueFilter = data.data.flatMap((tab: any) => {
        const some = tab.attributes?.subservices?.data?.filter(
          ({ attributes: { name } }: any) => {
            const nameParse = name.replaceAll(' ', '_').toLowerCase();

            return nameParse === slug;
          },
        );

        return some;
      });
      SetIsIdSubServices(valueFilter);
      setMetaTitle(valueFilter[0].attributes.screenTitle);
      setMetaDescription(valueFilter[0].attributes.metadata);
    }
  }, [data, slug]);

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
        <title>Servicios ATTOMO - Nuestros servicios - {metaTitle}</title>
        <meta
          name="title"
          content={`Servicios ATTOMO - Nuestros servicios - ${metaTitle}`}
        />
        <link rel="icon" href="/FaviconLight.svg" type="image/x-icon" />
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaDescription} />
        <link rel="canonical" href={document.location.href} />
        <meta name="type" content="website" />
        <meta name="copyright" content={document.location.href} />
        <meta name="robots" content="index" />
        <meta name="image" content="/FaviconLight.svg" />
      </Head>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
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
          <Background />
          {!isOpenFilter && (
            <>
              <Menu isOpen={isOpen} toggle={toggle} logo mode />
              <Styles.Margin>
                <Nav toggle={toggle} logo mode isOpen={isOpen} />
              </Styles.Margin>
            </>
          )}
          {!isOpenFilter && <ButtonShare />}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="pb-36">
            <Styles.CenterCases>
              <Styles.BlockRenderDetails>
                {React.Children.toArray(
                  data.data.map((tab: any) => (
                    <SubMenu
                      isOpen={
                        !menuId
                          ? tab.attributes?.subservices?.data?.some(
                              ({ attributes: { name } }: any) =>
                                name.replaceAll(' ', '_').toLowerCase() ===
                                router.query.slug,
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
                initial={{ x: 2000, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}>
                <Title size="lg:text-5xl text-3xl text-lg font-Primary font-light h-20">
                  {isIdSubServices[0]?.attributes?.name}
                </Title>
                <motion.div
                  className="pt-2 w-full"
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 100, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.8 }}
                  variants={stagger}>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 5.5 }}
                    className="pr-5 relative font-PrimarySerif font-light leading-loose textDegrade">
                    {isIdSubServices[0]?.attributes?.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            </Styles.CenterCases>
          </motion.div>
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            exit={{ opacity: 0 }}
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
                  filter={data.data?.attributes?.sumary}
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
                link="/contacto"
              />
            ))}
          </Styles.Center>
          {!isOpenFilter ? <Footer subFooter={false} /> : null}
        </Styles.Body>
      </motion.div>
    </>
  );
}
export default DetailsServices;
