import { useQuery } from 'react-query';
import { PARTNER } from '../lib/api';
import { get } from '../lib/restClient';

const getAllPartners = async (query: any) => {
  const { data } = await get(PARTNER.FETCH_ALL(query));
  return data;
};

export function useUseAllPartner(query: any) {
  return useQuery(['useAllPost', query], () => getAllPartners(query), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
