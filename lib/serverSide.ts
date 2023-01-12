import { GetServerSideProps } from 'next';
import { getCaseId } from '../domain/useCasesDetails';
import { getAllServices } from '../domain/useServices';

export const getServerSidePropsCases: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const slugId: string = slug as string;
  const arrSlug = slugId.split('-');
  const id = Number(arrSlug[arrSlug.length - 1]);
  const { data } = await getCaseId(Number(id), context.locale);

  return {
    props: {
      data,
      locale: context.locale,
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
