import { motion } from 'framer-motion';
import Filter from '../input/filter';
import { HeadSection } from './style';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string;
  isOpen: boolean;
  scroll: boolean;
  handleChangeReset: () => void;
  OpenMenu: boolean;
}

export default function HeroCase({
  toggle,
  date,
  endDate,
  topic,
  isOpen,
  scroll,
  OpenMenu,
  handleChangeReset,
}: Props) {
  const change: boolean = !!date || !!endDate || !!topic;
  return (
    <>
      <HeadSection.SectionCase>
        {!isOpen && scroll ? (
          <>
            {!OpenMenu ? (
              <>
                <Filter
                  toggle={toggle}
                  date={date}
                  topic={topic}
                  endDate={endDate}
                />
                <motion.svg
                  className="cursor-pointer w-1/6 fixed  top-56 -left-2 z-100 "
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  onClick={handleChangeReset}>
                  <motion.path
                    d="M18 6L6 18"
                    stroke="white"
                    stroke-width={change ? '2' : 0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={
                      change
                        ? { pathLength: 1, type: 'tween' }
                        : { pathLength: 0, type: 'spring' }
                    }
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M6 6L18 18"
                    stroke="white"
                    stroke-width={change ? '2' : 0}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={
                      change
                        ? { pathLength: 1, type: 'tween' }
                        : { pathLength: 0, type: 'spring' }
                    }
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.svg>
              </>
            ) : null}
          </>
        ) : null}
        <HeadSection.SectionHeroCases />
      </HeadSection.SectionCase>
    </>
  );
}
