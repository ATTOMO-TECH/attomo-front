import Link from 'next/link';
import useLongPressHook from '../../hook/longPress';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './style';

export default function Conditions() {
  const translate = getLocale();

  const [bindQuickScreen] = useLongPressHook(`/terminos`);
  const [bindQuick] = useLongPressHook(`/privacidad`);

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
              {...bindQuickScreen()}>
              {` ${translate.formTems} `}
            </a>
          </Link>
          {translate.formAnd}
          <Link href="/privacidad">
            <a
              id="privacy-form"
              href="/privacidad"
              target="_blank"
              {...bindQuick()}>
              {` ${translate.formPrivacy}`}
            </a>
          </Link>
        </Styles.TextChecked>
      </Styles.BlockCheck>
    </>
  );
}
