import Link from 'next/link';
import { Formik } from 'formik';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import FilterScroll from '../slider/filter/slider';
import CalendarPicker from '../calendar/calendar';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

export default function FilterMenu({ isOpen, toggle }: Props) {
  return (
    <>
      <div className="relative ">
        <Formik onSubmit={(e: any) => e} initialValues={{}} validateOnMount>
          <Filter.BlockFilter
            ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
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
              </Filter.ItemsMenu>
            </Filter.AlinItems>
            <div className="flex flex-col pt-48 justify-items-stretch h-screen  text-primary self-center  ">
              <div className="w-full flex flex-col justify-items-stretch items-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  className="border-b border-primary bg-secundary text-primary w-4/6 font-Primary text-xl outline-none focus:opacity-100 opacity-50 ease-in-out duration-300 font-light"
                />
                <div className="w-full h-auto pt-12">
                  <div className="w-8/12 flex justify-around m-auto  items-center">
                    <div className="w-full flex items-center">
                      <div className="lg:w-3/6">
                        <h6 className="lg:text-xl">Tématica</h6>
                      </div>
                      <div className="w-full lg:w-4/6 pl-10 lg:pl-0 ">
                        <FilterScroll />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full pt-24">
                  <div className="w-8/12 flex justify-around m-auto  items-center">
                    <div className="w-full flex items-center justify-center">
                      <div className="w-3/6">
                        <h6 className="text-xl">Fecha</h6>
                      </div>
                      <div className="w-full lg:w-4/6  z-100">
                        <CalendarPicker />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Filter.BlockFilter>
        </Formik>
      </div>
    </>
  );
}
