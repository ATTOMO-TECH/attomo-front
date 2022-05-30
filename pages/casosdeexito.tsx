import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as qs from 'qs';
import { format } from 'date-fns';
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
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';
import BlockFilter from '../components/filter/blockFilter';

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
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : 'overflow-hidden'}>
        {!isOpenFilter && <Background />}

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
      </Styles.Body>
    </>
  );
}
export default Cases;
