import IconAnimate from '../../button/icon';
import { Container } from './style';

interface Props {
  data: any;
}
export default function DetailsCases({ data }: Props) {
  return (
    <>
      <section className="h-auto flex flex-wrap justify-between py-24 flex-col lg:flex-row">
        <div className="lg:w-3/12 w-full leading-relaxed">
          <div className="pb-5">
            <h5 className="font-Primary text-addictional text-xl">
              Disciplinas
            </h5>
            <h6 className="font-PrimarySerif font-thin text-sm flex">
              Transitional Branding
            </h6>
          </div>

          <div>
            <h5 className="font-Primary text-addictional text-xl">
              Disciplinas
            </h5>
            <h6 className="font-PrimarySerif font-thin text-sm">
              Transitional Branding
            </h6>
          </div>
        </div>
        <div className="lg:w-5/12 py-10 lg:py-0 px-2 leading-relaxed font-PrimarySerif font-thin text-sm">
          <Container>{data}</Container>
          <IconAnimate text="Ver online" mode={false} />
        </div>
      </section>
    </>
  );
}
