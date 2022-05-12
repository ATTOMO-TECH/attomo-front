// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as qs from 'qs';
import { useRouter } from 'next/router';
import { format } from 'date-fns';
import Background from '../components/animations/background';
import BlockSection from '../components/block/block';
import BlockBlog from '../components/blog/blog';
import { Blogstyles } from '../components/blog/style';
import Footer from '../components/footer/footer';
import InputNew from '../components/input/inputNews';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE, MENU_SCREENS } from '../const/const';
import { useUseFeaturedPost, useUseAllTags } from '../domain/useBlogDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';
import Subtext from '../components/Text/subText';
import CalendarPickerInputRange from '../components/calendar/input/calendarRange';
import SelectFilterMenu from '../components/filter/selectedFilterMenu';
import { Metadata } from '../components/head/metadata';
import { useAScreen } from '../domain/useScreensMetadata';

function News() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const translate = getLocale();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState(
    'pagination[page]=1&pagination[pageSize]=3&populate=coverImage&filters[featured][$eq]=true',
  );
  const { data, isLoading } = useUseFeaturedPost(query);
  const { data: Tags, isLoading: isLoadingTags } = useUseAllTags(
    locale || 'es',
  );
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    MENU_SCREENS.TRENDS,
    locale || 'es',
  );
  const [startDate, setStartDateFilter] = useState<any>();
  const [endDate, setEndDateFilter] = useState<any>();
  const [preData, setPreData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onChangeTopic = (e: any) => {
    setFilter(e.value);
  };
  const handleAddBlog = (value: number) => {
    setPage(value);
  };

  useEffect(() => {
    let queryObject: any = {
      pagination: {
        page,
        pageSize: 3,
      },
      populate: 'coverImage',
      locale: locale || 'es',
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
                $gte:
                  startDate !== null ? format(startDate, 'yyyy-MM-dd') : null,
              },
            },
            {
              createdAt: {
                $lte: endDate !== null ? format(endDate, 'yyyy-MM-dd') : null,
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
            $gte: startDate !== null ? format(startDate, 'yyyy-MM-dd') : null,
          },
        },
      };
    } else if (endDate) {
      queryObject = {
        ...queryObject,
        filters: {
          ...queryObject.filters,
          createdAt: {
            $lte: endDate !== null ? format(endDate, 'yyyy-MM-dd') : null,
          },
        },
      };
    }
    const queryQs = qs.stringify(queryObject, {
      encodeValuesOnly: true,
    });
    setQuery(queryQs);
  }, [page, filter, startDate, endDate, locale]);

  useEffect(() => {
    setPage(1);
  }, [filter]);
  useEffect(() => {
    if (data?.data) {
      if (page === 1) {
        setPreData([...data.data]);
      } else {
        setPreData([...preData, ...data.data]);
      }
    }
  }, [data]);

  if ((isLoading && !preData) || isLoadingTags || screenIsLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }
  const DEPARTMENT = Tags?.data.map((values: any) => ({
    label: values.attributes.name,
    value: values.attributes.name,
  }));
  const handleChangeReset = () => {
    setFilter('');
    setStartDateFilter(null);
    setEndDateFilter(null);
  };
  const change: boolean = !!startDate || !!endDate || !!filter;

  return (
    <>
      <Metadata screen={screen} />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Background />
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenWS>
            {React.Children.toArray(
              translate.trends.map((value) => (
                <Styles.BlockDiv>
                  <Title size="lg:text-4xl md:text-3xl text-2xl text-xl lg:pr-0  lg:pr-0 pb-12 lg:w-5/6 ">
                    {value.Text}
                  </Title>
                  <Styles.BlockInputSend>
                    <Subtext size=" md:text-lg lg:text-base md:w-2/6  lg:text-left font-Primary">
                      {value.Subtext}
                    </Subtext>
                    <Styles.BlockFullInput>
                      <InputNew />
                    </Styles.BlockFullInput>
                  </Styles.BlockInputSend>
                </Styles.BlockDiv>
              )),
            )}
          </Styles.ScreenWS>
        </Styles.Center>
        <Styles.BlockTrends>
          <Styles.SectionFilter>
            <Subtext size="text-lg py-4 ">{translate.trendsFilter}</Subtext>
          </Styles.SectionFilter>
          <Styles.SelectFilter>
            <SelectFilterMenu
              selected={filter}
              options={DEPARTMENT}
              valueLabel={filter === '' ? `${translate.allServices}` : filter}
              name={filter}
              onChange={onChangeTopic}
            />
          </Styles.SelectFilter>
          <Styles.SelectFilterNM>
            <CalendarPickerInputRange
              setStartDateFilter={setStartDateFilter}
              setEndDateFilter={setEndDateFilter}
              startDate={startDate}
              endDate={endDate}
            />
          </Styles.SelectFilterNM>
          <motion.svg
            className="cursor-pointer w-10 h-6"
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
        </Styles.BlockTrends>
        <BlockBlog dataBlog={preData} />
        {data &&
          (data.meta.pagination.page !== data.meta.pagination.pageCount &&
          data.meta.pagination.pageCount !== 0 ? (
            <Blogstyles.SectionMore>
              <Blogstyles.BlockMore
                onClick={() => handleAddBlog(data.meta.pagination.page + 1)}
                onTouchStart={() =>
                  handleAddBlog(data.meta.pagination.page + 1)
                }>
                {translate.seeMoreTrends}
              </Blogstyles.BlockMore>
            </Blogstyles.SectionMore>
          ) : null)}
        <Styles.Center>
          {React.Children.toArray(
            translate.contact.map((values) => (
              <BlockSection
                key={values.Link}
                text={values.Text}
                button={values.Link}
                text2=""
                button2=""
                mode
                link="/contacto"
              />
            )),
          )}
        </Styles.Center>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default News;
