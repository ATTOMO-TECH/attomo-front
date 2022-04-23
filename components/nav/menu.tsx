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
  toggle: () => void;
  logo: boolean;
  mode: boolean;
}

export default function Menu({ isOpen, toggle, logo, mode }: Props) {
  const translate = getLocale();
  const [items, setItems] = useState(translate.menu);
  useEffect(() => {
    setItems(translate.menu);
  }, [items]);

  const CloseMenu = () => {
    setTimeout(() => {
      toggle();
    }, 1000);
  };
  const router = useRouter();
  const handleBtn = (value: string) => {
    router.push(router.pathname, router.pathname, { locale: value });
  };
  const [width] = useDeviceSize();
  return (
    <>
      <Navegation.MenuRelative
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.SectionMenuFW
          ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
          theme={mode === true ? lightTheme : darkTheme}>
          <Navegation.AlinItems
            ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            <Navegation.ItemsMenu>
              {logo === true ? (
                <Link href="/">
                  <img
                    src="/icon/isoAttomo.svg"
                    width={30}
                    height={30}
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
                onClick={toggle}
              />
              {width > 570 ? (
                <motion.svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transition={{ duration: 1, ease: 'easeInOut' }}>
                  <motion.path
                    d="M18 6L6 18"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
          </Navegation.AlinItems>
          <Navegation.AlingItemsMenu>
            {items.map((values, i) => (
              <motion.li
                key={`${values.Value}`}
                animate={
                  isOpen
                    ? { opacity: 1, translateY: 0 }
                    : { opacity: 0, translateY: '100%' }
                }
                className="list-none overflow-hidden block"
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: 'easeInOut',
                }}>
                <Navegation.SelectMenu
                  key={`${values.Value}`}
                  onClick={CloseMenu}>
                  <Link href={values.Url}>{values.Value}</Link>
                </Navegation.SelectMenu>
              </motion.li>
            ))}
            <Navegation.BlokSectionLenguageResponsive>
              <Navegation.ButtonSelect
                ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                onClick={() => handleBtn('es')}
                type="button">
                ES
              </Navegation.ButtonSelect>
              <Navegation.LineBlock
                ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
                |
              </Navegation.LineBlock>
              <Navegation.ButtonSelect
                ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                onClick={() => handleBtn('en')}
                type="button">
                EN
              </Navegation.ButtonSelect>
            </Navegation.BlokSectionLenguageResponsive>
          </Navegation.AlingItemsMenu>
        </Navegation.SectionMenuFW>
      </Navegation.MenuRelative>
    </>
  );
}
