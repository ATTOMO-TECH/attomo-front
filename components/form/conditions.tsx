import Link from 'next/link';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './style';

export default function Conditions() {
  const translate = getLocale();
  return (
    <>
      <Styles.BlockCheck>
        <Styles.TextChecked>{translate.formRead} </Styles.TextChecked>
        <Link href="/terminos">
          <Styles.LinkCheck>{translate.formTems}</Styles.LinkCheck>
        </Link>
        <Styles.TextChecked>{translate.formAnd}</Styles.TextChecked>
        <Link href="/privacidad">
          <Styles.LinkCheck>{translate.formPrivacy}</Styles.LinkCheck>
        </Link>
      </Styles.BlockCheck>
    </>
  );
}
