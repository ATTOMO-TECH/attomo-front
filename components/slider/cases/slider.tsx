// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useRef, useState, useEffect } from 'react';
import * as qs from 'qs';
import { useRouter } from 'next/router';
import { useUseFilterCases } from '../../../domain/useCasesDetails';
import RenderLoading from '../../loading/loading';
import ArticlesScrollArrow from '../arrows/arrows';
import SlideCases from '../slide/slideCases';

interface Props {
  mode: boolean;
  filter: string;
  id: string | string[] | undefined;
  renderTouch: boolean;
}

export default function CasesScroll({ mode, filter, id, renderTouch }: Props) {
  const [prevState, setMyPrev] = useState(null);
  const [nextState, setMyNext] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const router = useRouter();

  let { locale } = router;

  const queryObject: any = {
    filters: {
      id: {
        $ne: id,
      },
      subservice: {
        name: {
          $containsi: filter,
        },
      },
    },
  };

  if (locale === '/') {
    locale = 'es';
  }

  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data, isLoading } = useUseFilterCases(locale || 'es', queryQs);

  useEffect(() => {
    setMyNext(nextRef.current);
    setMyPrev(prevRef.current);
  }, [data]);

  if (isLoading) {
    return <RenderLoading mode={false} />;
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
            slidesPerView: 'auto',
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
          <SwiperSlide key={articles.attributes.company} className="swiper ">
            <SlideCases articles={articles} mode={mode} />
          </SwiperSlide>
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
