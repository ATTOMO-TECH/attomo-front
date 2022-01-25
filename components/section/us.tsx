import Subtext from '../Text/title';

import { AboutUs } from '../../const/constGlobal';

export default function ListUs() {
  return (
    <>
      <section className="flex flex-wrap pt-24 lg:pt-4">
        <Subtext size="lg:text-xl text-2xl w-full pb-10">
          La compañía se desarrolla sobre cuatro pilares diferenciadores:
        </Subtext>
        {AboutUs.map((values) => (
          <div className="lg:w-6/12 pr-10 w-full">
            <Subtext size="lg:text-3xl text-3xl w-full py-10">
              {values.Title}
            </Subtext>
            <Subtext size="text-regular w-full leading-loose">
              {values.Text}
            </Subtext>
          </div>
        ))}
      </section>
    </>
  );
}
