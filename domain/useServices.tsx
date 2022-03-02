import { useQuery } from 'react-query';
import { SERVICES } from '../lib/api';
import { get } from '../lib/restClient';

const getAllServices = async (lenguage: string) => {
  const { data } = await get(SERVICES.FETCH_ALL(lenguage));
  return data;
};

export function useUseAllServices(lenguage: string) {
  return useQuery(['useAllServices'], () => getAllServices(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
