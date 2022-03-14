import { useQuery } from 'react-query';
import { PRIVACY, TERMS } from '../lib/api';
import { get } from '../lib/restClient';

const getAPrivacy = async (lenguage: string) => {
  const { data } = await get(PRIVACY.FETCH_ONE(lenguage));
  return data;
};

const getATerms = async (lenguage: string) => {
  const { data } = await get(TERMS.FETCH_ONE(lenguage));
  return data;
};

export function useUseATerms(lenguage: string) {
  return useQuery(['useAllPost', lenguage], () => getATerms(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}

export function useUseAPrivacy(lenguage: string) {
  return useQuery(['useAllPost', lenguage], () => getAPrivacy(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
