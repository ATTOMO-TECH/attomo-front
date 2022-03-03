import Link from 'next/link';
import { useUseAllRates } from '../../domain/useRates';
import IconAnimate from '../button/icon';
import RenderLoading from '../loading/loading';
import Title from '../Text/title';
import { Styles } from './style';

interface Props {
  locale: any;
}

function Prices({ locale }: Props) {
  const { data, isLoading } = useUseAllRates(locale || 'es');

  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  return (
    <>
      <div>
        <Link href="/espacio#reserva">
          <Styles.SectionPrices>
            {data.data.map((values: any) => (
              <Styles.BlockSelect key={`value${values.attributes.text}`}>
                <Title size=" pt-0 leading-relaxed md:text-xl lg:text-2xl text-3xl">
                  {values.attributes.text}
                </Title>

                <Title size="text-regular leading-relaxed font-Secundary font-light ">
                  ( {values.attributes.time} horas)
                </Title>

                <Title size="text-4xl leading-relaxed pt-5 font-Secundary font-light">
                  {`${values.attributes.price}€`}
                </Title>

                <div className="w-full lg:ml-32 md:ml-24 ml-36">
                  <IconAnimate text="Alquilar" mode />
                </div>
              </Styles.BlockSelect>
            ))}
          </Styles.SectionPrices>
        </Link>
      </div>
    </>
  );
}
export default Prices;
