import Subtext from '../Text/title';
import ParagraphText from '../Text/paragraphText';
import { UsStyles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  titleValuesUr: string;
  valuesUs: {
    Text: string;
    Subtext: string;
  }[];
}

export default function ListUs({ titleValuesUr, valuesUs }: Props) {
  return (
    <>
      <UsStyles.SectionUs>
        <Subtext size="lg:text-xl text-2xl w-full pb-10 font-light">
          {titleValuesUr}
        </Subtext>
        {valuesUs.map((values) => (
          <UsStyles.BlockSubsection key={values.Text}>
            <ParagraphText size="lg:text-3xl text-2xl w-full py-5 lg:py-10 pt-12  ">
              {values.Text}
            </ParagraphText>
            <UsStyles.Title ismode={BUTTON_ACTIVE.ON}>
              {values.Subtext}
            </UsStyles.Title>
          </UsStyles.BlockSubsection>
        ))}
      </UsStyles.SectionUs>
    </>
  );
}
