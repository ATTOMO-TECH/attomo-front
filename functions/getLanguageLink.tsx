import { VALUESNAV_ENG, VALUESNAV_ESP } from '../const/constGlobal';

export const getLangLink = (pathname: string, setLang: string): string => {
  // console.log("pathname:", pathname)
  // console.log("setLang:", setLang)
  const getESPIndexPath = VALUESNAV_ESP.findIndex(
    (value) => value.Url === pathname,
  );
  // console.log("getESPIndexPath:", getESPIndexPath)
  if (getESPIndexPath !== -1) {
    if (setLang === 'es') {
      // console.log("return1 esp:", VALUESNAV_ESP[getESPIndexPath].Url)
      return VALUESNAV_ESP[getESPIndexPath].Url;
    }
    // console.log("return2 esp:", VALUESNAV_ENG[getESPIndexPath].Url)
    return `/en${VALUESNAV_ENG[getESPIndexPath].Url}`;
  }
  const getENGIndexPath = VALUESNAV_ENG.findIndex(
    (value) => value.Url === pathname,
  );
  // console.log("getENGIndexPath:", getENGIndexPath)
  if (getENGIndexPath !== -1) {
    if (setLang === 'es') {
      // console.log("return1 eng:", VALUESNAV_ESP[getENGIndexPath].Url)
      return VALUESNAV_ESP[getENGIndexPath].Url;
    }
    // console.log("return2 eng:", VALUESNAV_ENG[getENGIndexPath].Url)
    return `/en${VALUESNAV_ENG[getENGIndexPath].Url}`;
  }
  if (setLang === 'es') return '/';
  return '/en';
};
