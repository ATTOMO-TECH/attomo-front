import Link from 'next/link';
import { Styles } from './style';

export default function Conditions() {
  return (
    <>
      <Styles.BlockCheck>
        <Styles.TextChecked>He leído y acepto los </Styles.TextChecked>
        <Link href="/terminos">
          <Styles.LinkCheck>Términos y condiciones</Styles.LinkCheck>
        </Link>
        <Styles.TextChecked>y la</Styles.TextChecked>
        <Link href="/privacidad">
          <Styles.LinkCheck>Política de Privacidad</Styles.LinkCheck>
        </Link>
      </Styles.BlockCheck>
    </>
  );
}
