import { useRouter } from 'next/router';
import es from './es';
import en from './en';

export function getLocale() {
  const router = useRouter();
  const { locale } = router;
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
