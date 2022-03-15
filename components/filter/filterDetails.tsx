import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { Navegation, darkTheme, lightTheme } from '../nav/style';
import SubMenu from '../nav/submenu';
import { Styles } from '../../styles/styles';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  logo: boolean;
  mode: boolean;
  data: any;
  menuId: any;
  router: any;
  setMenuId: any;
  SetIsOpenFilter: any;
  isOpenFilter: any;
}

export default function FilterDetails({
  isOpen,
  toggle,
  logo,
  mode,
  data,
  menuId,
  router,
  setMenuId,
  SetIsOpenFilter,
  isOpenFilter,
}: Props) {
  const translate = getLocale();
  const [items, setItems] = useState(translate.menu);
  useEffect(() => {
    setItems(translate.menu);
  }, [items]);

  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };

  return (
    <>
      <Navegation.SectionMenu
        variants={variants}
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        theme={mode === true ? lightTheme : darkTheme}>
        <Navegation.Menu>
          <Navegation.AlinItems
            ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            <Navegation.ItemsMenu>
              <Link href="/">
                <img
                  src="/icon/isoAttomo.svg"
                  width={30}
                  height={30}
                  alt="Attomo"
                />
              </Link>
            </Navegation.ItemsMenu>
            <Navegation.ItemsMenu onClick={toggle}>
              <Navegation.TextMenu
                ismode=""
                theme={mode === true ? lightTheme : darkTheme}
              />
              <motion.svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transition={{ duration: 1, ease: 'easeInOut' }}>
                <motion.path
                  d="M18 6L6 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpen
                      ? { pathLength: 1, type: 'tween' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M6 6L18 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpen
                      ? { pathLength: 1, type: 'tween' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </motion.svg>
            </Navegation.ItemsMenu>
          </Navegation.AlinItems>
          <div className="pt-24 lg:pt-48 flex justify-center text-primary w-10/12 m-auto h-full items-start">
            <Styles.BlockFilter onClick={toggle}>
              {translate.close}
            </Styles.BlockFilter>

            <div className="w-10/12  flex flex-col items-start">
              {data.data.map((tab: any) => (
                <SubMenu
                  toggle={toggleFilter}
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
        </Navegation.Menu>
      </Navegation.SectionMenu>
    </>
  );
}
