import { useEffect, useState } from 'react';
import * as qs from 'qs';
import BgComponent from '../components/animations/bg';
import BlockSection from '../components/block/block';
import BlockBlog from '../components/blog/blog';
import { Blogstyles } from '../components/blog/style';
import Footer from '../components/footer/footer';
import InputNew from '../components/input/inputNews';
import RenderLoading from '../components/loading/loading';
import Menu from '../components/nav/menu';
import Nav from '../components/nav/nav';
import Title from '../components/Text/title';
import { BUTTON_ACTIVE } from '../const/const';
import { useUseAllPost } from '../domain/useBlogDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function News() {
  const translate = getLocale();
  const [params, setParams] = useState(1);
  const [query, setQuery] = useState(
    'pagination[page]=1&pagination[pageSize]=3&populate=coverImage',
  );
  const { data, isLoading } = useUseAllPost(query);
  const [preData, SetPreData] = useState<any[]>([]);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const handleAddBlog = (value: number) => {
    setParams(value);
  };
  useEffect(() => {
    if (data) {
      SetPreData([...preData, data.data]);
    }
  }, [data]);
  useEffect(() => {
    const queryQs = qs.stringify(
      {
        pagination: {
          page: params,
          pageSize: 3,
        },
        populate: 'coverImage',
      },

      {
        encodeValuesOnly: true,
      },
    );

    setQuery(queryQs);
  }, [params]);

  const OptionsSelect: {
    Option: string;
  }[] = [
    {
      Option: 'Estrategia1',
    },
    {
      Option: 'Estrategia2',
    },
    {
      Option: 'Estrategia3',
    },
  ];

  if (isLoading && !preData) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <BgComponent />
      <Styles.Body ismode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>

        <Styles.Center>
          <Styles.ScreenMid>
            {translate.trends.map((value) => (
              <Styles.BlockDiv>
                <Title size="text-4xl lg:pt-2 lg:pr-10 pb-24 w-full pt-20 lg:w-5/6">
                  {value.Text}
                </Title>

                <Styles.BlockInputSend>
                  <Title size="text-xl lg:py-4 lg:w-auto w-full py-6 lg:pr-5">
                    {value.Subtext}
                  </Title>
                  <Styles.BlockFullInput>
                    <InputNew />
                  </Styles.BlockFullInput>
                </Styles.BlockInputSend>
              </Styles.BlockDiv>
            ))}
          </Styles.ScreenMid>
        </Styles.Center>

        <Styles.BlockTrends>
          <Title size="text-lg lg:py-4 font-PrimarySerif">
            {translate.trendsFilter}
          </Title>
          <Styles.Select name="select">
            {OptionsSelect.map((options) => (
              <option value={options.Option} key={options.Option}>
                {options.Option}
              </option>
            ))}
          </Styles.Select>
        </Styles.BlockTrends>
        <BlockBlog dataBlog={preData} />
        <Blogstyles.SectionMore>
          <Blogstyles.BlockMore
            onClick={() => handleAddBlog(data.meta.pagination.page + 1)}>
            Ver más noticias
          </Blogstyles.BlockMore>
        </Blogstyles.SectionMore>
        <Styles.CenterFlex>
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
        </Styles.CenterFlex>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default News;
