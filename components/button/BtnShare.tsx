import Link from 'next/link';
import Image from 'next/image';

import { useEffect, useState } from 'react';

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
          <div
            className={
              scroll
                ? 'w-auto h-auto rounded-full p-5  fixed -bottom-10 right-10  delay-200 duration-300 ease-in-out opacity-0'
                : 'w-auto h-auto rounded-full  p-3 bg-white fixed bottom-10 right-10  delay-200 duration-300 ease-in-out opacity-100 cursor-pointer z-90 shadow-lg'
            }>
            <Image src="/icon/w2.svg" width={40} height={40} alt="Attomo" />
          </div>
        </a>
      </Link>
    </>
  );
}
