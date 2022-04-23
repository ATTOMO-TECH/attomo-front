import Link from 'next/link';
import Subtext from '../Text/subText';
import IconAnimate from '../button/icon';
import Title from '../Text/title';

interface Props {
  works: any[];
}

export default function Work({ works }: Props) {
  return (
    <>
      {works.map((value) => (
        <section className="flex lg:w-10/12 m-auto justify-center ">
          <div className="border-primary border-opacity-25 py-10 border-b border-t flex items-center justify-between w-full relative flex-col md:flex-row overflow-hidden">
            <div className="md:w-10/12">
              <div className=" w-3/6 lg:w-2/6">
                <Link href={`https://${value.attributes.url}`} passHref>
                  <a
                    href={`https://${value.attributes.url}`}
                    target="_blank"
                    rel="noreferrer">
                    <Title size="lg:text-xl text-2xl ">
                      {value.attributes.title}
                    </Title>
                  </a>
                </Link>
              </div>
              <Subtext size=" pt-4 pb-6">
                {value.attributes.description}
              </Subtext>
            </div>

            <div className="w-3/6 md:w-2/12 mr-auto md:m-auto">
              <Link href={`https://${value.attributes.url}`} passHref>
                <a
                  href={`https://${value.attributes.url}`}
                  target="_blank"
                  className=""
                  rel="noreferrer">
                  <IconAnimate text="Aplicar" mode />
                </a>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
