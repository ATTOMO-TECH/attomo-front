import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;

const POST = {
  FETCH_ALL: (query: any) => getAbsolutePath(`blog-posts?${query}`),
  FETCH_ALL_TAG: () => getAbsolutePath(`blog-tags`),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`blog-posts/${id}?populate=coverImage`),
};
const PARTNER = {
  FETCH_ALL: (query: any) => getAbsolutePath(`partner-areas?${query}`),
};

const QUOTE = {
  FETCH_ONE: (id: number, lenguage: any) =>
    getAbsolutePath(`quotes/${id}?locale=${lenguage}`),
};
const PRIVACY = {
  FETCH_ONE: (lenguage: any) =>
    getAbsolutePath(`privacy-policies?locale=${lenguage}`),
};
const SERVICES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`services?locale=${lenguage}&populate=subservices`),
  FETCH_ONE: (query: any, lenguage: string) =>
    getAbsolutePath(
      `services?locale=${lenguage}&populate=subservices&${query}`,
    ),
};
const CASES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`successful-cases?populate=mainPhoto&locale=${lenguage}`),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`successful-cases/${id}?populate=mainPhoto`),
};
const RATES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`espacio-attomo-rates?locale=${lenguage}`),
};
const CONTACT = {
  CREATE: () => getAbsolutePath('client-forms'),
  CREATECOLABORATOR: () => getAbsolutePath('partner-forms'),
  CREATERESERVE: () => getAbsolutePath('client-forms'),
};

export {
  POST,
  CASES,
  CONTACT,
  SERVICES,
  RATES,
  PARTNER,
  QUOTE,
  PRIVACY,
  getAbsolutePath,
};
