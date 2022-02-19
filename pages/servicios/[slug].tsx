import { motion } from 'framer-motion';

import { useRouter } from 'next/router';
import { useState } from 'react';
import BgComponent from '../../components/animations/bg';
import BlockSection from '../../components/block/block';
import ButtonShare from '../../components/button/BtnShare';
import Footer from '../../components/footer/footer';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
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
  const [isToggle, SetIsToggle] = useState<boolean>(true);
  const [iDx, handleClick] = useState(0);
  const router = useRouter();
  const { slug } = router.query;
  const easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 1, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  return (
    <>
      <BgComponent />
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
              <div className="w-2/6">
                <div className="pt-12">
                  <motion.div variants={stagger} className="inner">
                    <motion.div variants={fadeInUp}>
                      <button
                        type="button"
                        className="category"
                        onClick={() => SetIsToggle(!isToggle)}>
                        Estrategia
                        {slug}
                      </button>
                    </motion.div>
                    {isToggle && (
                      <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap ">
                        <span className="h-auto w-1 rounded-xl opacity-60 bg-white" />
                        <div className="flex flex-col relative pl-5">
                          {array.map((tab, i) => (
                            <Styles.SelectSubMenu
                              key={tab.Name}
                              active={i === iDx}
                              onClick={() => handleClick(i)}>
                              {tab.Name}
                            </Styles.SelectSubMenu>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
              <motion.div
                className="pt-12 w-full"
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}>
                <Title size="text-6xl font-primary font-light pb-1">
                  Digital Marketing
                </Title>

                <motion.div
                  className="pt-12 w-full"
                  animate={{ y: 0, opacity: 1 }}
                  initial={{ y: 100, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.8 }}
                  variants={stagger}>
                  <motion.p
                    variants={fadeInUp}
                    transition={{ delay: 5.5 }}
                    className="overflow-y-scroll h-48 pr-5 relative">
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

          <Footer subFooter={false} />
        </Styles.Body>
      </motion.div>
    </>
  );
}
export default DetailsServices;
