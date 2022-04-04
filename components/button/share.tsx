import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../const/const';
import { Share } from './style';

interface Props {
  isOpen: boolean;
  toggle: () => void;
  title: string;
}

export default function ShareNav({ title, isOpen, toggle }: Props) {
  return (
    <>
      <Share.Button
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        onClick={toggle}>
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
                  src="/icon/Linkedin.svg"
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
                  src="/icon/TikTok.svg"
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
                href={`mailto:equipo@attomo.digital?subject=#ATTOMOtrends | ${title}&body=Echa un vistazo a esta publicación ${document.location.href}`}
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
    </>
  );
}
