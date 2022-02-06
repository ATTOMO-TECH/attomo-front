import Image from 'next/image';
import Link from 'next/link';
import { darkTheme, lightTheme, Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV } from '../../const/constGlobal';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  logo: boolean;
  mode: boolean;
}

export default function Menu({ isOpen, toggle, logo, mode }: Props) {
  return (
    <>
      <Navegation.SectionMenu
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        theme={mode === true ? lightTheme : darkTheme}>
        <Navegation.Menu>
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
                ismode=""
                theme={mode === true ? lightTheme : darkTheme}
              />
              <Image src="/icon/close.svg" width={30} height={30} alt="close" />
            </Navegation.ItemsMenu>
          </Navegation.AlinItems>
          <div className="pt-40">
            {VALUESNAV.map((values) => (
              <Navegation.ItemList key={values.Value}>
                <Navegation.SelectMenu key={values.Value} onClick={toggle}>
                  <Link href={values.Url}>{values.Value}</Link>
                </Navegation.SelectMenu>
              </Navegation.ItemList>
            ))}
          </div>
        </Navegation.Menu>
      </Navegation.SectionMenu>
    </>
  );
}
