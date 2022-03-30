import { useQuery } from 'react-query';
import { CASES } from '../lib/api';
import { get } from '../lib/restClient';

const getAllCases = async (lenguage: string, query?: string) => {
  const { data } = await get(CASES.FETCH_ALL(lenguage, query));
  return data;
};

const getCaseId = async (id: number, lenguage: string) => {
  const { data } = await get(CASES.FETCH_ID(id, lenguage));
  return data;
};
const getFilterCases = async (lenguage: string, query: string) => {
  const { data } = await get(CASES.FETCH_FILTER(lenguage, query));
  return data;
};

export function useUseFilterCases(lenguage: string, query: string) {
  return useQuery(['useAllCases'], () => getFilterCases(lenguage, query), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useUseAllCases(lenguage: string, query?: string) {
  return useQuery(
    ['useAllCases', lenguage, query],
    () => getAllCases(lenguage, query),
    {
      staleTime: 2500,
      notifyOnChangePropsExclusions: ['isStale'],
      refetchOnWindowFocus: false,
    },
  );
}
export function useaCase(id: number, lenguage: string) {
  return useQuery(['useACase', id], () => getCaseId(id, lenguage), {
    staleTime: 25000,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
