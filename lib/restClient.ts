import axios from 'axios';
import { getAuthToken } from './auth';

export const API_URL = process.env.NEXT_PUBLIC_REACT_APP_API_URL;
let api: any = null;

const getHeaders = async () => {
  let headers: any = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  const token = await getAuthToken();
  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }
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
  return getInitializedApi().get(url, { headers, params: data });
};

export const post = async (url: string, data: any, options?: any) => {
  const headers = await getHeaders();
  return getInitializedApi().post(url, data, { headers, ...options });
};

export const remove = async (url: string, data = null, options: any) => {
  const headers = await getHeaders();
  return getInitializedApi().delete(url, {
    ...options,
    headers,
    data,
  });
};

export const del = async (url: string, data = null, options: any) => {
  const headers = await getHeaders();
  return getInitializedApi().delete(url, {
    ...options,
    headers,
    data,
  });
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
