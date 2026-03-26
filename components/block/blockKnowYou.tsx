import Link from 'next/link';
import ParagraphText from '../Text/paragraphText';
import Title from '../Text/title';
import { handlers } from '../../hook/longPress';
import { Styles } from '../../styles/styles';
import IconAnimate from '../button/icon';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';

interface Props {
  value: any;
  locale: any;
}

export default function BlocKnow({ value, locale }: Props) {
  return (
    <>
      <Styles.CenterMargin key={value.Text}>
        <Link
          href={locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url}
          passHref>
          <a
            className="w-12"
            href={locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url}
            {...handlers('/contacto')}>
            <Title size="lg:text-xl w-4/6 lg:w-3/6 cursor-pointer">
              {value.Text}
            </Title>
          </a>
        </Link>
        <ParagraphText size=" text-2xl font-Primary"> </ParagraphText>
        <ParagraphText size=" text-sm lg:w-3/6 font-PrimarySerif py-5">
          {value.Subtext}
        </ParagraphText>
        <Styles.BtnLimit>
          <Link
            href={locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url}
            passHref>
            <a
              href={
                locale === 'en' ? VALUESNAV_ENG[5].Url : VALUESNAV_ESP[5].Url
              }
              className="w-full "
              {...handlers('/contacto')}>
              <IconAnimate text={value.Button} mode />
            </a>
          </Link>
        </Styles.BtnLimit>
      </Styles.CenterMargin>
    </>
  );
}
