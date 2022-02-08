import Image from 'next/image';
import { useState } from 'react';
import BtnShare from '../../button/share';
import { Container } from './style';

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
          <Container>{data}</Container>
        </div>
      </div>
    </>
  );
}
