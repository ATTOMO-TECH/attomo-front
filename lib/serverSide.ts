import { GetServerSideProps } from 'next';
import * as qs from 'qs';
import { MENU_SCREENS_EN, MENU_SCREENS_ES, QUERY_PARAMS } from '../const/const';
import { getAllPost, getAllTags, getPostId } from '../domain/useBlogDetails';
import { getAllCases, getCaseId } from '../domain/useCasesDetails';
import {
  getScreensCanonical,
  getScreensId,
} from '../domain/useScreensMetadata';
import { getAllServices } from '../domain/useServices';

export const getServerSidePropsCases: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const { locale } = context;
  const slugId: string = slug as string;
  const arrSlug = slugId.split('-');
  const id = Number(arrSlug[arrSlug.length - 1]);
  const { data } = await getCaseId(Number(id), locale);
  let statusCode = {};
  if (data.statusCode) {
    statusCode = { statusCode: 404 };
  }

  return {
    props: {
      data,
      locale,
      statusCode,
    },
  };
};

export const getServerSidePropsConsultora: GetServerSideProps = async (
  context,
) => {
  const { locale } = context;
  const { data } = await getAllServices(locale);
  const { slug } = context.query;
  const slugId: string = slug as string;

  return {
    props: {
      data,
      locale,
      param: slugId,
    },
  };
};

export const getServerSidePropsTendencias: GetServerSideProps = async (
  context,
) => {
  const { locale } = context;
  const { slug, tags } = context.query;
  const slugId: string = slug as string;
  const arrSlug = slugId.split('-');
  const id = Number(arrSlug[arrSlug.length - 1]);
  const { data } = await getPostId(Number(id));

  const queryObject: any = {
    populate: 'coverImage',
    locale: locale || 'es',
    filters: {
      blog_tags: {
        name: {
          $containsi: tags,
        },
      },
    },
  };

  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data: relatedPost } = await getAllPost(queryQs);

  let statusCode = {};
  if (data.statusCode) {
    statusCode = { statusCode: 404 };
  }

  return {
    props: {
      data,
      relatedPost,
      locale,
      param: slugId,
      statusCode,
    },
  };
};

export const getServerSidePropsTrend: GetServerSideProps = async (context) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.TRENDS : MENU_SCREENS_EN.TRENDS,
    locale,
  );
  const { data } = await getAllPost(
    `${QUERY_PARAMS.ALL_POST}&locale=${locale}`,
  );
  const { data: tags } = await getAllTags(locale);
  const canonical = await getScreensCanonical();
  const canonicalHref = canonical.data;

  return {
    props: {
      metadata,
      locale,
      data,
      tags,
      canonicalHref,
    },
  };
};

export const getServerSidePropsAllCases: GetServerSideProps = async (
  context,
) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.CASES : MENU_SCREENS_EN.CASES,
    locale,
  );
  const queryObject: any = {
    locale: locale || 'es',
    populate: ['*'],
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data } = await getAllCases(`locale=${locale}`, queryQs);
  const { data: tags } = await getAllTags(locale);
  const canonical = await getScreensCanonical();
  const canonicalHref = canonical.data;
  return {
    props: {
      metadata,
      locale,
      data,
      tags,
      canonicalHref,
    },
  };
};

export const getServerSidePropsServices: GetServerSideProps = async (
  context,
) => {
  const { locale } = context;
  const { data: metadata } = await getScreensId(
    locale === 'es' ? MENU_SCREENS_ES.SERVICES : MENU_SCREENS_EN.SERVICES,
    locale,
  );
  const { data } = await getAllServices(locale);
  const queryObject: any = {
    populate: 'coverImage',
    locale: locale || 'es',
    filters: {
      blog_tags: {
        name: {
          $containsi: data?.attributes?.blog_tags.data[0]?.attributes?.name,
        },
      },
    },
  };
  const queryQs = qs.stringify(queryObject, {
    encodeValuesOnly: true,
  });
  const { data: relatedPost } = await getAllPost(queryQs);
  const canonical = await getScreensCanonical();
  const canonicalHref = canonical.data;

  return {
    props: {
      metadata,
      locale,
      data,
      relatedPost,
      canonicalHref,
    },
  };
};
