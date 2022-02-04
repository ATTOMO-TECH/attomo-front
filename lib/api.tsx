import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;

const POST = {
  FETCH_ALL: () => getAbsolutePath('blog-posts/?locale=es'),
  FETCH_ID: (id: number) => getAbsolutePath(`blog-posts/${id}/?locale=es`),
};
const CASES = {
  FETCH_ALL: () => getAbsolutePath('blog-posts/?locale=es'),
  FETCH_ID: (id: number) => getAbsolutePath(`blog-posts/${id}/?locale=es`),
};

export { POST, CASES, getAbsolutePath };
