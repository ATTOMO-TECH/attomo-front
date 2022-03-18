import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { Navegation, darkTheme, lightTheme } from '../nav/style';
import SubMenu from '../nav/submenu';
import { Styles } from '../../styles/styles';
import Title from '../Text/title';

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

  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };

  return (
    <>
      <Navegation.SectionFilter
        ismode={isOpenFilter ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        animate={{
          x: isOpenFilter ? 0 : -500,
          opacity: isOpenFilter ? 1 : 0,
        }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeInOut',
          stiffness: 50,
        }}>
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
          <div className="md:pt-24 lg:pt-48 flex  text-primary  m-auto h-full">
            <Styles.BlockFilter onClick={toggle}>
              <Title size="lg:text-lg text-lg font-Primary font-light pl-8 ">
                {translate.close}
              </Title>
            </Styles.BlockFilter>

            <div className="w-10/12  flex flex-col items-center place-content-center">
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
      </Navegation.SectionFilter>
    </>
  );
}
