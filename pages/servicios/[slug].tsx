import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  fadeInUp,
  servicesAnimations,
  stagger,
} from '../../components/animations/animations';
import BgComponent from '../../components/animations/bg';
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
// import ArticlesScroll from '../../components/slider/article/slider';

function DetailsServices() {
  const [isIdSubServices, SetIsIdSubServices] = useState<any>({});
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const [shouldShowActions] = useState(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const [menuId, setMenuId] = useState(null);
  const { slug } = router.query;

  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data, isLoading } = useUseAllServices(locale || 'es');

  useEffect(() => {
    if (!isLoading) {
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
      }
    }
  }, [data, slug]);

  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const translate = getLocale();

  return (
    <>
      <Head>
        <title>Servicios ATTOMO - Nuestros servicios - {slug}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BgComponent />
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
          SetIsOpenFilter={SetIsOpenFilter}
          isOpenFilter={isOpenFilter}
        />
        <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
          <Menu isOpen={isOpen} toggle={toggle} logo mode />
          <Styles.Margin>
            <Nav toggle={toggle} logo mode isOpen={isOpen} bgFull />
          </Styles.Margin>
          {!isOpenFilter && <ButtonShare />}
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="pb-36">
            <Styles.CenterCases>
              <Styles.BlockRenderDetails>
                {data.data.map((tab: any) => (
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
                ))}
              </Styles.BlockRenderDetails>
              <Styles.BlockFilter onClick={toggleFilter}>
                <Title size="lg:text-lg text-lg font-Primary font-light  fixed right-12 top-8">
                  Servicios
                </Title>
              </Styles.BlockFilter>
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
                <ArticlesScroll mode filter={data.data?.attributes?.sumary} />
              </Styles.AlingBlock>
            </Styles.FlexEnd>
          </motion.div>
          <motion.div
            animate={shouldShowActions}
            variants={servicesAnimations}
            className="actions "
            transition={{
              delay: 0.2,
              type: 'spring',
              stiffness: 50,
              duration: 2,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: '50%' }}>
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
          </motion.div>
          {!isOpenFilter ? <Footer subFooter={false} /> : null}
        </Styles.Body>
      </motion.div>
    </>
  );
}
export default DetailsServices;
