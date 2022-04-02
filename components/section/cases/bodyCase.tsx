/* eslint-disable no-console */
import { useState } from 'react';
import ShareNav from '../../button/share';

import { BodyTrends, Container } from './style';

interface Props {
  data: any;
  title: string;
}
export default function BodyCases({ data, title }: Props) {
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const handleOnClick = () => {
    toggle();
    if (navigator.share) {
      navigator
        .share({
          title: `#ATTOMOtrends | ${title}`,
          url: document.location.href,
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <ShareNav valueUrl="undefined" isOpen={isOpen} toggle={toggle} />
      <BodyTrends.Section>
        <BodyTrends.ButtonShare onClick={handleOnClick}>
          <img src="/icon/share.svg" width={20} height={20} alt="share" />
        </BodyTrends.ButtonShare>

        <BodyTrends.AlingData>
          <Container>{data}</Container>
        </BodyTrends.AlingData>
      </BodyTrends.Section>
    </>
  );
}
