import Image from 'next/image';
import { BUTTON_MODE } from '../../const/const';
import { Button, Icon } from './style';

interface Props {
  text: string;
  mode: boolean;
  styleText?: string;
}

export default function IconAnimate({ text, mode, styleText }: Props) {
  const handleClick = () => {
    if (text === 'Book' || text === 'Reserva el espacio') {
      const section = document.getElementById('reserva');
      if (section !== null) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Icon.BlockHidden>
        <Button.ButtonRegular
          className={`${styleText}`}
          onClick={() => handleClick()}
          ismode={mode ? BUTTON_MODE.LIGHT : BUTTON_MODE.DARK}>
          {text}
        </Button.ButtonRegular>
        <Icon.SectionIcon>
          <Icon.Icon ismode={mode ? BUTTON_MODE.LIGHT : BUTTON_MODE.DARK} />
        </Icon.SectionIcon>
        <Image
          src={mode ? '/icon/iconBtn.svg' : '/icon/darkAttomo.svg'}
          width={8}
          height={8}
          alt="button"
        />
      </Icon.BlockHidden>
    </>
  );
}
