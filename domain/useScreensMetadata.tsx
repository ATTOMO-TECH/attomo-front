import { useQuery } from 'react-query';
import { CANONICAL, SCREENS } from '../lib/api';
import { get } from '../lib/restClient';

const getAllScreens = async (lenguage: string) => {
  const { data } = await get(SCREENS.FETCH_ALL(lenguage));
  return data;
};

export const getScreensId = async (
  id: number,
  lenguage: string | undefined,
) => {
  const { data } = await get(SCREENS.FETCH_ID(id, lenguage));
  return data;
};

export const getScreensCanonical = async () => {
  const { data } = await get(CANONICAL.FETCH_ALL());
  return data;
};

export function useScreens(lenguage: string) {
  return useQuery(['useScreens'], () => getAllScreens(lenguage), {
    staleTime: 2500,
    notifyOnChangePropsExclusions: ['isStale'],
    refetchOnWindowFocus: false,
  });
}

export function useAScreen(id: number, lenguage: string) {
  return useQuery(['useAScreen'], () => getScreensId(id, lenguage), {
    refetchOnWindowFocus: false,
  });
}
