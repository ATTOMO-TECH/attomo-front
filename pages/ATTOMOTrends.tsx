// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import * as qs from 'qs';
import Head from 'next/head';
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
import Subtext from '../components/Text/subText';

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

  useEffect(() => {
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
      <Head>
        <title>#ATTOMOtrends</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BgComponent />
      <Styles.Body mode={isOpen ? BUTTON_ACTIVE.ON : ''}>
        <Menu isOpen={isOpen} toggle={toggle} logo mode />
        <Styles.Margin>
          <Nav toggle={toggle} logo mode bgFull isOpen={isOpen} />
        </Styles.Margin>
        <Styles.Center>
          <Styles.ScreenWS>
            {React.Children.toArray(
              translate.trends.map((value) => (
                <Styles.BlockDiv>
                  <Title size="md:text-5xl lg:pt-24 lg:pr-0 pb-12 lg:w-5/6 pt-20 ">
                    {value.Text}
                  </Title>
                  <Styles.BlockInputSend>
                    <Subtext size=" md:text-lg lg:text-base md:w-3/6  lg:text-left font-Secundary">
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
            {translate.seeMoreTrends}
          </Blogstyles.BlockMore>
        </Blogstyles.SectionMore>

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
