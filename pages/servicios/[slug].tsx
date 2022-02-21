import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import { useState } from 'react';
import { fadeInUp, stagger } from '../../components/animations/animations';
import BgComponent from '../../components/animations/bg';
import BlockSection from '../../components/block/block';
import ButtonShare from '../../components/button/BtnShare';
import FilterDetails from '../../components/filter/filterDetails';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import SubMenu from '../../components/nav/submenu';
import ArticlesScroll from '../../components/slider/article/slider';
import Title from '../../components/Text/title';
import { BUTTON_ACTIVE } from '../../const/const';
import { ARTICLES } from '../../const/constGlobal';
import { Styles } from '../../styles/styles';

function DetailsServices() {
  const array: {
    Name: string;
    Component: any;
  }[] = [
    {
      Name: 'Estrategia',
      Component: '',
    },
    {
      Name: 'Estrategia',
      Component: '',
    },
    {
      Name: 'Estrategia',
      Component: '',
    },
  ];
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  const router = useRouter();
  const { slug } = router.query;
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <BgComponent />
      <FilterDetails isOpen={isOpenFilter} toggle={toggleFilter} />
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className="text-primary">
        <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
          <Menu isOpen={isOpen} toggle={toggle} logo mode />
          <Styles.Margin>
            <Nav toggle={toggle} logo mode isOpen={isOpen} />
          </Styles.Margin>
          <ButtonShare />

          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="pb-36">
            <Styles.CenterCases>
              <div className="lg:flex flex-col pt-10 hidden relative">
                <SubMenu section="Estrategia" subsection={array} collapse />
              </div>
              <Styles.BlockFilter onClick={toggleFilter}>
                <Title size="lg:text-lg text-lg font-Primary font-light">
                  Servicios
                </Title>
              </Styles.BlockFilter>
              <motion.div
                className="lg:pt-12 lg:w-10/12 w-10/12 ml-auto"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}>
                <Title size="lg:text-5xl text-2xl font-Primary font-light pb-1">
                  {slug}
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
                    className="lg:overflow-y-scroll lg:h-48 pr-5 relative">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque labore beatae provident eum, sunt animi repellat enim
                    deserunt commodi, numquam magni ex exercitationem adipisci
                    sapiente laudantium odio libero, illum amet! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Atque labore
                    beatae provident eum, sunt animi repellat enim deserunt
                    commodi, numquam magni ex exercitationem adipisci sapiente
                    laudantium odio libero, illum amet! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Atque labore beatae
                    provident eum, sunt animi repellat enim deserunt commodi,
                    numquam magni ex exercitationem adipisci sapiente laudantium
                    odio libero, illum amet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Atque labore beatae provident
                    eum, sunt animi repellat enim deserunt commodi, numquam
                    magni ex exercitationem adipisci sapiente laudantium odio
                    libero, illum amet! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Atque labore beatae provident eum, sunt
                    animi repellat enim deserunt commodi, numquam magni ex
                    exercitationem adipisci sapiente laudantium odio libero,
                    illum amet! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Atque labore beatae provident eum, sunt
                    animi repellat enim deserunt commodi, numquam magni ex
                    exercitationem adipisci sapiente laudantium odio libero,
                    illum amet!
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
                Proyectos relacionados
              </Styles.TitleSubSection>
            </Styles.Center>
            <Styles.FlexEnd>
              <Styles.AlingBlock>
                <ArticlesScroll mode array={ARTICLES} />
              </Styles.AlingBlock>
            </Styles.FlexEnd>
            <Styles.CenterFlex>
              <BlockSection
                text="¿Tienes un proyecto?"
                button="Contacta con nosotros"
                text2=""
                button2=""
                mode
                link="/contacto"
              />
            </Styles.CenterFlex>
          </motion.div>
          <Footer subFooter={false} />
        </Styles.Body>
      </motion.div>
    </>
  );
}
export default DetailsServices;
