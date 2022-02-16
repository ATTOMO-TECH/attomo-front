import { useQuery } from 'react-query';
import { CASES } from '../lib/api';
import { get } from '../lib/restClient';

const getAllCases = async (lenguage: string) => {
  const { data } = await get(CASES.FETCH_ALL(lenguage));
  return data;
};

const getCaseId = async (id: number) => {
  const { data } = await get(CASES.FETCH_ID(id));
  return data;
};

export function useUseAllCases(lenguage: string) {
  return useQuery(['useAllCases'], () => getAllCases(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useaCase(id: number) {
  return useQuery(['useACase', id], () => getCaseId(id), {
    staleTime: 25000,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
