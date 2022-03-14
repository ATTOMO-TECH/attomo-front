// eslint-disable-next-line no-use-before-define
import React, { useEffect, useLayoutEffect, useState } from 'react';
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
import { useUseAllPost, useUseAllTags } from '../domain/useBlogDetails';
import { getLocale } from '../public/locales/getLocale';
import { Styles } from '../styles/styles';

function News() {
  const translate = getLocale();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState(
    'pagination[page]=1&pagination[pageSize]=3&populate=coverImage?populate=blog_tags',
  );
  const { data, isLoading } = useUseAllPost(query);
  const { data: Tags, isLoading: LoadingTags } = useUseAllTags();

  const [preData, setPreData] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddBlog = (value: number) => {
    setPage(value);
  };

  useLayoutEffect(() => {
    let queryObject: any = {
      pagination: {
        page,
        pageSize: 3,
      },
      populate: 'coverImage',
    };
    if (filter) {
      queryObject = {
        ...queryObject,
        filters: {
          blog_tags: {
            name: {
              $eq: filter,
            },
          },
        },
      };
    }
    const queryQs = qs.stringify(queryObject, {
      encodeValuesOnly: true,
    });
    setQuery(queryQs);
  }, [page, filter]);

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

  if (isLoading && !preData && LoadingTags) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenMid>
            {React.Children.toArray(
              translate.trends.map((value) => (
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
              )),
            )}
          </Styles.ScreenMid>
        </Styles.Center>
        <Styles.BlockTrends>
          <Title size="text-lg lg:py-4 font-PrimarySerif">
            {translate.trendsFilter}
          </Title>
          <Styles.Select
            name="select"
            onChange={(e: any) => setFilter(e.target.value)}>
            <option value="">{'Todas las noticias '}</option>
            {Tags?.data.map((options: any) => (
              <option
                value={options.attributes.name}
                key={options.attributes.name}>
                {options.attributes.name}
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
        </Styles.CenterFlex>
        <Footer subFooter={false} />
      </Styles.Body>
    </>
  );
}
export default News;
