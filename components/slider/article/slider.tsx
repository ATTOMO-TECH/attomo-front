// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef, useEffect, useState } from 'react';
import * as qs from 'qs';
import { useUseAllPost } from '../../../domain/useBlogDetails';
import RenderLoading from '../../loading/loading';
import ArticlesScrollArrow from '../arrows/arrows';
import Slide from '../slide/slide';

interface Props {
  mode: boolean;
  filter: string;
  id: number;
  renderTouch: boolean;
}

export default function ArticlesScroll({
  mode,
  filter,
  id,
  renderTouch,
}: Props) {
  /* console.log(id) */
  const [prevState, setMyPrev] = useState(null);
  const [nextState, setMyNext] = useState(null);

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

  useEffect(() => {
    setMyNext(nextRef.current);
    setMyPrev(prevRef.current);
  }, [data]);

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
            slidesPerView: data.data.length === 1 ? 1.5 : 3.5,
          },
        }}
        navigation={{
          prevEl: prevState,
          nextEl: nextState,
        }}>
        {data.data.map((articles: any) => (
          <div className={data.data.length === 1 ? 'lg:w-3/6' : ''}>
            <SwiperSlide
              key={`${articles.Tag}-${articles.id}`}
              className="swiper z-10">
              <Slide articles={articles} mode={mode} />
            </SwiperSlide>
          </div>
        ))}
        {data.meta.pagination.total > 2 && (
          <ArticlesScrollArrow
            mode={mode}
            prevRef={prevRef}
            nextRef={nextRef}
            numerSlide={data.meta.pagination.total}
            renderTouch={renderTouch}
          />
        )}
      </Swiper>
    </>
  );
}
