import Link from 'next/link';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  text: string;
  btn: string;
  link: string;
  textPrimary: any;
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
        <Styles.DivideSection>
          <Title size="lg:text-6xl md:text-5xl text-4xl md:ml-6 ">
            {textPrimary}
          </Title>
        </Styles.DivideSection>
        <Styles.DivideSection>
          <Styles.Paragraph>{text}</Styles.Paragraph>
          <Link href={`${link}`}>
            <Styles.BlockMarginText>
              <IconAnimate text={btn} mode />
            </Styles.BlockMarginText>
          </Link>
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
