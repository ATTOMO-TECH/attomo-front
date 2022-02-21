import Link from 'next/link';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  text: string;
  btn: string;
  link: string;
  textPrimary: string;
}

export default function SelectedClients({
  text,
  btn,
  link,
  textPrimary,
}: Props) {
  return (
    <>
      <Styles.BlockMargin>
        <div className="pt-10" />
        <Styles.DivideSection>
          <Title size="text-6xl ">{textPrimary}</Title>
        </Styles.DivideSection>
        <Styles.DivideSection>
          <Title size="text-xl font-PrimarySerif">{text}</Title>
          <Link href={`${link}`}>
            <div className="pt-12">
              <IconAnimate text={btn} mode />
            </div>
          </Link>
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
