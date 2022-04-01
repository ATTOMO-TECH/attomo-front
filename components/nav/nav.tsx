/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  darkTheme,
  IconPathStyled,
  IconStyled,
  IconStyledDark,
  lightTheme,
  Navegation,
} from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  toggle: () => void;
  logo: boolean;
  mode: boolean;
  isOpen: boolean;
  bgFull?: boolean;
}

export default function Nav({ toggle, logo, mode, isOpen, bgFull }: Props) {
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

  return (
    <>
      <Navegation.SectionNav
        theme={
          !scroll ? (bgFull ? (mode ? lightTheme : darkTheme) : null) : null
        }
        className={!isOpen ? '' : 'hidden'}
        ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.AlinItems
          ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Navegation.ItemsMenu>
            {logo ? (
              <>
                {mode ? (
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
                      src="/icon/darkAttomo.svg"
                      width={30}
                      height={30}
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
            <Navegation.ItemsMenu onClick={toggle} className="colorMenu">
              <Navegation.TextMenu
                theme={mode === true ? lightTheme : darkTheme}
                ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
              />
              {mode ? (
                // <Navegation.ButtonLogo />
                <div className="container">
                  <IconStyled
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 86.49 86.49">
                    <IconPathStyled
                      d="M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43m0-.25A43.25,43.25,0,1,0,86.49,43.25,43.25,43.25,0,0,0,43.25,0Z"
                      transition={{
                        default: { duration: 3, ease: 'easeInOut' },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                  </IconStyled>
                </div>
              ) : (
                <div className="container dark">
                  <IconStyledDark
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 86.49 86.49">
                    <IconPathStyled
                      d="M43.25.25a43,43,0,1,1-43,43,43,43,0,0,1,43-43m0-.25A43.25,43.25,0,1,0,86.49,43.25,43.25,43.25,0,0,0,43.25,0Z"
                      transition={{
                        default: { duration: 3, ease: 'easeInOut' },
                        fill: { duration: 3, ease: [1, 0, 0.8, 1] },
                      }}
                    />
                  </IconStyledDark>
                </div>
              )}
            </Navegation.ItemsMenu>
          </Navegation.BlockLenguage>
        </Navegation.AlinItems>
      </Navegation.SectionNav>
    </>
  );
}
