import Subtext from '../Text/title';
import { getLocale } from '../../public/locales/getLocale';

export default function ListUs() {
  const translate = getLocale();
  return (
    <>
      <section className="flex flex-wrap pt-24 lg:pt-4 pb-5">
        <Subtext size="lg:text-xl text-2xl w-full pb-10">
          {translate.titleValuesUr}
        </Subtext>
        {translate.valuesUs.map((values) => (
          <div className="lg:w-6/12 pr-10 w-full">
            <Subtext size="lg:text-3xl text-3xl w-full py-5 lg:py-10">
              {values.Text}
            </Subtext>
            <Subtext size="text-regular w-full leading-loose">
              {values.Subtext}
            </Subtext>
          </div>
        ))}
      </section>
    </>
  );
}
