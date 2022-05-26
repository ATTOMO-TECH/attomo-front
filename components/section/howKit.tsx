import Subtext from '../Text/subText';
import { KitStyles } from './style';
import { BUTTON_ACTIVE } from '../../const/const';
import Title from '../Text/title';

type Props = {
  title: string;
  subtitle?: string;
  blockSection: { item: string; title?: string; logo?: string }[];
};

export default function HowKit({ title, subtitle, blockSection }: Props) {
  return (
    <>
      <KitStyles.Section>
        <Title size="lg:text-4xl md:text-3xl pb-12 text-2xl text-center m-auto">
          {title}
        </Title>
        {subtitle && (
          <Subtext size="lg:text-lg text-xl w-full pb-10 font-light text-center">
            {subtitle}
          </Subtext>
        )}
        {blockSection?.map((values: any, index: number) => (
          <div
            className={
              !values?.logo
                ? 'lg:w-5/12 w-full flex items-center justify-between py-4'
                : 'lg:w-6/12 w-full flex items-center justify-between p-4 '
            }>
            {!values?.logo ? (
              <>
                <Subtext size="lg:text-xl text-2xl rounded-full border w-10 h-10 p-5 flex items-center justify-center ">
                  {index + 1}
                </Subtext>
                <KitStyles.Title
                  ismode={BUTTON_ACTIVE.ON}
                  className="text-left ml-4">
                  {values.item}
                </KitStyles.Title>
              </>
            ) : (
              <KitStyles.BlockSelectedSub>
                <img
                  src={values.logo}
                  alt={values.title}
                  className="col-span-4 "
                />
                <div>
                  <Subtext size="lg:text-lg   col-span-3 ">
                    {values.title}
                  </Subtext>

                  <KitStyles.Title
                    ismode={BUTTON_ACTIVE.ON}
                    className="text-left  col-span-3">
                    {values.item}
                  </KitStyles.Title>
                </div>
                <KitStyles.BlurBlock />
              </KitStyles.BlockSelectedSub>
            )}
          </div>
        ))}
      </KitStyles.Section>
    </>
  );
}
