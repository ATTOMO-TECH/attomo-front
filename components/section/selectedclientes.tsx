import Link from 'next/link';
import useTap from '../../hook/longPress';
import IconAnimate from '../button/icon';
import { SubSections } from '../subsection/style';
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
  const [handlers] = useTap(link);

  return (
    <>
      <Styles.BlockMargin>
        <Styles.DivideSection>
          <SubSections.BlockCounter>
            <Link href={`${link}`}>
              <SubSections.BlockBtn {...handlers()}>
                <Title size="text-2xl md:text-3xl lg:text-4xl font-light w-4/6  lg:pl-10 cursor-pointer ">
                  {textPrimary}
                </Title>
              </SubSections.BlockBtn>
            </Link>
          </SubSections.BlockCounter>

          <SubSections.TextSubsectionSelected>
            <div className="lg:w-4/6 w-full">
              <SubSections.Title> {text}</SubSections.Title>
              <Link href={`${link}`}>
                <SubSections.BlockBtn {...handlers()}>
                  <IconAnimate text={btn} mode />
                </SubSections.BlockBtn>
              </Link>
            </div>
          </SubSections.TextSubsectionSelected>
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
