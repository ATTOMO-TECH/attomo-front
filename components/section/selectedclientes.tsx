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
        {/* < <Styles.DivideSection>
          <Title size="text-2xl md:text-3xl lg:text-4xl font-light md:ml-6 pt-12 md:pt-0 text-center ">
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
        </Styles.DivideSection> */}

        <Styles.DivideSection>
          <SubSections.BlockCounter>
            <Title size="text-2xl md:text-3xl lg:text-4xl font-light lg:w-3/6">
              {textPrimary}
            </Title>
          </SubSections.BlockCounter>

          <SubSections.TextSubsectionSelected>
            <div className="lg:w-4/6  w-full">
              <SubSections.Paragraph> {text}</SubSections.Paragraph>
              <Link href={`${link}`}>
                <div>
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
