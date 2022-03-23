import { useRouter } from 'next/router';
import { useState } from 'react';
import * as qs from 'qs';
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

function Cases() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const [isOpenFilter, SetIsOpenFilter] = useState<boolean>(false);
  const toggleFilter = () => {
    SetIsOpenFilter(!isOpenFilter);
  };
  const [date, setDate] = useState<Date[]>();
  const [topic, setTopic] = useState('');
  const [setSearch] = useState('');
  const handleDate = (dateValue: []) => {
    setDate(dateValue);
  };
  const handleTopic = (topicValue: string) => {
    setTopic(topicValue);
  };

  const queryObject: any = {
    populate: 'coverImage',
    // filters: {
    //   blog_tags: {
    //     name: {
    //       $containsi: topic,
    //     },
    //   },
    //   date: {
    //     $containsi: date,
    //   },
    //   attributes: {
    //     name: {
    //       $containsi: search,
    //     },
    //   },
    // },
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
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <ModalFilter
          isOpenFilter={isOpenFilter}
          toggle={toggleFilter}
          setDate={handleDate}
          setTopic={handleTopic}
          setSearch={setSearch}
        />
        {!isOpenFilter && <Menu isOpen={isOpen} toggle={toggle} logo mode />}
        <Styles.Margin>
          {!isOpenFilter && (
            <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
          )}
        </Styles.Margin>
        {!isOpenFilter && <ButtonShare />}
        {!isOpenFilter && (
          <>
            {/* {date?.length === undefined ? ( */}
            <HeroCase
              toggle={toggleFilter}
              date={date}
              topic={topic}
              isOpen={isOpen}
            />
            {/* ) : (
              <div className="w-full text-white m-auto z-0  relative h-48">
                <FilterCases
                  toggle={toggleFilter}
                  date={date}
                  topic={topic}
                  search={search}
                />
              </div>
            )} */}
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
