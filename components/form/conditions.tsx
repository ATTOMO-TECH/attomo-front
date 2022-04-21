import Link from 'next/link';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './style';

export default function Conditions() {
  const translate = getLocale();
  return (
    <>
      <Styles.BlockCheck>
        <Styles.TextChecked>
          {translate.formRead}{' '}
          <Link href="/terminos">
            <a href="/terminos" target="_blank">
              {translate.formTems}
            </a>
          </Link>{' '}
          {translate.formAnd}
          <Link href="/privacidad">
            <a href="/privacidad" target="_blank">
              {` ${translate.formPrivacy}`}
            </a>
          </Link>
        </Styles.TextChecked>
      </Styles.BlockCheck>
    </>
  );
}
