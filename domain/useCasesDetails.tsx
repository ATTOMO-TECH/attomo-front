import { useQuery } from 'react-query';
import { CASES, DISCIPLINES } from '../lib/api';
import { get } from '../lib/restClient';

export const getAllCases = async (query?: string) => {
  const { data } = await get(CASES.FETCH_ALL(query));
  return data;
};
const getAllDisciplines = async (lenguage: string) => {
  const { data } = await get(DISCIPLINES.FETCH_ALL(lenguage));
  return data;
};

export const getCaseId = async (id: number, lenguage: string | undefined) => {
  try {
    const { data } = await get(CASES.FETCH_ID(id, lenguage));
    return data;
  } catch (err) {
    console.log(err);
    return { data: { statusCode: 404 } };
  }
};
const getFilterCases = async (lenguage: string, query: string) => {
  const { data } = await get(CASES.FETCH_FILTER(lenguage, query));
  return data;
};

export function useUseDisciplines(lenguage: string) {
  return useQuery(['useAllCases'], () => getAllDisciplines(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useUseFilterCases(lenguage: string, query: string) {
  return useQuery(['useAllCases'], () => getFilterCases(lenguage, query), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useUseAllCases(query?: string) {
  return useQuery(['useAllCases', query], () => getAllCases(query), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useaCase(id: number, lenguage: string) {
  return useQuery(['useACase', id], () => getCaseId(id, lenguage), {
    staleTime: 25000,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
