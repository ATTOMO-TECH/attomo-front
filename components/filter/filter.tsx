import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import ModulelFilterResponsive from './moduleFilterResponsive';
import ModulelFilter from './moduleFilter';
import useDeviceSize from '../../hook/size';

interface Props {
  isOpenFilter: boolean;
  toggle: () => void;
  setDate: any;
  setTopic: any;
  setSearch: any;
  locale: any;
}

export default function ModalFilter({
  isOpenFilter,
  toggle,
  setDate,
  setTopic,
  setSearch,
  locale,
}: Props) {
  const [width] = useDeviceSize();

  return (
    <>
      <Filter.SectionFilter
        ismode={isOpenFilter ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        animate={{
          x: isOpenFilter ? 0 : '-100%',
        }}
        transition={{
          delay: 0,
          duration: 0.8,
          ease: 'easeInOut',
          stiffness: 50,
        }}>
        <div
          className={
            width < 768
              ? 'w-full justify-center overflow-y-auto'
              : 'h-4/6 justify-center flex items-center'
          }>
          <Filter.AlinItems ismode={BUTTON_ACTIVE.OFF}>
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpenFilter
                      ? { pathLength: 1, type: 'tween' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M6 6L18 18"
                  stroke="white"
                  stroke-width="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpenFilter
                      ? { pathLength: 1, type: 'tween' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </motion.svg>
            </Filter.ItemsMenu>
          </Filter.AlinItems>
          <Filter.BlockFilterItems>
            {width < 768 ? (
              <ModulelFilterResponsive
                setDate={setDate}
                setTopic={setTopic}
                setSearch={setSearch}
                locale={locale}
              />
            ) : (
              <ModulelFilter
                setDate={setDate}
                setTopic={setTopic}
                setSearch={setSearch}
              />
            )}
          </Filter.BlockFilterItems>
        </div>
        <Filter.BlockSendButton>
          <Filter.BtnSend type="submit" onClick={toggle}>
            Buscar
          </Filter.BtnSend>
        </Filter.BlockSendButton>
      </Filter.SectionFilter>
    </>
  );
}
