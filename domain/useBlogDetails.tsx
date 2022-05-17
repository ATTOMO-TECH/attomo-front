import { useQuery } from 'react-query';
import { POST } from '../lib/api';
import { get } from '../lib/restClient';

const getAllPost = async (query: any) => {
  const { data } = await get(POST.FETCH_ALL(query));
  return data;
};
const getAllTags = async (lenguage: string) => {
  const { data } = await get(POST.FETCH_ALL_TAG(lenguage));
  return data;
};

const getAllPostFeatured = async (query: any) => {
  const { data } = await get(POST.FETCH_ALL_FEATURED(query));
  return data;
};

const getPostId = async (id: number) => {
  const { data } = await get(POST.FETCH_ID(id));
  return data;
};

export function useUseAllPost(query: any) {
  return useQuery(['useAllPost', query], () => getAllPost(query), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useUseAllTags(lenguage: string) {
  return useQuery(['useAllPost', lenguage], () => getAllTags(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}
export function useUseFeaturedPost(query: any) {
  return useQuery(['useAllFeatured', query], () => getAllPostFeatured(query), {
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
