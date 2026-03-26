import { useQuery } from 'react-query';
import { RATES } from '../lib/api';
import { get } from '../lib/restClient';

const getAllRates = async (lenguage: string) => {
  const { data } = await get(RATES.FETCH_ALL(lenguage));
  return data;
};

export function useUseAllRates(lenguage: string) {
  return useQuery(['useAllCases'], () => getAllRates(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
