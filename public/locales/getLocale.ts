import es from './es';
import en from './en';

export function getLocale(locale?: string) {
  let translate = es;

  switch (locale) {
    case 'en':
      translate = en;
      break;
    default:
      translate = es;
      break;
  }
  return translate;
}
