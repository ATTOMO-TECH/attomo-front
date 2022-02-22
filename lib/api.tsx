import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;

const POST = {
  FETCH_ALL: () => getAbsolutePath('blog-posts?populate=coverImage'),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`blog-posts/${id}?populate=coverImage`),
};
const CASES = {
  FETCH_ALL: (lenguage: string) =>
    getAbsolutePath(`successful-cases?populate=mainPhoto&locale=${lenguage}`),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`successful-cases/${id}?populate=mainPhoto`),
};
const CONTACT = {
  CREATE: () => getAbsolutePath('client-forms'),
  CREATECOLABORAROT: () => getAbsolutePath('client-forms'),
  CREATERESERVE: () => getAbsolutePath('client-forms'),
};

export { POST, CASES, CONTACT, getAbsolutePath };
