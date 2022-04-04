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
          <Link href="/terminos">{translate.formTems}</Link> {translate.formAnd}
          <Link href="/privacidad">{translate.formPrivacy}</Link>
        </Styles.TextChecked>
      </Styles.BlockCheck>
    </>
  );
}
