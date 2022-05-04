/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { darkTheme, lightTheme, Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { useEventListener } from '../../hook/eventListener';

interface Props {
  toggle: any;
  logo: boolean;
  mode: boolean;
  isOpen: boolean;
}

export default function Nav({ toggle, logo, mode, isOpen }: Props) {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  const router = useRouter();
  const handleBtn = (value: string) => {
    router.push(router.pathname, router.pathname, { locale: value });
  };
  const handleBack = () => {
    router.push('/');
  };

  useEventListener('menuA', 'touchstart', toggle);
  useEventListener('back', 'touchstart', handleBack);

  return (
    <>
      <Navegation.SectionNav
        theme={!scroll ? (mode ? lightTheme : darkTheme) : null}
        className={!isOpen ? '' : 'hidden'}
        ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.AlinItems
          ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Navegation.ItemsMenu id="back">
            {logo ? (
              <>
                {mode ? (
                  <Link href="/">
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
                      src="/icon/darkAttomo.svg"
                      width={35}
                      height={35}
                      alt="Attomo"
                    />
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link href="/">
                  <img
                    src="/icon/attomo.svg"
                    width={100}
                    height={100}
                    alt="Attomo"
                  />
                </Link>
              </>
            )}
          </Navegation.ItemsMenu>
          <Navegation.BlockLenguage>
            <Navegation.BlokSectionLenguage>
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
            </Navegation.BlokSectionLenguage>
            <Navegation.ItemsMenu
              id="menuA"
              onClick={() => toggle()}
              className="colorMenu action z-100">
              <Navegation.TextMenu
                theme={mode === true ? lightTheme : darkTheme}
                ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
              />
              {mode ? (
                <Navegation.ButtonLogo />
              ) : (
                <Navegation.ButtonLogoInvert />
              )}
            </Navegation.ItemsMenu>
          </Navegation.BlockLenguage>
        </Navegation.AlinItems>
      </Navegation.SectionNav>
    </>
  );
}
