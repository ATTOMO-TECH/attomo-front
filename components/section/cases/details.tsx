import Link from 'next/link';
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
            {data.attributes.disciplines.data.map((disciplines: any) => (
              <h6 className="font-PrimarySerif font-thin text-sm flex">
                {disciplines.attributes.name}
              </h6>
            ))}
          </div>

          <div>
            <h5 className="font-Primary text-addictional text-xl">
              Entregables
            </h5>
            {data.attributes.deliverables.data.map((disciplines: any) => (
              <h6 className="font-PrimarySerif font-thin text-sm flex">
                {disciplines.attributes.name}
              </h6>
            ))}
          </div>
        </div>
        <div className="lg:w-5/12 py-10 lg:py-0 lg:px-2 leading-relaxed font-PrimarySerif font-thin text-sm">
          <Container>{data.attributes.workDescription}</Container>
          <Link href={data.attributes.projectUrl} passHref>
            <a
              href={data.attributes.projectUrl}
              target="_blank"
              rel="noreferrer">
              <IconAnimate text="Ver online" mode={false} />
            </a>
          </Link>
        </div>
      </section>
    </>
  );
}
