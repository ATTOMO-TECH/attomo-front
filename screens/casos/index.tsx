// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import * as qs from 'qs';
import { format } from 'date-fns';
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { fadeInUp } from '../../components/animations/animations';
import BlockSection from '../../components/block/block';
import ButtonShare from '../../components/button/BtnShare';
import ModalFilter from '../../components/filter/filter';
import Footer from '../../components/footer/footer';
import HeroCase from '../../components/hero/heroCase';
import RenderLoading from '../../components/loading/loading';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import SectionProjects from '../../components/section/projects';
import { BUTTON_ACTIVE } from '../../const/const';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from '../../styles/styles';
import BlockFilter from '../../components/filter/blockFilter';
import { Props } from '../types';
import { getAllCases } from '../../domain/useCasesDetails';
import { handleInfinityDataCms } from '../../hook/utils';

function Cases({ data, locale }: Props) {
  const queryClient = useQueryClient();

  const [startDate, setStartDate] = useState<any>();
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const [endDate, setEndDate] = useState<any>();
  const [topic, setTopic] = useState<any>('');
  const [search, setSearch] = useState('');
  const [translate, setTranslate] = useState(getLocale(locale));

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    let isMounted = true;

    window.addEventListener('scroll', () => {
      if (isMounted) {
        if (window.scrollY > 20) {
          setScroll(false);
        } else {
          setScroll(true);
        }
      }
    });

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', () => {
        ('');
      });
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('position')) {
        window.localStorage.removeItem('position');
      }
    }
  }, []);

  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };

  const showScreen = true;
  const handleDate = (dateValue: any) => {
    setStartDate(dateValue[0]);
    setEndDate(dateValue[1]);
  };

  const getFilters = () => {
    let filters = {};
    if (showScreen) {
      filters = {
        ...filters,
        inServicesScreen: {
          $eq: true,
        },
      };
    }
    if (topic !== '') {
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
    filters: getFilters(),
    locale,
    populate: ['coverImage', 'disciplines', 'subservice'],
  };

  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });

  const {
    data: dataServices,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['useAllCases', queryQs],
    ({ pageParam }) => {
      const params = qs.stringify(
        {
          pagination: {
            page: pageParam,
            pageSize: 50,
          },
        },
        {
          encodeValuesOnly: true,
        },
      );
      return getAllCases(params, queryQs);
    },
    {
      enabled: !!queryQs && process.browser,
      initialData: data || {},
      getNextPageParam: (lastPage) => {
        if (
          lastPage?.meta?.pagination?.page <
          lastPage?.meta?.pagination?.pageCount
        ) {
          return +(lastPage?.meta?.pagination?.page || 0) + 1;
        }
        return null;
      },
    },
  );

  useEffect(() => {
    if (data) {
      data.sort((a: any, b: any) => {
        if (a.attributes.company > b.attributes.company) {
          return 1;
        }
        if (a.attributes.company < b.attributes.company) {
          return -1;
        }
        return 0;
      });
    }
  }, [data, locale]);

  const handleChangeReset = () => {
    setTopic('');
    setSearch('');
    setStartDate(null);
    setEndDate(null);
    queryClient.refetchQueries(['useAllCases']);
  };

  const handleDataView = () => {
    if (typeof window !== 'undefined') {
      return handleInfinityDataCms(dataServices);
    }
    return data;
  };

  if (!data) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : 'overflow-hidden'}>
        {isOpenFilter && (
          <ModalFilter
            isOpenFilter={isOpenFilter}
            toggle={toggleFilter}
            setDate={handleDate}
            setTopic={setTopic}
            setSearch={setSearch}
            startDate={startDate}
            endDate={endDate}
            topic={topic}
            search={search}
            locale={locale}
          />
        )}
        {!isOpenFilter && (
          <>
            <Menu isOpen={isOpen} toggle={toggle} logo mode />
            <Styles.Margin>
              <Nav toggle={toggle} logo mode isOpen={isOpen} />
            </Styles.Margin>
            <ButtonShare />
          </>
        )}
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
          <BlockFilter
            toggleFilter={toggleFilter}
            translate={translate}
            search={search}
            topic={topic}
            startDate={startDate}
            endDate={endDate}
            handleChangeReset={handleChangeReset}
          />
        ) : (
          <></>
        )}
        <Styles.BlockSections
          mode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}>
          <Styles.SectionProjects>
            {React.Children.toArray(
              handleDataView().map((values: any, i: number) => (
                <SectionProjects
                  i={i}
                  key={`SectionProjects${values.attributes.title}`}
                  values={values}
                  shouldShowActions={undefined}
                  servicesAnimations={fadeInUp}
                />
              )),
            )}
          </Styles.SectionProjects>

          {hasNextPage ? (
            <Styles.SectionMore>
              <Styles.BlockMore
                onClick={() => fetchNextPage()}
                onTouchStart={() => fetchNextPage()}>
                {translate.moreCases}
              </Styles.BlockMore>
            </Styles.SectionMore>
          ) : null}
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
              link={
                locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url
              }
            />
          ))}
        </Styles.Center>
        {!isOpenFilter ? <Footer subFooter={false} /> : <></>}
      </Styles.Body>
    </>
  );
}
export default Cases;
