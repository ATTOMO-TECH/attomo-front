import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const router = useRouter();
  const handleBtn = (value: string) => {
    router.push('/', '/', { locale: value });
  };

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
          <div className="flex  items-end">
            <div className="flex text-Primary text-primary text-sm mr-5 items-center">
              <button
                onClick={() => handleBtn('es')}
                className="block p-2 delay-150 duration-300 ease-in-out hover:opacity-50"
                type="button">
                Es
              </button>
              <span>|</span>
              <button
                onClick={() => handleBtn('en')}
                className="block p-2 delay-150 duration-300 ease-in-out hover:opacity-50"
                type="button">
                En
              </button>
            </div>
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
          </div>
        </Navegation.AlinItems>
      </Navegation.SectionNav>
    </>
  );
}
