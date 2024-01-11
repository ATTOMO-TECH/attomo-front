import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';
import { handlersExternal } from '../../hook/longPress';

export default function ConditionsFooter() {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));

  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);
  return (
    <>
      <Styles.BlockCheck>
        <Styles.TextCheckedFooter>
          {translate.formRead}
          <Link href="/terminos" passHref>
            <a
              id="term-form"
              href="/terminos"
              target="_blank"
              rel="nofollow"
              className="underline xl:hover:text-blue-400 xl:no-underline"
              {...handlersExternal(`/terminos`)}>
              {` ${translate.formTems}  `}
            </a>
          </Link>
          {translate.formAnd}
          <Link href="/privacidad" passHref>
            <a
              id="privacy-form"
              href="/privacidad"
              rel="nofollow"
              target="_blank"
              className="underline xl:hover:text-blue-400 xl:no-underline"
              {...handlersExternal(`/privacidad`)}>
              {` ${translate.formPrivacy}`}
            </a>
          </Link>
        </Styles.TextCheckedFooter>
      </Styles.BlockCheck>
    </>
  );
}
