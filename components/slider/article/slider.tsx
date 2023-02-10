// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef, useEffect, useState } from 'react';
import * as qs from 'qs';
import { useUseAllPost } from '../../../domain/useBlogDetails';

import ArticlesScrollArrow from '../arrows/arrows';
import Slide from '../slide/slide';
import RenderLoading from '../../loading/loading';

interface Props {
  mode: boolean;
  filter: string;
  id: number;
  renderTouch: boolean;
  relatedPost?: any;
  locale?: string;
}

export default function ArticlesScroll({
  mode,
  filter,
  id,
  renderTouch,
  relatedPost,
  locale,
}: Props) {
  /* console.log(id) */
  const [prevState, setMyPrev] = useState(null);
  const [nextState, setMyNext] = useState(null);
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  const queryObject: any = {
    populate: 'coverImage',
    locale: locale || 'es',
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
  const { data } = useUseAllPost(queryQs, { data: relatedPost });

  const handleDataView = () => {
    if (typeof window !== 'undefined') {
      return data?.data;
    }
    return relatedPost;
  };

  useEffect(() => {
    setMyNext(nextRef.current);
    setMyPrev(prevRef.current);
  }, [data]);

  if (!relatedPost) {
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
            slidesPerView: handleDataView()?.length >= 1 ? 1.5 : 3.5,
          },
        }}
        navigation={{
          prevEl: prevState,
          nextEl: nextState,
        }}>
        {handleDataView().map((articles: any) => (
          <div
            key={articles.id}
            className={handleDataView().length >= 1 ? 'lg:w-3/6' : ''}>
            <SwiperSlide
              key={`${articles.Tag}-${articles.id}`}
              className="swiper z-10">
              <Slide articles={articles} mode={mode} />
            </SwiperSlide>
          </div>
        ))}
        {handleDataView().length > 2 && (
          <ArticlesScrollArrow
            mode={mode}
            prevRef={prevRef}
            nextRef={nextRef}
            numerSlide={handleDataView().length}
            renderTouch={renderTouch}
          />
        )}
      </Swiper>
    </>
  );
}
