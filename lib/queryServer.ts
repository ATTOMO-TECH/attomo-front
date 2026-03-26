import qs from 'qs';

export const queryObjectHome = (router: any) => {
  const data: any = {
    locale: router,
    filters: {
      featuredInHome: {
        $eq: true,
      },
    },
  };
  const queryQs = qs.stringify(data, {
    encodeValuesOnly: true,
  });

  return queryQs;
};

export const queryObjectAllCases = (router: string) => {
  const data: any = {
    locale: router,
    filters: {},
  };
  const queryQs = qs.stringify(data, {
    encodeValuesOnly: true,
  });

  return queryQs;
};
