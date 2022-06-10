import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import { getLocale } from '../../public/locales/getLocale';
import { Navegation, darkTheme, lightTheme } from '../nav/style';
import SubMenu from '../nav/submenu';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  logo: boolean;
  mode: boolean;
  data: any;
  menuId: any;
  router: any;
  setMenuId: any;

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
  isOpenFilter,
}: Props) {
  const translate = getLocale();
  const [items, setItems] = useState(translate.menu);
  useEffect(() => {
    setItems(translate.menu);
  }, [items]);

  return (
    <>
      <Navegation.SectionFilterDetails
        transition={{
          x: { type: 'fast', duration: 0.4, ease: 'easeInOut' },
          default: { duration: 0.4, ease: 'easeInOut' },
        }}
        animate={{
          x: isOpenFilter ? 0 : -500,
          opacity: isOpenFilter ? 1 : 0,
        }}>
        <Navegation.Menu>
          <Navegation.AlinItemsServices
            ismode={logo ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
            <Navegation.ItemsMenu>
              <Link href="/">
                <img
                  src="/icon/isoAttomo.svg"
                  width={35}
                  height={35}
                  alt="Attomo"
                />
              </Link>
            </Navegation.ItemsMenu>
            <Navegation.ItemsMenu onClick={toggle} onTouchStart={toggle}>
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpen
                      ? { pathLength: 1, type: 'spring' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpen
                      ? { pathLength: 1, type: 'spring' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </motion.svg>
            </Navegation.ItemsMenu>
          </Navegation.AlinItemsServices>

          <div className="pl-8  w-full  flex flex-col items-center justify-center pt-24 relative z-90">
            {data.data.map((tab: any) => (
              <SubMenu
                key={tab.id}
                toggle={toggle}
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
        </Navegation.Menu>
      </Navegation.SectionFilterDetails>
    </>
  );
}
