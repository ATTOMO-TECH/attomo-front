import Link from 'next/link';
import Subtext from '../Text/subText';
import Title from '../Text/title';
import { handlers } from '../../hook/longPress';
import { Styles } from '../../styles/styles';
import IconAnimate from '../button/icon';

interface Props {
  value: any;
}

export default function BlocKnow({ value }: Props) {
  return (
    <>
      <Styles.CenterMargin key={value.Text}>
        <Link href="/contacto" passHref>
          <a className="w-12" href="/contacto" {...handlers('/contacto')}>
            <Title size="lg:text-xl w-4/6 lg:w-3/6 cursor-pointer">
              {value.Text}
            </Title>
          </a>
        </Link>
        <Subtext size=" text-2xl font-Primary"> </Subtext>
        <Subtext size=" text-sm lg:w-3/6 font-PrimarySerif py-5">
          {value.Subtext}
        </Subtext>
        <Styles.BtnLimit>
          <Link href="/contacto" passHref>
            <a href="/contacto" className="w-12 " {...handlers('/contacto')}>
              <IconAnimate text={value.Button} mode />
            </a>
          </Link>
        </Styles.BtnLimit>
      </Styles.CenterMargin>
    </>
  );
}
