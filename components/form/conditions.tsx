import Link from 'next/link';
import { handlers } from '../../hook/longPress';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './style';

export default function Conditions() {
  const translate = getLocale();

  return (
    <>
      <Styles.BlockCheck>
        <Styles.TextChecked>
          {translate.formRead}
          <Link href="/terminos">
            <a
              id="term-form"
              href="/terminos"
              target="_blank"
              {...handlers(`/terminos`)}>
              {` ${translate.formTems} `}
            </a>
          </Link>
          {translate.formAnd}
          <Link href="/privacidad">
            <a
              id="privacy-form"
              href="/privacidad"
              target="_blank"
              {...handlers(`/privacidad`)}>
              {` ${translate.formPrivacy}`}
            </a>
          </Link>
        </Styles.TextChecked>
      </Styles.BlockCheck>
    </>
  );
}
