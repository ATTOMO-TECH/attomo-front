import Subtext from '../Text/title';
import { getLocale } from '../../public/locales/getLocale';
import { UsStyles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';

export default function ListUs() {
  const translate = getLocale();
  return (
    <>
      <UsStyles.SectionUs>
        <Subtext size="lg:text-xl text-2xl w-full pb-10 font-light">
          {translate.titleValuesUr}
        </Subtext>
        {translate.valuesUs.map((values) => (
          <UsStyles.BlockSubsection>
            <Subtext size="lg:text-3xl text-2xl w-full py-5 lg:py-10 pt-12 ">
              {values.Text}
            </Subtext>
            <UsStyles.Title ismode={BUTTON_ACTIVE.ON}>
              {values.Subtext}
            </UsStyles.Title>
          </UsStyles.BlockSubsection>
        ))}
      </UsStyles.SectionUs>
    </>
  );
}
