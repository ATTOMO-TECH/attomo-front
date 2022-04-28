import Link from 'next/link';
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
  return (
    <>
      <Styles.BlockMargin>
        <Styles.DivideSection>
          <Link href={`${link}`}>
            <SubSections.BlockCounter>
              <Title size="text-2xl md:text-3xl lg:text-4xl font-light lg:w-3/6 lg:pl-12 cursor-pointer ">
                {textPrimary}
              </Title>
            </SubSections.BlockCounter>
          </Link>

          <SubSections.TextSubsectionSelected>
            <div className="lg:w-4/6  w-full">
              <SubSections.Title> {text}</SubSections.Title>
              <Link href={`${link}`}>
                <div className="w-48">
                  <IconAnimate text={btn} mode />
                </div>
              </Link>
            </div>
          </SubSections.TextSubsectionSelected>
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
