// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { Navigation, Pagination } from 'swiper';
import { useRef, useEffect, useState } from 'react';
import * as qs from 'qs';
import Link from 'next/link';
import { darkTheme, lightTheme, StylesArticle } from '../style';
import { BUTTON_ACTIVE } from '../../../const/const';
import { useUseAllPost } from '../../../domain/useBlogDetails';
import RenderLoading from '../../loading/loading';
import ArticlesScrollArrow from '../arrows/arrows';
import useLongPressHook from '../../../hook/longPress';

interface Props {
  mode: boolean;
  filter: string;
  id: number;
}

export default function ArticlesScroll({ mode, filter, id }: Props) {
  const [prevState, setMyPrev] = useState(null);
  const [nextState, setMyNext] = useState(null);
  const [idValue, setId] = useState(id);

  const router = useRouter();

  const queryObject: any = {
    populate: 'coverImage',
    filters: {
      id: {
        $ne: id,
      },
      blog_tags: {
        name: {
          $containsi: filter,
        },
      },
    },
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data, isLoading } = useUseAllPost(queryQs);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleId = (idValueSlide: number) => {
    setId(idValueSlide);
  };

  useEffect(() => {
    setMyNext(nextRef.current);
    setMyPrev(prevRef.current);
  }, [data]);

  const handleIdrouter = () => {
    router.push(`/ATTOMOTrends/${idValue}`);
  };
  const [bind] = useLongPressHook('', handleIdrouter);

  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          '460': {
            slidesPerView: 1,
          },
          '1024': {
            slidesPerView: 3.5,
          },
        }}
        navigation={{
          prevEl: prevState,
          nextEl: nextState,
        }}>
        {data.data.map((articles: any) => (
          <SwiperSlide
            onTouchStart={() => handleId(articles.id)}
            key={`${articles.Tag}-${articles.id}`}
            className="swiper z-10">
            <Link href={`/ATTOMOTrends/${articles.id}`}>
              <StylesArticle.Img
                {...bind()}
                src={articles.attributes.coverImage.data.attributes.url}
                alt={articles.Text}
              />
            </Link>
            <StylesArticle.BlockText
              theme={mode === false ? lightTheme : darkTheme}>
              <StylesArticle.TopicText
                ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
              />
              <StylesArticle.TopicText ismode={BUTTON_ACTIVE.ON}>
                {articles.attributes.blog_tags.data[0].attributes.name}
              </StylesArticle.TopicText>
              <StylesArticle.TextBlog
                ismode={mode ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                {...bind()}>
                {articles.attributes.title}
              </StylesArticle.TextBlog>
            </StylesArticle.BlockText>
          </SwiperSlide>
        ))}
        {data.meta.pagination.total > 2 && (
          <ArticlesScrollArrow
            mode={mode}
            prevRef={prevRef}
            nextRef={nextRef}
            numerSlide={data.meta.pagination.total}
          />
        )}
      </Swiper>
    </>
  );
}
