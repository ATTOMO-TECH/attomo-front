import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as qs from 'qs';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { useQueryClient } from 'react-query';
import Background from '../components/animations/background';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import ModalFilter from '../components/filter/filter';
import Footer from '../components/footer/footer';
import HeroCase from '../components/hero/heroCase';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { useUseAllCases } from '../domain/useCasesDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';
import Subtext from '../components/Text/subText';
import { servicesAnimations } from '../components/animations/animations';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';

function Cases() {
  const queryClient = useQueryClient();

  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.CASES,
    locale || 'es',
  );
  const translate = getLocale();
  const [shouldShowActions] = useState(false);
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const [startDate, setStartDate] = useState<any>();
  const [endDate, setEndDate] = useState<any>();
  const [topic, setTopic] = useState<any>('');
  const [search, setSearch] = useState('');

  const handleDate = (dateValue: any) => {
    setStartDate(dateValue[0]);
    setEndDate(dateValue[1]);
  };
  const handleTopic = (topicValue: string) => {
    setTopic(topicValue);
  };

  const getFilters = () => {
    let filters = {};
    if (topic !== undefined) {
      filters = {
        ...filters,
        subservice: {
          name: {
            $containsi: topic,
          },
        },
      };
    }
    if (startDate && endDate) {
      filters = {
        ...filters,
        $and: [
          {
            createdAt: {
              $gte: startDate !== null ? format(startDate, 'yyyy-MM-dd') : null,
            },
          },
          {
            createdAt: {
              $lte: endDate !== null ? format(endDate, 'yyyy-MM-dd') : null,
            },
          },
        ],
      };
    } else if (startDate) {
      filters = {
        ...filters,
        createdAt: {
          $gte: startDate !== null ? format(startDate, 'yyyy-MM-dd') : null,
        },
      };
    } else if (endDate) {
      filters = {
        ...filters,
        createdAt: {
          $lte: endDate !== null ? format(endDate, 'yyyy-MM-dd') : null,
        },
      };
    }
    if (search !== '') {
      filters = {
        ...filters,
        title: {
          $containsi: search,
        },
      };
    }
    return filters;
  };
  const queryObject: any = {
    populate: ['coverImage', 'disciplines', 'subservice'],

    filters: getFilters(),
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data, isLoading } = useUseAllCases(locale || 'es', queryQs);

  const [isLoadingFirst, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  if (isLoadingFirst || screenIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }
  const handleChangeReset = () => {
    setTopic('');
    setSearch('');
    setStartDate(null);
    setEndDate(null);
    queryClient.refetchQueries(['useAllCases']);
  };
  const change: boolean = !!startDate || !!endDate || !!topic || !!search;
  if (screenIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Metadata screen={screen} />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Background />
        <div className="z-100">
          {isOpenFilter && (
            <ModalFilter
              isOpenFilter={isOpenFilter}
              toggle={toggleFilter}
              setDate={handleDate}
              setTopic={handleTopic}
              setSearch={setSearch}
              startDate={startDate}
              endDate={endDate}
              topic={topic}
              search={search}
              locale={locale}
            />
          )}
          {!isOpenFilter && <Menu isOpen={isOpen} toggle={toggle} logo mode />}
          <Styles.Margin>
            {!isOpenFilter && <Nav toggle={toggle} logo mode isOpen={isOpen} />}
          </Styles.Margin>
          {!isOpenFilter && <ButtonShare />}
          <HeroCase
            OpenMenu={isOpen}
            toggle={toggleFilter}
            date={startDate}
            endDate={endDate}
            topic={topic}
            isOpen={isOpenFilter}
            scroll={scroll}
            handleChangeReset={handleChangeReset}
          />
          {!scroll ? (
            <motion.div
              animate={shouldShowActions}
              variants={servicesAnimations}
              className="actions cursor-pointer -pb-36 lg:-mb-6 lg:pt-12"
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 50,
                duration: 2,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: '50%' }}>
              <Styles.SelectFilterCases>
                <Styles.SectionFilter
                  onClick={toggleFilter}
                  onTouchStart={toggleFilter}>
                  <Subtext size="text-lg lg:py-4 ">
                    {translate.CasesFilter}
                  </Subtext>
                </Styles.SectionFilter>
                <Styles.SelectFilter
                  onClick={toggleFilter}
                  onTouchStart={toggleFilter}>
                  <Styles.Select
                    className="lg:w-8/12 w-full cursor-pointer "
                    disabled>
                    {search === '' || search === undefined ? (
                      <option value="">{translate.Services}</option>
                    ) : (
                      <option value="">{search}</option>
                    )}
                  </Styles.Select>
                </Styles.SelectFilter>
                <Styles.SelectFilter
                  onClick={toggleFilter}
                  onTouchStart={toggleFilter}>
                  <Styles.Select
                    className="lg:w-8/12  w-full cursor-pointer "
                    disabled>
                    {topic === '' || topic === undefined ? (
                      <option value="">{translate.Topic}</option>
                    ) : (
                      <option value="">{topic}</option>
                    )}
                  </Styles.Select>
                </Styles.SelectFilter>
                <Styles.SelectFilter onClick={toggleFilter}>
                  <Styles.Select
                    className="lg:w-10/12 w-full cursor-pointer "
                    disabled>
                    {startDate === '' ||
                    undefined ||
                    null ||
                    endDate === '' ||
                    undefined ||
                    null ? (
                      <option value="">{translate.SelectDate}</option>
                    ) : (
                      <option value="">{`${
                        startDate
                          ? format(startDate, 'dd-MM-yyyy')
                          : `${translate.SelectDate}`
                      } 
                    ${
                      endDate ? format(endDate, '-  dd-MM-yyyy') : ''
                    }`}</option>
                    )}
                  </Styles.Select>
                </Styles.SelectFilter>
                <motion.svg
                  className="cursor-pointer w-1/6 lg:w-auto"
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
                      !scroll
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
                      !scroll
                        ? { pathLength: 1, type: 'tween' }
                        : { pathLength: 0, type: 'spring' }
                    }
                    transition={{ duration: 1, ease: 'easeInOut' }}
                  />
                </motion.svg>
              </Styles.SelectFilterCases>
            </motion.div>
          ) : (
            <></>
          )}
          <Styles.BlockSections>
            {!isLoading ? (
              <SectionProjects
                data={data?.data}
                shouldShowActions={undefined}
                servicesAnimations={undefined}
              />
            ) : (
              <RenderLoading mode={false} />
            )}
          </Styles.BlockSections>
          <Styles.Center>
            {translate.contact.map((values) => (
              <BlockSection
                key={values.Link}
                text={values.Text}
                button={values.Link}
                text2=""
                button2=""
                mode
                link="/contacto"
              />
            ))}
          </Styles.Center>
          {!isOpenFilter ? <Footer subFooter={false} /> : <></>}
        </div>
      </Styles.Body>
    </>
  );
}
export default Cases;
