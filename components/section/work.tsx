import Link from 'next/link';
import { useState } from 'react';
import Subtext from '../Text/subText';
import IconAnimate from '../button/icon';
import Title from '../Text/title';
import { handleClickTouch } from '../../hook/eventListener';
import useLongPressHook from '../../hook/longPress';

interface Props {
  works: any[];
}

export default function Work({ works }: Props) {
  const [linkWork, setLinkWork] = useState('');
  const [bindLink] = useLongPressHook('', () => handleClickTouch(linkWork));

  return (
    <>
      {works.map((value) => (
        <section
          onTouchStart={() => setLinkWork(`https://${value.attributes.url}`)}
          className="flex lg:w-10/12 m-auto justify-center "
          key={value.attributes.title}>
          <div className="border-primary border-opacity-25 py-10 border-b border-t flex items-center justify-between w-full relative flex-col md:flex-row overflow-hidden">
            <div className="md:w-10/12">
              <div className=" w-3/6 lg:w-2/6">
                <Link href={`https://${value.attributes.url}`} passHref>
                  <a
                    href={`https://${value.attributes.url}`}
                    target="_blank"
                    rel="noreferrer"
                    {...bindLink()}>
                    <Title size="lg:text-xl text-2xl ">
                      {value.attributes.title}
                    </Title>
                  </a>
                </Link>
              </div>
              <Subtext size=" pt-4 pb-6 lg:mr-4 text-justify">
                {value.attributes.description}
              </Subtext>
            </div>

            <div className="w-4/12 md:w-1/6 ml-4 m-auto ">
              <Link href={`https://${value.attributes.url}`} passHref>
                <a
                  href={`https://${value.attributes.url}`}
                  target="_blank"
                  className=""
                  rel="noreferrer"
                  {...bindLink()}>
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
