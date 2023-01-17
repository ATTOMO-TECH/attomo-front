import { PRIVACY, TERMS } from '../lib/api';
import { get } from '../lib/restClient';

export const getAPrivacy = async (lenguage: string | undefined) => {
  const { data } = await get(PRIVACY.FETCH_ONE(lenguage));
  return data;
};

export const getATerms = async (lenguage: string | undefined) => {
  const { data } = await get(TERMS.FETCH_ONE(lenguage));
  return data;
};
