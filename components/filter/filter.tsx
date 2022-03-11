import Link from 'next/link';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import FilterScroll from '../slider/filter/slider';
import CalendarPicker from '../calendar/calendar';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  setDate: any;
  setTopic: any;
}

export default function ModalFilter({
  isOpen,
  toggle,
  setDate,
  setTopic,
}: Props) {
  return (
    <>
      <Filter.RelativeSection>
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
          <Filter.BlockFilterItems>
            <Filter.AlingBlock>
              <Filter.InputSearch type="text" placeholder="Buscar" />
              <Filter.FirtsItemFilter>
                <Filter.TextItemFilter>
                  <Filter.ValueFilter>Tématica</Filter.ValueFilter>
                </Filter.TextItemFilter>
                <Filter.SecondItem>
                  <FilterScroll setTopic={setTopic} />
                </Filter.SecondItem>
              </Filter.FirtsItemFilter>
              <Filter.BlockSecondFilter>
                <Filter.TextItemFilter>
                  <Filter.ValueFilter>Fecha</Filter.ValueFilter>
                </Filter.TextItemFilter>
                <Filter.SecondItem>
                  <CalendarPicker setDate={setDate} />
                </Filter.SecondItem>
              </Filter.BlockSecondFilter>
            </Filter.AlingBlock>
          </Filter.BlockFilterItems>
        </Filter.BlockFilter>
      </Filter.RelativeSection>
    </>
  );
}
