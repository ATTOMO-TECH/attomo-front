/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { darkTheme, lightTheme, Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { handlers, handlersFuntion } from '../../hook/longPress';

interface Props {
  toggle: any;
  logo: boolean;
  mode: boolean;
  isOpen: boolean;
}

export default function NavNoLanguage({ toggle, logo, mode, isOpen }: Props) {
  const [scroll, setScroll] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  const handleScroll = () => {
    if (isMounted) {
      if (window.scrollY > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);

    window.addEventListener('scroll', handleScroll);

    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navegation.SectionNav
        theme={!scroll ? (mode ? lightTheme : darkTheme) : null}
        className={!isOpen ? '' : 'hidden'}
        ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.AlinItems
          ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Link href="/" passHref>
            <a href="/" {...handlers('/')}>
              <Navegation.ItemsMenu>
                {logo ? (
                  <>
                    {mode ? (
                      <Image
                        src="/icon/isoAttomo.svg"
                        width={35}
                        height={35}
                        alt="Attomo"
                      />
                    ) : (
                      <Image
                        src="/icon/darkAttomo.svg"
                        width={35}
                        height={35}
                        alt="Attomo"
                      />
                    )}
                  </>
                ) : (
                  <>
                    <Image
                      src="/icon/attomo.svg"
                      width={100}
                      height={100}
                      alt="Attomo"
                    />
                  </>
                )}
              </Navegation.ItemsMenu>
            </a>
          </Link>
          <Navegation.BlockLenguage>
            <Navegation.ItemsMenu
              onClick={() => toggle()}
              {...handlersFuntion(toggle)}
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
