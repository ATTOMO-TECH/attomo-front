import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';
import { Btn } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

export default function ButtonShare() {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  return (
    <>
      <Link href="https://api.whatsapp.com/send?text">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?text"
          rel="noreferrer">
          <Btn.Icon ismode={!scroll ? BUTTON_ACTIVE.ON : ''}>
            <Image
              src="/icon/whatsapp.svg"
              width={40}
              height={40}
              alt="Attomo"
            />
          </Btn.Icon>
        </a>
      </Link>
    </>
  );
}
