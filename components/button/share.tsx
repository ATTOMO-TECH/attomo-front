/* eslint-disable no-unused-expressions */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import { Share } from './style';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  title: string;
}

export default function ShareNav({ title, isOpen, toggle }: Props) {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    typeof window !== 'undefined' &&
      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 2000) {
          setScroll(false);
        } else {
          setScroll(true);
        }
      });
  }, []);

  return (
    <>
      {scroll && (
        <Share.Button
          ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
          onClick={() => toggle()}>
          <Share.Items>
            <Share.ItemValue>
              <Link href="https://www.instagram.com/attomo.digital/">
                <a
                  target="_blank"
                  href="https://www.instagram.com/attomo.digital/"
                  rel="noreferrer">
                  <img
                    src="/icon/instagram.svg"
                    width={25}
                    height={25}
                    alt="Instagram"
                    className="opacity-100 hover:opacity-70"
                  />
                </a>
              </Link>
            </Share.ItemValue>
            <Share.ItemValue>
              <Link href="https://www.linkedin.com/company/attomo-digital/">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/attomo-digital/"
                  rel="noreferrer">
                  <img
                    src="/icon/linkedin.svg"
                    width={25}
                    height={25}
                    alt="Linkedin"
                    className="opacity-100 hover:opacity-70"
                  />
                </a>
              </Link>
            </Share.ItemValue>
            <Share.ItemValue>
              <Link href="https://www.tiktok.com/@attomo.digital/">
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@attomo.digital/"
                  rel="noreferrer">
                  <img
                    src="/icon/tiktok.svg"
                    width={25}
                    height={25}
                    alt="TikTok"
                    className="opacity-100 hover:opacity-70"
                  />
                </a>
              </Link>
            </Share.ItemValue>
            <Share.ItemValue>
              <Link
                href={`mailto:equipo@attomo.digital?subject=#ATTOMOtrends | ${title}`}>
                <a
                  target="_blank"
                  href={`mailto:equipo@attomo.digital?subject=#ATTOMOtrends | ${title}&body=Echa un vistazo a esta publicación ${
                    typeof window !== 'undefined' && document.location.href
                  }`}
                  rel="noreferrer">
                  <img
                    src="/icon/mail.svg"
                    width={25}
                    height={25}
                    alt="Mail"
                    className="opacity-100 hover:opacity-70"
                  />
                </a>
              </Link>
            </Share.ItemValue>
          </Share.Items>
        </Share.Button>
      )}
    </>
  );
}
