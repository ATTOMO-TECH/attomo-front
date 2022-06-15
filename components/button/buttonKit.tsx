import { Styles } from '../../styles/styles';

interface Props {
  translate: any;
}

export default function ButtonKit({ translate }: Props) {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section !== null) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Styles.BtnKit
      onClick={() => scrollTo('form-kit')}
      onTouchStart={() => scrollTo('form-kit')}>
      {translate.helpYou}
    </Styles.BtnKit>
  );
}
