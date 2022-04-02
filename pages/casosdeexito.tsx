import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import * as qs from 'qs';
import Head from 'next/head';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
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
import Subtext from '../components/Text/subText';
import { servicesAnimations } from '../components/animations/animations';

function Cases() {
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
    if (search !== '') {
      filters = {
        ...filters,
        disciplines: {
          $containsi: search,
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

        <HeroCase
          toggle={toggleFilter}
          date={startDate}
          endDate={endDate}
          topic={topic}
          isOpen={isOpenFilter}
          scroll={scroll}
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
            initial={{ opacity: 0, y: '50%' }}
            onClick={toggleFilter}>
            <Styles.SelectFilterCases>
              <Styles.SectionFilter>
                <Subtext size="text-lg lg:py-4 ">
                  {translate.CasesFilter}
                </Subtext>
              </Styles.SectionFilter>
              <Styles.SelectFilter>
                <Styles.Select className="lg:w-11/12 w-full " disabled>
                  {topic === undefined ? (
                    <option value="">Tématica</option>
                  ) : (
                    <option value="">{topic}</option>
                  )}
                </Styles.Select>
              </Styles.SelectFilter>
              <Styles.SelectFilter>
                <Styles.Select className="lg:w-11/12 w-full " disabled>
                  {startDate === '' ||
                  undefined ||
                  null ||
                  endDate === '' ||
                  undefined ||
                  null ? (
                    <option value="">Selecciona fecha</option>
                  ) : (
                    <option value="">{`${
                      startDate
                        ? format(startDate, 'dd-MM-yyyy')
                        : 'Seleccionar fecha'
                    } 
                    ${
                      endDate ? format(endDate, '-  dd-MM-yyyy') : ''
                    }`}</option>
                  )}
                </Styles.Select>
              </Styles.SelectFilter>
            </Styles.SelectFilterCases>
          </motion.div>
        ) : (
          <></>
        )}
        <Styles.BlockSections>
          <SectionProjects
            Array={data?.data}
            shouldShowActions={undefined}
            servicesAnimations={undefined}
          />
        </Styles.BlockSections>
        <motion.div
          animate={shouldShowActions}
          variants={servicesAnimations}
          className="actions"
          transition={{
            delay: 0.2,
            type: 'spring',
            stiffness: 50,
            duration: 2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: '50%' }}>
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
        </motion.div>
        {!isOpenFilter ? <Footer subFooter={false} /> : <></>}
      </Styles.Body>
    </>
  );
}
export default Cases;
