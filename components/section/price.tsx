import Link from 'next/link';
import { PRICES } from '../../const/constGlobal';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { Styles } from './style';

function Prices() {
  return (
    <>
      <div>
        <Link href="/espacio#reserva">
          <Styles.SectionPrices>
            {PRICES.map((values) => (
              <Styles.BlockSelect>
                <Title size="text-2xl pt-5 leading-relaxed ">
                  {values.Name}
                </Title>

                <Title size="text-regular leading-relaxed font-Secundary font-light">
                  {values.Time}
                </Title>

                <Title size="text-4xl leading-relaxed pt-5 font-Secundary font-light">
                  {`${values.Price}€`}
                </Title>

                <div className="w-full lg:ml-44 ml-60">
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
