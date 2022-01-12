export const TOKEN_STORAGE_KEY = 'auth';

export const getAuthToken = () =>
  window.localStorage.getItem(TOKEN_STORAGE_KEY);
export const setAuthToken = (token: string) =>
  window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
export const removeAuthToken = () =>
  window.localStorage.removeItem(TOKEN_STORAGE_KEY);
export const isLoggedIn = () =>
  !!window.localStorage.getItem(TOKEN_STORAGE_KEY);
export const logout = () => {
  window.localStorage.clear();
  window.location.href = '/';
};
