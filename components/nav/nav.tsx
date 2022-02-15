import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { darkTheme, lightTheme, Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  toggle: () => void;
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
  return (
    <>
      <Navegation.SectionNav
        theme={mode === true ? lightTheme : darkTheme}
        className={!isOpen ? '' : 'hidden'}
        ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.AlinItems
          ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Navegation.ItemsMenu>
            {logo === true ? (
              <>
                {mode ? (
                  <Link href="/">
                    <Image
                      src="/icon/isoAttomo.svg"
                      width={30}
                      height={30}
                      alt="Attomo"
                    />
                  </Link>
                ) : (
                  <Link href="/">
                    <Image
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
                  <Image
                    src="/icon/attomo.svg"
                    width={100}
                    height={100}
                    alt="Attomo"
                  />
                </Link>
              </>
            )}
          </Navegation.ItemsMenu>
          <Navegation.ItemsMenu onClick={toggle} className="colorMenu">
            <Navegation.TextMenu
              theme={mode === true ? lightTheme : darkTheme}
              ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              Menú
            </Navegation.TextMenu>
            {mode ? (
              <>
                <Navegation.ButtonLogo />
              </>
            ) : (
              <Image
                src="/icon/darkMenu.svg"
                width={30}
                height={30}
                alt="Menu"
              />
            )}
          </Navegation.ItemsMenu>
        </Navegation.AlinItems>
      </Navegation.SectionNav>
    </>
  );
}
