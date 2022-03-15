import { useState } from 'react';
import BtnShare from '../../button/share';
import { BodyTrends, Container } from './style';

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
      <BodyTrends.Section>
        <BodyTrends.ButtonShare onClickCapture={() => toggle()}>
          <img src="/icon/share.svg" width={20} height={20} alt="share" />
        </BodyTrends.ButtonShare>
        <BodyTrends.AlingData>
          <Container>{data}</Container>
        </BodyTrends.AlingData>
      </BodyTrends.Section>
    </>
  );
}
