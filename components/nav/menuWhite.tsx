import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { darkTheme, lightTheme, Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import useDeviceSize from '../../hook/size';

interface Props {
  isOpen: boolean;
  toggle: any;
  logo: boolean;
  mode: boolean;
}

export default function MenuWhite({ isOpen, toggle, logo, mode }: Props) {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));
  const [items, setItems] = useState(translate.menu);

  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);

  const closeMenu = () => {
    setTimeout(() => {
      toggle();
    }, 500);
  };
  const handleBtn = (value: string) => {
    router.push(router.asPath, router.asPath, { locale: value });
  };

  const [width] = useDeviceSize();
  useEffect(() => {
    setItems(translate.menu);
  }, [items, translate]);

  return (
    <>
      <Navegation.MenuRelative
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.SectionMenuFW
          ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
          theme={mode === true ? lightTheme : darkTheme}>
          <Navegation.AlingItemsMenu>
            <Navegation.AlinItemsMenu
              ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              <Navegation.ItemsMenu>
                {logo ? (
                  <Link href="/" passHref>
                    <img
                      src="/icon/isoAttomo.svg"
                      width={35}
                      height={35}
                      alt="Attomo"
                    />
                  </Link>
                ) : (
                  <Link href="/">
                    <img
                      src="/icon/attomo.svg"
                      width={100}
                      height={100}
                      alt="Attomo"
                    />
                  </Link>
                )}
              </Navegation.ItemsMenu>
              <Navegation.ItemsMenu onClick={toggle}>
                <Navegation.TextMenu
                  ismode=""
                  theme={mode === true ? lightTheme : darkTheme}
                />
                {width > 570 ? (
                  <motion.svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <motion.path
                      d="M18 6L6 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={
                        isOpen
                          ? { pathLength: 1, type: 'tween' }
                          : { pathLength: 0, type: 'spring' }
                      }
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                    <motion.path
                      d="M6 6L18 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={
                        isOpen
                          ? { pathLength: 1, type: 'tween' }
                          : { pathLength: 0, type: 'spring' }
                      }
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transition={{ duration: 1, ease: 'easeInOut' }}>
                    <motion.path
                      d="M18 6L6 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={
                        isOpen
                          ? { pathLength: 1, type: 'tween' }
                          : { pathLength: 0, type: 'spring' }
                      }
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                    <motion.path
                      d="M6 6L18 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={
                        isOpen
                          ? { pathLength: 1, type: 'tween' }
                          : { pathLength: 0, type: 'spring' }
                      }
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                  </motion.svg>
                )}
              </Navegation.ItemsMenu>
            </Navegation.AlinItemsMenu>
            <Navegation.BlockNav>
              {items.map((values, i) => (
                <motion.li
                  key={`${values.Value}`}
                  animate={
                    isOpen
                      ? { opacity: 1, translateY: 0 }
                      : { opacity: 0, translateY: '100%' }
                  }
                  className="list-none w-full "
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: 'easeInOut',
                  }}>
                  <Navegation.SelectMenu
                    key={`${values.Value}`}
                    onClick={closeMenu}>
                    <Link href={values.Url} passHref>
                      <span id={`${values.Value}-${i}`}>{values.Value}</span>
                    </Link>
                  </Navegation.SelectMenu>
                </motion.li>
              ))}
              {!router.route.includes('slug') && (
                <Navegation.BlokSectionLenguageResponsive>
                  <Navegation.ButtonSelect
                    ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                    onClick={() => handleBtn('es')}>
                    ES
                  </Navegation.ButtonSelect>
                  <Navegation.LineBlock
                    ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                    |
                  </Navegation.LineBlock>
                  <Navegation.ButtonSelect
                    ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                    onClick={() => handleBtn('en')}>
                    EN
                  </Navegation.ButtonSelect>
                </Navegation.BlokSectionLenguageResponsive>
              )}
            </Navegation.BlockNav>
          </Navegation.AlingItemsMenu>
        </Navegation.SectionMenuFW>
      </Navegation.MenuRelative>
    </>
  );
}
