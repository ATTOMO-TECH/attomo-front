import { useQuery } from 'react-query';
import { CASES } from '../lib/api';
import { get } from '../lib/restClient';

const getAllCases = async () => {
  const { data } = await get(CASES.FETCH_ALL());
  return data;
};

const getCaseId = async (id: number) => {
  const { data } = await get(CASES.FETCH_ID(id));
  return data;
};

export function useUseAllCases() {
  return useQuery(['useAllCases'], () => getAllCases(), {
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
