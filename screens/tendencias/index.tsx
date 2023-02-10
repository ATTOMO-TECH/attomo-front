// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as qs from 'qs';
import { useInfiniteQuery } from 'react-query';
import BlockSection from '../../components/block/block';
import BlockBlog from '../../components/blog/blog';
import Footer from '../../components/footer/footer';
import InputNew from '../../components/input/inputNews';
import Menu from '../../components/nav/menu';
import Nav from '../../components/nav/nav';
import MainTitle from '../../components/Text/mainTitle';
import RenderLoading from '../../components/loading/loading';
import ParagraphText from '../../components/Text/paragraphText';
import { BUTTON_ACTIVE } from '../../const/const';
import { getAllPost } from '../../domain/useBlogDetails';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from '../../styles/styles';
import CalendarPickerInputRange from '../../components/calendar/input/calendarRange';
import InputSelectFilter from '../../components/form/selectFilter';
import { formatDateFilter } from '../../hook/date';
import ShowMore from '../../components/block/showMore';
import { Props } from '../types';
import { handleInfinityDataCms } from '../../hook/utils';

function News({ data, locale, tags }: Props) {
  const [translate, setTranslate] = useState(getLocale(locale));
  const [filter, setFilter] = useState('');
  const [startDate, setStartDateFilter] = useState<Date>();
  const [endDate, setEndDateFilter] = useState<Date>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  let queryObject: any = {
    locale,
    populate: 'coverImage',
    filter: {},
  };
  if (filter) {
    queryObject = {
      ...queryObject,
      filters: {
        ...queryObject.filters,
        blog_tags: {
          name: {
            $eq: filter,
          },
        },
      },
    };
  }
  if (startDate && endDate) {
    queryObject = {
      ...queryObject,
      filters: {
        ...queryObject.filters,
        $and: [
          {
            createdAt: {
              $gte: startDate !== null ? formatDateFilter(startDate) : null,
            },
          },
          {
            createdAt: {
              $lte: endDate !== null ? formatDateFilter(endDate) : null,
            },
          },
        ],
      },
    };
  } else if (startDate) {
    queryObject = {
      ...queryObject,
      filters: {
        ...queryObject.filters,
        createdAt: {
          $gte: startDate !== null ? formatDateFilter(startDate) : null,
        },
      },
    };
  } else if (endDate) {
    queryObject = {
      ...queryObject,
      filters: {
        ...queryObject.filters,
        createdAt: {
          $lte: endDate !== null ? formatDateFilter(endDate) : null,
        },
      },
    };
  }
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });

  const {
    data: dataBlog,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['useAllPost', queryQs],
    ({ pageParam }) => {
      const params = qs.stringify(
        {
          pagination: {
            page: pageParam,
            pageSize: 3,
          },
        },
        {
          encodeValuesOnly: true,
        },
      );
      return getAllPost(params, queryQs);
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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onChangeTopic = (e: any) => {
    setFilter(e);
  };

  const DEPARTMENT = tags?.map((values: any) => ({
    text: values.attributes.name,
    value: values.attributes.name,
  }));

  const handleChangeReset = () => {
    setFilter('');
    setStartDateFilter(undefined);
    setEndDateFilter(undefined);
  };

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  DEPARTMENT?.push({
    value: '',
    text: translate.allServices,
  });
  DEPARTMENT?.reverse();
  const change: boolean = !!startDate || !!endDate || !!filter;

  const handleDataView = () => {
    if (typeof window !== 'undefined') {
      return handleInfinityDataCms(dataBlog);
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
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenWS>
            {translate.trends.map((value) => (
              <Styles.BlockDiv key={value.Text}>
                <MainTitle size="lg:text-4xl md:text-3xl text-2xl text-xl lg:pr-0  lg:pr-0 pb-12 lg:w-5/6 ">
                  {value.Text}
                </MainTitle>
                <Styles.BlockInputSend>
                  <ParagraphText size=" md:text-lg lg:text-base md:w-2/6  lg:text-left font-Primary">
                    {value.Subtext}
                  </ParagraphText>
                  <Styles.BlockFullInput>
                    <InputNew idInput="#InputTrends" />
                  </Styles.BlockFullInput>
                </Styles.BlockInputSend>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenWS>
        </Styles.Center>
        <Styles.BlockTrends>
          <Styles.SectionFilter className="flex  w-full items-center justify-between">
            <ParagraphText size="text-lg py-4 ">
              {translate.trendsFilter}
            </ParagraphText>
            <motion.svg
              className="cursor-pointer w-10 h-6 md:hidden"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transition={{ duration: 1, ease: 'easeInOut' }}
              onClick={handleChangeReset}
              onTouchStart={handleChangeReset}>
              <motion.path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth={change ? '2' : 0}
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
                strokeWidth={change ? '2' : 0}
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
          </Styles.SectionFilter>
          <Styles.SelectFilterTrends id="MobileFilterTrends">
            <InputSelectFilter
              selected={filter}
              options={DEPARTMENT}
              valueLabel={filter}
              name="filter"
              onChange={onChangeTopic}
              handleValue={setFilter}
            />
          </Styles.SelectFilterTrends>
          <Styles.SelectFilterNM>
            <CalendarPickerInputRange
              placeholderFrom={translate.FromDate}
              placeholderTo={translate.ToDate}
              setStartDateFilter={setStartDateFilter}
              setEndDateFilter={setEndDateFilter}
              startDate={startDate}
              endDate={endDate}
            />
          </Styles.SelectFilterNM>
          <motion.svg
            className="cursor-pointer w-10 h-6 hidden md:block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transition={{ duration: 1, ease: 'easeInOut' }}
            onClick={handleChangeReset}
            onTouchStart={handleChangeReset}>
            <motion.path
              d="M18 6L6 18"
              stroke="white"
              strokeWidth={change ? '2' : 0}
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
              strokeWidth={change ? '2' : 0}
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
        </Styles.BlockTrends>

        {React.Children.toArray(
          handleDataView().map((blog: any) => <BlockBlog data={blog} />),
        )}
        <ShowMore
          hasNextPage={hasNextPage}
          handleAddBlog={fetchNextPage}
          translate={translate}
        />
        <Styles.Center>
          {translate.contact.map((values) => (
            <BlockSection
              key={values.Text}
              text={values.Text}
              button={values.Link}
              text2=""
              button2=""
              mode
              link="/contacto"
            />
          ))}
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default News;
