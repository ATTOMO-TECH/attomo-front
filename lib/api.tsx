import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;

const POST = {
  FETCH_ALL: (query: any) => getAbsolutePath(`blog-posts?${query}`),
  FETCH_ALL_TAG: () => getAbsolutePath(`blog-tags`),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`blog-posts/${id}?populate=coverImage`),
};
const SERVICES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`services?locale=${lenguage}&populate=subservices`),
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

export { POST, CASES, CONTACT, SERVICES, RATES, getAbsolutePath };
