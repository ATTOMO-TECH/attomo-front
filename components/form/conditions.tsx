import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getLocale } from '../../public/locales/getLocale';
import { handlersExternal } from '../../hook/longPress';
import { Styles } from './style';

export default function Conditions() {
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
        <Styles.TextChecked>
          {translate.formRead}
          <Link href="/terminos" passHref>
            <a
              id="term-form"
              href="/terminos"
              target="_blank"
              className="underline lg:no-underline"
              {...handlersExternal(`/terminos`)}>
              {` ${translate.formTems}  `}
            </a>
          </Link>
          {translate.formAnd}
          <Link href="/privacidad" passHref>
            <a
              id="privacy-form"
              href="/privacidad"
              target="_blank"
              className="underline lg:no-underline"
              {...handlersExternal(`/privacidad`)}>
              {` ${translate.formPrivacy}`}
            </a>
          </Link>
        </Styles.TextChecked>
      </Styles.BlockCheck>
    </>
  );
}
