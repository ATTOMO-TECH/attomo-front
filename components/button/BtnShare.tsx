import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Btn } from './style';
import { handlersExternal } from '../../hook/longPress';
import { BUTTON_ACTIVE } from '../../const/const';

export default function ButtonShare() {
  const [scroll, setScroll] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  const handleScroll = () => {
    if (isMounted) {
      if (window.scrollY > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    }
  };

  useEffect(() => {
    setIsMounted(true);

    window.addEventListener('scroll', handleScroll);

    return () => {
      setIsMounted(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Link href="https://api.whatsapp.com/send/?phone=34610516285">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=34610516285"
          rel="noreferrer"
          {...handlersExternal(
            'https://api.whatsapp.com/send/?phone=34610516285',
          )}>
          <Btn.Icon ismode={!scroll ? BUTTON_ACTIVE.ON : ''}>
            <Image
              src="/icon/WhatsApp.png"
              width="100%"
              height="100%"
              alt="WhatsApp"
            />
          </Btn.Icon>
        </a>
      </Link>
    </>
  );
}
