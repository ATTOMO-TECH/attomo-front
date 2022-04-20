/* eslint-disable no-console */
import { useState } from 'react';
import { format } from 'date-fns';
import BreadCrumbs from '../../breadcrumbs/breadcrumbs';
import useDeviceSize from '../../../hook/size';
import ShareNav from '../../button/share';
import { BodyTrends, Container } from './style';

interface Props {
  data: any;
}
export default function BodyCases({ data }: Props) {
  const [width] = useDeviceSize();
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  const handleOnClick = () => {
    toggle();
    if (navigator.share) {
      navigator
        .share({
          title: `#ATTOMOtrends | ${data?.data.attributes.title}`,
          url: document.location.href,
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {width > 468 ? (
        <ShareNav
          title={data?.data.attributes.title}
          isOpen={isOpen}
          toggle={toggle}
        />
      ) : (
        <></>
      )}
      <BodyTrends.Section>
        <BodyTrends.BlockShare>
          <BodyTrends.ButtonShare onClick={handleOnClick}>
            <img src="/icon/share.svg" width={20} height={20} alt="share" />
          </BodyTrends.ButtonShare>
          <BreadCrumbs
            Author={data?.data.attributes.author}
            Date={format(
              new Date(data?.data.attributes.publishedAt),
              'dd-MM-yyyy',
            )}
          />
        </BodyTrends.BlockShare>
        <BodyTrends.AlingData>
          <Container>{data.data.attributes.content}</Container>
        </BodyTrends.AlingData>
      </BodyTrends.Section>
    </>
  );
}
