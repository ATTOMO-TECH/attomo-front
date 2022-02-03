import { API_URL } from './httpClient';

const getAbsolutePath = (path: string) => `${API_URL}/${path}`;

const POST = {
  FETCH_ALL: () => getAbsolutePath('blog-posts'),
  FETCH_ID: (id: number) => getAbsolutePath(`blog-posts/${id}`),
};

export { POST, getAbsolutePath };
