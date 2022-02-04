import Image from 'next/image';
import { useState } from 'react';
// import ReactMarkdown from 'react-markdown';
import BtnShare from '../../button/share';

interface Props {
  data: any;
}
export default function BodyCases({ data }: Props) {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <>
      <BtnShare valueUrl="undefined" isOpen={isOpen} toggle={toggle} />
      <div className="flex flex-wrap justify-between">
        <div
          className="w-1/12 cursor-pointer h-12"
          onClickCapture={() => toggle()}>
          <Image src="/icon/share.svg" width={20} height={20} alt="share" />
        </div>

        <div className="w-11/12 ">
          {data}
          {/* <ReactMarkdown
            children={data}
            className="font-PrimarySerif leading-relaxed font-light text-sm"
            components={{
              p: ({ node, children }) => {
                if (node.children[0]) {
                  const image: any = node.children[0];
                  return (
                    <div className="image">
                      <Image
                        src={`/api${image.properties.src}`}
                        alt={image.properties.alt}
                        width={800}
                        height={300}
                      />
                    </div>
                  );
                }

                return <>{children}</>
              },
            }}
          /> */}
          ,
        </div>
      </div>
    </>
  );
}
