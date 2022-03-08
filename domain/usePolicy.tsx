import { useQuery } from 'react-query';
import { PRIVACY } from '../lib/api';
import { get } from '../lib/restClient';

const getAPrivacy = async (lenguage: string) => {
  const { data } = await get(PRIVACY.FETCH_ONE(lenguage));
  return data;
};

export function useUseAPrivacy(lenguage: string) {
  return useQuery(['useAllPost'], () => getAPrivacy(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
