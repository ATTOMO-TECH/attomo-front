import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  toggle: () => void;
  logo: boolean;
}

export default function Nav({ toggle, logo }: Props) {
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
        ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.AlinItems
          ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Navegation.ItemsMenu>
            {logo === true ? (
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
              ismode={!scroll ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
              Menú
            </Navegation.TextMenu>
            <Image src="/icon/menu.svg" width={30} height={30} alt="Menu" />
          </Navegation.ItemsMenu>
        </Navegation.AlinItems>
      </Navegation.SectionNav>
    </>
  );
}
