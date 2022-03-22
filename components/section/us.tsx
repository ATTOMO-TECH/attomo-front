import Subtext from '../Text/title';
import { getLocale } from '../../public/locales/getLocale';
import { UsStyles } from './style';

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
            <Subtext size="lg:text-3xl text-3xl w-full py-5 lg:py-10">
              {values.Text}
            </Subtext>
            <Subtext size="text-regular w-full leading-loose font-Secundary ">
              {values.Subtext}
            </Subtext>
          </UsStyles.BlockSubsection>
        ))}
      </UsStyles.SectionUs>
    </>
  );
}
