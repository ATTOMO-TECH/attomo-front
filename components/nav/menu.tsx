import Image from 'next/image';
import Link from 'next/link';
import { Navegation } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV } from '../../const/constGlobal';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function Menu({ isOpen, toggle }: Props) {
  return (
    <>
      <Navegation.SectionMenu
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
        <Navegation.Menu>
          <Navegation.AlinItems>
            <Navegation.ItemsMenu>
              <Image
                src="/icon/attomo.svg"
                width={100}
                height={100}
                alt="Attomo"
              />
            </Navegation.ItemsMenu>
            <Navegation.ItemsMenu onClick={toggle}>
              <Navegation.TextMenu ismode="">Menú</Navegation.TextMenu>
              <Image src="/icon/close.svg" width={30} height={30} alt="close" />
            </Navegation.ItemsMenu>
          </Navegation.AlinItems>
          {VALUESNAV.map((values) => (
            <Navegation.ItemList>
              <Navegation.SelectMenu key={values.Value}>
                <Link href="/#">{values.Value}</Link>
              </Navegation.SelectMenu>
            </Navegation.ItemList>
          ))}
        </Navegation.Menu>
      </Navegation.SectionMenu>
    </>
  );
}
