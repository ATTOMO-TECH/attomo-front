import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import ModulelFilterResponsive from './moduleFilterResponsive';
import ModulelFilter from './moduleFilter';
import useDeviceSize from '../../hook/size';
import { handlersFuntion } from '../../hook/longPress';
import { getLocale } from '../../public/locales/getLocale';

interface Props {
  isOpenFilter: boolean;
  toggle: () => void;
  setDate: any;
  setTopic: any;
  setSearch: any;
  locale: any;
  startDate: any;
  endDate: any;
  topic: any;
  search: any;
}

export default function ModalFilter({
  isOpenFilter,
  toggle,
  setDate,
  setTopic,
  setSearch,
  locale,
  startDate,
  endDate,
  topic,
  search,
}: Props) {
  const [width] = useDeviceSize();
  const [startDateModal, setStartDateModal] = useState<any>(startDate);
  const [endDateModal, setEndDateModal] = useState<any>(endDate);
  const [topicModal, setTopicModal] = useState<any>(topic);
  const [searchModal, setSearchModal] = useState(search);

  const [translate, setTranslate] = useState(getLocale(locale || 'es'));

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  const handleSearch = () => {
    setDate([startDateModal, endDateModal]);
    setTopic(topicModal);
    setSearch(searchModal);
    setTimeout(() => {
      toggle();
    }, 400);
  };

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
              ? 'w-full justify-center '
              : 'h-4/6 justify-center flex items-center  min-h-auto flex-wrap '
          }>
          <Filter.AlinItems ismode={BUTTON_ACTIVE.OFF}>
            <Filter.ItemsMenu>
              <Link href="/">
                <img
                  src="/icon/isoAttomo.svg"
                  width={35}
                  height={35}
                  alt="Attomo"
                />
              </Link>
            </Filter.ItemsMenu>
            <Filter.ItemsMenu onClick={toggle} onTouchEnd={toggle}>
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
                    isOpenFilter
                      ? { pathLength: 1, type: 'tween' }
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
                setTopic={setTopicModal}
                setSearch={setSearchModal}
                locale={locale}
                endDateModal={endDateModal}
                topicModal={topicModal}
                searchModal={searchModal}
                setStartDateModal={setStartDateModal}
                setEndDateModal={setEndDateModal}
                startDateModal={startDateModal}
              />
            ) : (
              <ModulelFilter
                setTopic={setTopicModal}
                setSearch={setSearchModal}
                startDateModal={startDateModal}
                endDateModal={endDateModal}
                searchModal={searchModal}
                setStartDateModal={setStartDateModal}
                setEndDateModal={setEndDateModal}
              />
            )}
          </Filter.BlockFilterItems>

          <Filter.BlockSendButton>
            <Filter.BtnSend
              isactive={
                endDateModal || topicModal || searchModal
                  ? BUTTON_ACTIVE.ON
                  : BUTTON_ACTIVE.OFF
              }
              disabled={!(endDateModal || topicModal || searchModal)}
              onClick={handleSearch}
              {...handlersFuntion(handleSearch)}>
              {translate.Search}
            </Filter.BtnSend>
          </Filter.BlockSendButton>
        </div>
      </Filter.SectionFilter>
    </>
  );
}
