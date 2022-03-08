import { useQuery } from 'react-query';
import { QUOTE } from '../lib/api';
import { get } from '../lib/restClient';

const getAQuote = async (id: number, lenguage: string) => {
  const { data } = await get(QUOTE.FETCH_ONE(id, lenguage));
  return data;
};

export function useUseAllQuote(id: number, lenguage: string) {
  return useQuery(['useAllPost', id], () => getAQuote(id, lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
