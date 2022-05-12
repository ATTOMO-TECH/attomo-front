import Link from 'next/link';
import { getLocale } from '../../public/locales/getLocale';
import { handleClickTouch, useEventListener } from '../../hook/eventListener';
import { Styles } from './style';

export default function Conditions() {
  const translate = getLocale();
  useEventListener('term-form', 'touchstart', () =>
    handleClickTouch('/terminos'),
  );
  useEventListener('privacy-form', 'touchstart', () =>
    handleClickTouch('/privacidad'),
  );
  return (
    <>
      <Styles.BlockCheck>
        <Styles.TextChecked>
          {translate.formRead}
          <Link href="/terminos">
            <a id="term-form" href="/terminos" target="_blank">
              {` ${translate.formTems} `}
            </a>
          </Link>
          {translate.formAnd}
          <Link href="/privacidad">
            <a id="privacy-form" href="/privacidad" target="_blank">
              {` ${translate.formPrivacy}`}
            </a>
          </Link>
        </Styles.TextChecked>
      </Styles.BlockCheck>
    </>
  );
}
