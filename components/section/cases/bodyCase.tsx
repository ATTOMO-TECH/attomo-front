/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { format } from 'date-fns';
import BreadCrumbs from '../../breadcrumbs/breadcrumbs';
import ShareNav from '../../button/share';
import { BodyTrends, Container } from './style';

interface Props {
  data: any;
}
export default function BodyCases({ data }: Props) {
  const [isShareApiAvailable, setIsShareApiAvailable] = useState(false);
  const [isOpen, SetIsOpen] = useState<boolean>(false);
  const toggle = () => {
    SetIsOpen(!isOpen);
  };
  useEffect(() => {
    setIsShareApiAvailable(!!navigator.share);
  }, []);

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
      {!isShareApiAvailable ? (
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
          <BodyTrends.ButtonShare onClick={() => handleOnClick()}>
            <img src="/icon/share.svg" width={20} height={20} alt="share" />
          </BodyTrends.ButtonShare>
          <BreadCrumbs
            Author={data?.data.attributes.author}
            Date={
              data?.data.attributes.publishedAt &&
              format(new Date(data?.data.attributes.publishedAt), 'dd-MM-yyyy')
            }
          />
        </BodyTrends.BlockShare>
        <BodyTrends.AlingData>
          <Container remarkPlugins={[gfm]} rehypePlugins={[rehypeRaw]}>
            {data?.data?.attributes?.content}
          </Container>
        </BodyTrends.AlingData>
      </BodyTrends.Section>
    </>
  );
}
