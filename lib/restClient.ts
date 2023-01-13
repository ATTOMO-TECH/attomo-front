import axios from 'axios';

export const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
let api: any = null;

const getHeaders = async () => {
  const headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  return headers;
};

const getInitializedApi = () => {
  if (api) {
    return api;
  }
  api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    responseType: 'json',
  });
  return api;
};

export const get = async (url: string, data?: any) => {
  const headers = await getHeaders();
  return getInitializedApi().get(`${url}`, { headers, params: data });
};

export const post = async (url: string, data?: any, options?: any) => {
  const headers = await getHeaders();
  return getInitializedApi().post(url, data, { headers, ...options });
};

export const postMultiPart = async (url: string, data: any) => {
  const headers = await getHeaders();
  return getInitializedApi().post(url, data, { headers });
};

export const put = async (url: string, data: any) => {
  const headers = await getHeaders();
  return getInitializedApi().put(url, data, { headers });
};

export const uploadMedia = async (url: string, file: any) => {
  const bodyFormData = new FormData();
  bodyFormData.append('image', file);
  return postMultiPart(url, bodyFormData);
};

export const download = async (url: string, contentType: string) => {
  let headers = await getHeaders();
  if (contentType) {
    headers = {
      ...headers,
      'Content-Type': contentType,
      Accept: contentType,
    };
  }
  return getInitializedApi().get(url, {
    headers,
    responseType: 'blob',
    data: {},
  });
};
