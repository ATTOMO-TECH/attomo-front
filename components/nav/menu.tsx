import Image from 'next/image';
import Link from 'next/link';
import { Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV } from '../../const/constGlobal';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  logo: boolean;
}

export default function Menu({ isOpen, toggle, logo }: Props) {
  return (
    <>
      <Navegation.SectionMenu
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
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
              <Navegation.TextMenu ismode="">Menú</Navegation.TextMenu>
              <Image src="/icon/close.svg" width={30} height={30} alt="close" />
            </Navegation.ItemsMenu>
          </Navegation.AlinItems>
          {VALUESNAV.map((values) => (
            <Navegation.ItemList key={values.Value}>
              <Navegation.SelectMenu key={values.Value}>
                <Link href={values.Url}>{values.Value}</Link>
              </Navegation.SelectMenu>
            </Navegation.ItemList>
          ))}
        </Navegation.Menu>
      </Navegation.SectionMenu>
    </>
  );
}
