import { GetServerSideProps } from 'next';
import { getPostId } from '../domain/useBlogDetails';
import { getCaseId } from '../domain/useCasesDetails';
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
  const { slug } = context.query;
  const slugId: string = slug as string;
  const arrSlug = slugId.split('-');
  const id = Number(arrSlug[arrSlug.length - 1]);
  const { data } = await getPostId(Number(id));
  let statusCode = {};
  if (data.statusCode) {
    statusCode = { statusCode: 404 };
  }

  return {
    props: {
      data,
      locale,
      param: slugId,
      statusCode,
    },
  };
};
