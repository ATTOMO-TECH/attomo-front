import { GetServerSideProps } from 'next';
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
import {
  BUTTON_ACTIVE,
  MENU_SCREENS_EN,
  MENU_SCREENS_ES,
} from '../const/const';
import { useUseAllCases } from '../domain/useCasesDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';
import { useAScreen } from '../domain/useScreensMetadata';
import { Metadata } from '../components/head/metadata';
import BlockFilter from '../components/filter/blockFilter';
import { MetadataSSR } from '../components/head/metadataSSR';
import { translateHeader } from '../hook/utils';
import Cases from '../screens/casos';
import { getServerSidePropsAllCases } from '../lib/serverSide';

export const getServerSideProps: GetServerSideProps =
  getServerSidePropsAllCases;

  useEffect(() => {
    if (locale) {
      setTranslate(getLocale(locale));
    }
  }, [locale]);

  if (locale === '/') {
    locale = 'es';
  }
  const { data: screen, isLoading: screenIsLoading } = useAScreen(
    locale === 'es' ? MENU_SCREENS_ES.CASES : MENU_SCREENS_EN.CASES,
    locale || 'es',
  );

  const [preData, setPreData] = useState<any[]>([]);
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
  const [page, setPage] = useState(1);
  const [endDate, setEndDate] = useState<any>();
  const [topic, setTopic] = useState<any>('');
  const [search, setSearch] = useState('');
  const showScreen = true;
  const handleDate = (dateValue: any) => {
    setStartDate(dateValue[0]);
    setEndDate(dateValue[1]);
  };
  const handleAddBlog = (value: number) => {
    setPage(value);
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
    locale: locale || 'es',
    populate: ['coverImage', 'disciplines', 'subservice'],
    pagination: {
      page,
      pageSize: 20,
    },
    filters: getFilters(),
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data, isLoading } = useUseAllCases(queryQs);

  useEffect(() => {
    if (data?.data) {
      data?.data.sort((a: any, b: any) => {
        if (a.attributes.company > b.attributes.company) {
          return 1;
        }
        if (a.attributes.company < b.attributes.company) {
          return -1;
        }
        return 0;
      });
      /* console.log(data.data) */
      if (page === 1) {
        setPreData([...data.data]);
      } else {
        setPreData([...preData, ...data.data]);
      }
    }
  }, [data, locale]);

  if (screenIsLoading || (isLoading && !preData)) {
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
export default function index(props: any) {
  const { metadata, locale, data, tags } = props;
  const metadataInfo = translateHeader(metadata, locale);

  return (
    <>
      <MetadataSSR screen={metadataInfo} />
      <Background />
      <Cases data={data} locale={locale} tags={tags} />
    </>
  );
}
