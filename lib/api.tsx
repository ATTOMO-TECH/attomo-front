import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;
const CASES = {
  FETCH_ALL: (lenguage: string, query?: string) =>
    getAbsolutePath(
      `successful-cases?populate=mainPhoto&locale=${lenguage}&${query}`,
    ),
  FETCH_FILTER: (lenguage: string, query: string) =>
    getAbsolutePath(
      `successful-cases?populate=mainPhoto&locale=${lenguage}&populate=subservice&${query}`,
    ),
  FETCH_ID: (id: number, lenguage: string) =>
    getAbsolutePath(
      `successful-cases/${id}?populate=mainPhoto&populate=disciplines&populate=deliverables&populate=subservice&locale=${lenguage}`,
    ),
};
const CONTACT = {
  CREATE: () => getAbsolutePath('client-forms'),
  CREATECOLABORATOR: () => getAbsolutePath('partner-forms'),
  CREATERESERVE: () => getAbsolutePath('space-forms'),
};
const CAREERS = {
  FETCH_ALL: (lenguage: any) => getAbsolutePath(`careers?locale=${lenguage}`),
};

const QUOTE = {
  FETCH_ONE: (id: number, lenguage: any) =>
    getAbsolutePath(`quotes/${id}?locale=${lenguage}`),
};
const POST = {
  FETCH_ALL: (query: any) =>
    getAbsolutePath(`blog-posts?${query}&populate=blog_tags`),
  FETCH_ALL_TAG: () => getAbsolutePath(`blog-tags`),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`blog-posts/${id}?populate=coverImage&populate=blog_tags`),
};
const PARTNER = {
  FETCH_ALL: (query: any) => getAbsolutePath(`partner-areas?${query}`),
};
const PRIVACY = {
  FETCH_ONE: (lenguage: any) =>
    getAbsolutePath(`privacy-policies?locale=${lenguage}`),
};
const TERMS = {
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
const SUBSCRIBERS = {
  POST: () => getAbsolutePath(`subscribers`),
};
const SUBSERVICES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`subservices?locale=${lenguage}`),
};
const RATES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`espacio-attomo-rates?locale=${lenguage}`),
};

export {
  SUBSERVICES,
  POST,
  CAREERS,
  CASES,
  CONTACT,
  SERVICES,
  RATES,
  PARTNER,
  QUOTE,
  PRIVACY,
  TERMS,
  SUBSCRIBERS,
  getAbsolutePath,
};
