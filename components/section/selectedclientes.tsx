// import Link from 'next/link';
// import { handlers } from '../../hook/longPress';
import IconAnimate from '../button/icon';
import { SubSections } from '../subsection/style';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  text: string;
  btn: string;
  // link: string;
  textPrimary: any;
}

export default function SelectedClients({
  text,
  btn,
  // link,
  textPrimary,
}: Props) {
  const handleClick = () => {
    const section = document.getElementById('reserva');
    if (section !== null) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Styles.BlockMargin>
        <Styles.DivideSection>
          <SubSections.BlockCounter>
            <SubSections.BlockBtn onClick={() => handleClick()}>
              <Title size="text-2xl md:text-3xl lg:text-4xl font-light lg:pl-10 cursor-pointer ">
                {textPrimary}
              </Title>
            </SubSections.BlockBtn>
          </SubSections.BlockCounter>

          <SubSections.TextSubsectionSelected>
            <div className="lg:w-4/6 w-full">
              <SubSections.Title> {text}</SubSections.Title>
              <SubSections.BlockBtn>
                <IconAnimate text={btn} mode />
              </SubSections.BlockBtn>
            </div>
          </SubSections.TextSubsectionSelected>
        </Styles.DivideSection>
      </Styles.BlockMargin>
    </>
  );
}
