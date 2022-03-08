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
  data: any;
  menuId: any;
  setMenuId: any;
  router: any;
}

export default function FilterDetails({
  isOpen,
  toggle,
  data,
  menuId,
  setMenuId,
  router,
}: Props) {
  return (
    <>
      <Formik onSubmit={(e: any) => e} initialValues={{}} validateOnMount>
        <Filter.BlockFilter
          ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Filter.AlinItems ismode={BUTTON_ACTIVE.ON}>
            <Filter.ItemsMenu>
              <Link href="/">
                <img
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
              {data.data.map((tab: any) => (
                <SubMenu
                  isOpen={
                    !menuId
                      ? tab.attributes?.subservices?.data?.some(
                          ({ attributes: { name } }: any) =>
                            name.replaceAll(' ', '_').toLowerCase() ===
                            router.query.slug,
                        )
                      : menuId === tab.id
                  }
                  section={tab.attributes.name}
                  subsection={tab}
                  setIsToggle={setMenuId}
                />
              ))}
            </div>
          </div>
        </Filter.BlockFilter>
      </Formik>
    </>
  );
}
