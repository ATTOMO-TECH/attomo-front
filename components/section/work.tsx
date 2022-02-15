import Link from 'next/link';
import Subtext from '../Text/title';
import IconAnimate from '../button/icon';

interface Props {
  works: any[];
}

export default function Work({ works }: Props) {
  return (
    <>
      <section className="flex lg:pt-4 lg:w-10/12 m-auto justify-center py-32">
        {works.map((value) => (
          <div className="border-primary border-opacity-25 py-10 border-b border-t flex w-full relative flex-col md:flex-row overflow-hidden">
            <div className="md:w-8/12">
              <Subtext size="lg:text-xl text-2xl ">{value.name}</Subtext>
              <Subtext size="font-PrimarySerif pt-4 pb-6">{value.type}</Subtext>
            </div>
            <div className="md:w-4/12 flex md:absolute -right-32">
              <Link href={value.link}>
                <IconAnimate
                  styleText="lg:text-sm sm:text-xs font-thin"
                  text="Aplicar"
                  mode
                />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
