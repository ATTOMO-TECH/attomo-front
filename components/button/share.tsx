import Link from 'next/link';
import { BUTTON_ACTIVE } from '../../const/const';
import { ICONNAV } from '../../const/constGlobal';
import { Share } from './style';

interface Props {
  valueUrl: any;
  isOpen: boolean;
  toggle: () => void;
}
export default function ShareNav({ valueUrl, isOpen, toggle }: Props) {
  return (
    <>
      <Share.Button
        ismode={isOpen ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        onClick={toggle}>
        <Share.Items>
          {ICONNAV.map((values) => (
            <Link href={`${valueUrl}`}>
              <Share.ItemValue>
                <a target="_blank" href={values.Url} rel="noreferrer">
                  <img
                    src={values.Pic2}
                    width={25}
                    height={25}
                    alt={values.Name}
                    className="opacity-100 hover:opacity-70"
                  />
                </a>
              </Share.ItemValue>
            </Link>
          ))}
        </Share.Items>
      </Share.Button>
    </>
  );
}
