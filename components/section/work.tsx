import Link from 'next/link';

import ParagraphText from '../Text/paragraphText';
import IconAnimate from '../button/icon';

import { handlersExternal } from '../../hook/longPress';

interface Props {
  works: any[];
  apply: string;
}

export default function Work({ works, apply }: Props) {
  return (
    <>
      {works.map((value) => (
        <section
          className="flex lg:w-10/12 m-auto justify-center "
          key={value.attributes.title}>
          <div className="border-primary border-opacity-25 py-10 border-b border-t flex items-center justify-between w-full relative flex-col md:flex-row overflow-hidden">
            <div className="md:w-10/12">
              <div className=" w-4/6 lg:w-2/6">
                <Link href={`https://${value.attributes.url}`} passHref>
                  <a
                    href={`https://${value.attributes.url}`}
                    target="_blank"
                    rel="noreferrer"
                    {...handlersExternal(`https://${value.attributes.url}`)}>
                    <ParagraphText size="lg:text-xl text-2xl ">
                      {value.attributes.title}
                    </ParagraphText>
                  </a>
                </Link>
              </div>
              <ParagraphText size=" pt-4 pb-6 lg:mr-4 text-justify">
                {value.attributes.description}
              </ParagraphText>
            </div>

            <div className="ml-0 lg:ml-4 m-auto lg:w-1/6 sm:w-2/6 w-3/6">
              <Link href={`https://${value.attributes.url}`} passHref>
                <a
                  href={`https://${value.attributes.url}`}
                  target="_blank"
                  className="w-auto"
                  rel="noreferrer"
                  {...handlersExternal(`https://${value.attributes.url}`)}>
                  <IconAnimate text={apply} mode />
                </a>
              </Link>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
