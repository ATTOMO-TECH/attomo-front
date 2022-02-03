import { useQuery } from 'react-query';
import { POST } from '../lib/api';
import { get } from '../lib/restClient';

const getAllPost = async () => {
  const { data } = await get(POST.FETCH_ALL());
  return data;
};

const getPostId = async (id: number) => {
  const { data } = await get(POST.FETCH_ID(id));
  return data;
};

export function useUseAllPost() {
  return useQuery(['useAllPost'], () => getAllPost(), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useAPost(id: number) {
  return useQuery(['useAPost', id], () => getPostId(id), {
    staleTime: 25000,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
