import Link from 'next/link';
import Subtext from '../Text/title';
import { UsStyles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';

interface Props {
  text: string;
  btn?: string;
  link: string;
  textPrimary?: any;
}

export default function SelectedUs({ text, btn, link, textPrimary }: Props) {
  return (
    <>
      <div className="flex lg:pt-16 md:pt-20 pt-12  items-center flex-wrap">
        <Link href={`${link}`}>
          <div className="lg:w-2/6 md:w-3/6 cursor-pointer ">
            <Subtext size="lg:text-4xl text-2xl w-full py-5 pr-12">
              {textPrimary}
            </Subtext>
          </div>
        </Link>
        <div
          className={
            btn === '' ? 'lg:w-4/6 pr-12 lg:pt-16' : 'lg:w-4/6 pr-12 '
          }>
          <div>
            <UsStyles.Title ismode={BUTTON_ACTIVE.ON}>{text}</UsStyles.Title>
          </div>
          {btn === '' ? (
            <Link href={`${link}`}>
              <div className="pt-4">
                <IconAnimate text={btn} mode />
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </>
  );
}
