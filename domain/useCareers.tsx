import { useQuery } from 'react-query';
import { CAREERS } from '../lib/api';
import { get } from '../lib/restClient';

const getAllCareer = async (query: any) => {
  const { data } = await get(CAREERS.FETCH_ALL(query));
  return data;
};

export function useUseAllCareer(query: any) {
  return useQuery(['useAllCareer', query], () => getAllCareer(query), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
