import { useRouter } from 'next/router';
import { useState } from 'react';
import * as qs from 'qs';
import Head from 'next/head';
import { format } from 'date-fns';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import ButtonShare from '../components/button/BtnShare';
import ModalFilter from '../components/filter/filter';
import Footer from '../components/footer/footer';
import HeroCase from '../components/hero/heroCase';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import SectionProjects from '../components/section/projects';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllCases } from '../domain/useCasesDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';
import FilterCasesft from '../components/input/filterCasesft';

function Cases() {
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
    if (topic?.label) {
      filters = {
        ...filters,
        disciplines: {
          name: {
            $containsi: topic?.label,
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
              $gte: format(startDate, 'yyyy-MM-dd'),
            },
          },
          {
            createdAt: {
              $lte: format(endDate, 'yyyy-MM-dd'),
            },
          },
        ],
      };
    } else if (startDate) {
      filters = {
        ...filters,
        createdAt: {
          $gte: format(startDate, 'yyyy-MM-dd'),
        },
      };
    } else if (endDate) {
      filters = {
        ...filters,
        createdAt: {
          $lte: format(endDate, 'yyyy-MM-dd'),
        },
      };
    }
    return filters;
  };
  const queryObject: any = {
    populate: ['coverImage', 'disciplines'],

    filters: getFilters(),
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });

  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data, isLoading } = useUseAllCases(locale || 'es', queryQs);

  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }
  const translate = getLocale();

  return (
    <>
      <Head>
        <title>Casos de éxito ATTOMO - Clientes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BgComponent />
      <ModalFilter
        isOpenFilter={isOpenFilter}
        toggle={toggleFilter}
        setDate={handleDate}
        setTopic={handleTopic}
        setSearch={setSearch}
      />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        {!isOpenFilter && <Menu isOpen={isOpen} toggle={toggle} logo mode />}
        <Styles.Margin>
          {!isOpenFilter && (
            <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
          )}
        </Styles.Margin>
        {!isOpenFilter && <ButtonShare />}
        {!isOpenFilter && (
          <>
            {topic !== {} ? (
              <HeroCase
                toggle={toggleFilter}
                date={startDate}
                endDate={endDate}
                topic={topic}
                isOpen={isOpen}
              />
            ) : (
              <div className="w-full text-white m-auto z-0 relative  pt-36">
                <FilterCasesft
                  toggle={toggleFilter}
                  startDate={startDate}
                  endDate={endDate}
                  topic={topic}
                  search={search}
                />
              </div>
            )}
            <Styles.BlockSections>
              <SectionProjects
                Array={data?.data}
                shouldShowActions={undefined}
                servicesAnimations={undefined}
              />
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
            <Footer subFooter={false} />
          </>
        )}
      </Styles.Body>
    </>
  );
}
export default Cases;
