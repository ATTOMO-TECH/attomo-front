import { useQuery } from 'react-query';
import { POST } from '../lib/api';
import { get } from '../lib/restClient';

export const getAllPost = async (params?: any, query?: any) => {
  const { data } = await get(POST.FETCH_ALL(params, query));
  return data;
};
export const getAllTags = async (lenguage: string | undefined) => {
  const { data } = await get(POST.FETCH_ALL_TAG(lenguage));
  return data;
};

const getAllPostFeatured = async (query: any) => {
  const { data } = await get(POST.FETCH_ALL_FEATURED(query));
  return data;
};

export const getPostId = async (id: number) => {
  const { data } = await get(POST.FETCH_ID(id));
  return data;
};

export function useUseAllPost(query: any, initialData?: any) {
  return useQuery(['useAllPost', query, initialData], () => getAllPost(query), {
    initialData: initialData && initialData,
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
