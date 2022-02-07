import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;

const POST = {
  FETCH_ALL: () => getAbsolutePath('blog-posts?populate=coverImage'),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`blog-posts/${id}?populate=coverImage`),
};
const CASES = {
  FETCH_ALL: () => getAbsolutePath('blog-posts?populate=coverImage'),
  FETCH_ID: (id: number) =>
    getAbsolutePath(`blog-posts/${id}?populate=coverImage`),
};

export { POST, CASES, getAbsolutePath };
