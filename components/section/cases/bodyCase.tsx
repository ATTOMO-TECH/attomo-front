import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ICONNAV } from '../../../const/constGlobal';

export default function BodyCases() {
  const [isOpen, SetIsOpen] = useState<boolean>(false);

  const Share = () => {
    navigator.share({
      title: 'Web Share API Draft',
      text: 'Take a look at this spec!',
      url: 'https://wicg.github.io/web-share/#share-method',
    });
  };

  const toggle = () => {
    SetIsOpen(!isOpen);
    if (isOpen === true) {
      Share();
    }
  };
  return (
    <>
      <button
        type="button"
        className={
          isOpen
            ? 'w-4/6 hidden lg:block h-auto delay-300 duration-300 ease-in-out opacity-100 fixed bottom-96 left-0 z-90'
            : 'w-0 overflow-hidden opacity-0 fixed -left-10'
        }
        onChange={() => toggle()}>
        <ul className="absolute w-auto z-90 top-6 bg-primary p-5 shadow-lg shadow-indigo-500/50 ">
          {ICONNAV.map((values) => (
            <Link href={`${values.UrlShare}`}>
              <li className="w-auto px-1 cursor-pointer hover:opacity-50 py-2">
                <a target="_blank" href={values.Url} rel="noreferrer">
                  <Image
                    src={values.Pic2}
                    width={25}
                    height={25}
                    alt={values.Name}
                    className="shadow-lg shadow-cyan-500/50"
                  />
                </a>
              </li>
            </Link>
          ))}
        </ul>
      </button>
      <div className="flex flex-wrap justify-between">
        <div className="w-1/12 cursor-pointer" onClickCapture={() => toggle()}>
          <Image src="/icon/share.svg" width={20} height={20} alt="share" />
        </div>
        <div className="w-11/12 " onChange={() => toggle()}>
          <p className="font-PrimarySerif leading-relaxed font-light text-sm pb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eu enim ut mauris ultricies egestas nec ultricies metus. Maecenas ut
            ultrices erat, ultricies varius ante. Quisque ornare porttitor
            justo, eu pellentesque dolor. Pellentesque vitae erat vel neque
            ornare dignissim. Praesent molestie cursus odio et porttitor.
            Phasellus odio nisi, varius eget elit eget, condimentum sodales
            eros. Nullam semper vulputate est, facilisis fermentum ligula porta
            ac. In suscipit metus quis euismod posuere. Nam sed metus a diam
            ultricies pharetra. Etiam porttitor id purus eu pretium. Mauris
            aliquet, neque vitae lacinia imperdiet, risus ipsum eleifend purus,
            vitae molestie nulla mauris at nulla. Proin a leo ante. Suspendisse
            condimentum velit turpis, non porttitor enim cursus sit amet.
            Suspendisse iaculis, nunc ac venenatis scelerisque, diam nisl
            hendrerit turpis, vitae fringilla risus leo sed leo. Maecenas mollis
            nisl eget purus finibus, ac pharetra urna imperdiet. Phasellus
            egestas tortor et ante ullamcorper sodales. Integer metus leo,
            tincidunt a elementum a, tincidunt semper mauris. condimentum purus.
          </p>
          <Image
            src="/cases/exampleDemo.png"
            width={800}
            height={300}
            alt="cases"
          />
          <p className="font-PrimarySerif leading-relaxed font-light text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            eu enim ut mauris ultricies egestas nec ultricies metus. Maecenas ut
            ultrices erat, ultricies varius ante. Quisque ornare porttitor
            justo, eu pellentesque dolor. Pellentesque vitae erat vel neque
            ornare dignissim. Praesent molestie cursus odio et porttitor.
            Phasellus odio nisi, varius eget elit eget, condimentum sodales
            eros. Nullam semper vulputate est, facilisis fermentum ligula porta
            ac. In suscipit metus quis euismod posuere. Nam sed metus a diam
            ultricies pharetra. Etiam porttitor id purus eu pretium. Mauris
            aliquet, neque vitae lacinia imperdiet, risus ipsum eleifend purus,
            vitae molestie nulla mauris at nulla. Proin a leo ante. Suspendisse
            condimentum velit turpis, non porttitor enim cursus sit amet.
            Suspendisse iaculis, nunc ac venenatis scelerisque, diam nisl
            hendrerit turpis, vitae fringilla risus leo sed leo. Maecenas mollis
            nisl eget purus finibus, ac pharetra urna imperdiet. Phasellus
            egestas tortor et ante ullamcorper sodales. Integer metus leo,
            tincidunt a elementum a, tincidunt semper mauris. condimentum purus.
          </p>
          <Image
            src="/cases/exampleDemo.png"
            width={800}
            height={300}
            alt="cases"
          />
          <p className="font-PrimarySerif leading-relaxed font-light text-sm">
            Curabitur tincidunt sem vulputate, posuere magna eu, vulputate leo.
            Vivamus ac semper leo. Vivamus sit amet nisi massa. Duis iaculis
            mauris et convallis porta. Proin maximus lorem ac tempor imperdiet.
            Quisque et tortor sapien. Pellentesque id convallis augue. Morbi
            pulvinar velit nec erat pellentesque, non elementum nisi maximus.
            Sed ut aliquam neque. Suspendisse nec auctor nulla. Mauris lacinia
            dignissim ornare. In sit amet pellentesque nisi, sed convallis
            neque. Integer lectus leo, fringilla in egestas ut, pellentesque et
            ex. Etiam accumsan odio nec lectus rhoncus vulputate. Suspendisse id
            pellentesque magna, ac vulputate tortor. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Donec tempor, tortor sit amet
            hendrerit porta, purus est commodo augue, ac dapibus eros sapien
            placerat arcu. Vestibulum lobortis tincidunt elit id dapibus.
            Aliquam egestas quam id facilisis maximus. Aliquam sodales ac neque
            at bibendum. Suspendisse id vulputate mi. Curabitur rhoncus felis
            euismod, luctus est non, dignissim mi. Proin vel magna non magna
            fermentum placerat. Donec dictum posuere est at luctus. In in odio
            ut ex faucibus condimentum. Ut justo elit, lobortis eu sapien vitae,
            ornare maximus nunc. Mauris interdum lacus et risus ultrices
            faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer a finibus ante, et maximus nibh. Aliquam congue tortor
            vehicula, accumsan est quis, sagittis orci. Etiam metus odio,
            blandit sit amet lacus vel, mollis suscipit augue. Mauris tincidunt
            elit ut libero eleifend feugiat. Nunc sit amet dolor quam. Integer
            faucibus velit sed hendrerit hendrerit. Cras hendrerit magna et
            posuere hendrerit. Mauris eleifend convallis risus, ac consectetur
            nunc ullamcorper non. Maecenas venenatis sollicitudin dolor, id
            semper eros iaculis a.
          </p>
        </div>
      </div>
    </>
  );
}
