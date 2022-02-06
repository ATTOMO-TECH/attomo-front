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
        {data}
        <div className="w-11/12 ">
          {/* <ReactMarkdown
            children={data}
            className={'font-PrimarySerif leading-relaxed font-light text-sm'}
            components={{
              p: ({ node, children }) => {
                if (node.children[0].type === '\n\n!') {
                  const image: any = node.children[0];
                  return (
                    <Image
                      src={`/api${image.properties.src}`}
                      alt={image.properties.alt}
                      width={700}
                      height={400}
                      layout="responsive"
                    />
                  );
                }

                return <>{children}</>;
              },
            }}
          /> */}
        </div>
      </div>
    </>
  );
}
