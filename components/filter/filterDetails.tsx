import Image from 'next/image';
import Link from 'next/link';
import { Formik } from 'formik';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import SubMenu from '../nav/submenu';
import { Styles } from '../../styles/styles';
import { Navegation } from '../nav/style';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function FilterDetails({ isOpen, toggle }: Props) {
  const array: {
    Name: string;
    Component: any;
  }[] = [
    {
      Name: 'Estrategia',
      Component: '',
    },
    {
      Name: 'Estrategia',
      Component: '',
    },
    {
      Name: 'Estrategia',
      Component: '',
    },
  ];
  return (
    <>
      <Formik onSubmit={(e: any) => e} initialValues={{}} validateOnMount>
        <Filter.BlockFilter
          ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Filter.AlinItems ismode={BUTTON_ACTIVE.ON}>
            <Filter.ItemsMenu>
              <Link href="/">
                <Image
                  src="/icon/isoAttomo.svg"
                  width={30}
                  height={30}
                  alt="Attomo"
                />
              </Link>
            </Filter.ItemsMenu>
            <Filter.ItemsMenu onClick={toggle}>
              <Navegation.ButtonLogo />
            </Filter.ItemsMenu>
          </Filter.AlinItems>
          <div className="pt-48 flex justify-center text-primary w-10/12 m-auto h-full items-start">
            <Styles.BlockFilter onClick={toggle}>Cerrar</Styles.BlockFilter>

            <div className="w-10/12  flex flex-col items-start">
              <SubMenu
                section="Estrategia"
                subsection={array}
                collapse={false}
              />
              <SubMenu section="Diseño" subsection={array} collapse={false} />
              <SubMenu
                section="Tecnología"
                subsection={array}
                collapse={false}
              />
            </div>
          </div>
        </Filter.BlockFilter>
      </Formik>
    </>
  );
}
