import { CAREERS } from '../lib/api';
import { get } from '../lib/restClient';

export const getAllCareer = async (query: any) => {
  const { data } = await get(CAREERS.FETCH_ALL(query));
  return data;
};
