import Link from 'next/link';
import IconAnimate from '../button/icon';
import Subtext from '../Text/subText';
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
          <Title size="lg:text-6xl md:text-5xl text-4xl md:ml-6 pt-12 md:pt-0">
            {textPrimary}
          </Title>
        </Styles.DivideSection>
        <Styles.DivideSection>
          <Subtext size="text-regular w-full leading-loose font-Secundary ">
            {text}
          </Subtext>

          {btn !== '' ? (
            <Link href={`${link}`}>
              <Styles.BlockMarginText>
                <IconAnimate text={btn} mode />
              </Styles.BlockMarginText>
            </Link>
          ) : (
            ''
          )}
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
