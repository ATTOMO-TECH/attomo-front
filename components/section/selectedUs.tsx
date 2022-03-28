import Link from 'next/link';
import Subtext from '../Text/title';
import { UsStyles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import IconAnimate from '../button/icon';

interface Props {
  text: string;
  btn: string;
  link: string;
  textPrimary: any;
}

export default function SelectedUs({ text, btn, link, textPrimary }: Props) {
  return (
    <>
      <div className="flex lg:pt-12 md:pt-20 pt-12  items-center flex-wrap">
        <div className="lg:w-2/6 md:w-3/6  ">
          <Subtext size="text-4xl text-2xl w-full py-5 pr-12">
            {textPrimary}
          </Subtext>
        </div>
        <div className="lg:w-4/6 pr-12 lg:pt-16">
          <div>
            <UsStyles.Title ismode={BUTTON_ACTIVE.ON}>{text}</UsStyles.Title>
          </div>
          <Link href={`${link}`}>
            <div className="pt-4">
              <IconAnimate text={btn} mode />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
