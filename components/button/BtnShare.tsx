import Link from 'next/link';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { useEffect, useState } from 'react';
import { Btn } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import { handleExternalTouch } from '../../hook/eventListener';

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

  const callback = () => {
    handleExternalTouch('https://api.whatsapp.com/send/?phone=34610516285');
  };

  const bind = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 200,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  return (
    <>
      <Link href="https://api.whatsapp.com/send/?phone=34610516285">
        <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=34610516285"
          rel="noreferrer"
          {...bind()}>
          <Btn.Icon ismode={!scroll ? BUTTON_ACTIVE.ON : ''}>
            <img
              src="/icon/WhatsApp.png"
              width={100}
              height={100}
              alt="WhatsApp"
            />
          </Btn.Icon>
        </a>
      </Link>
    </>
  );
}
