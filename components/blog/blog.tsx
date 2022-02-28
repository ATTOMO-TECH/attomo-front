import Image from 'next/image';
import Link from 'next/link';
import { Blogstyles } from './style';
import Title from '../Text/title';
import IconAnimate from '../button/icon';

interface Props {
  dataBlog: any;
}

export default function BlockBlog({ dataBlog }: Props) {
  return (
    <>
      {dataBlog.map((data: any) => (
        <Blogstyles.Article>
          <Blogstyles.BlockImg>
            {data.attributes?.coverImage?.data?.attributes?.url ? (
              <Image
                src={data.attributes.coverImage.data.attributes?.url}
                width={900}
                height={700}
                alt={data.attributes.name}
              />
            ) : (
              ''
            )}
          </Blogstyles.BlockImg>
          <Blogstyles.BlockText>
            <Title size="text-sm leading-relaxed font-PrimarySerif ">
              {data.attributes.title}
            </Title>
            <Title size="text-4xl leading-relaxed">
              {data.attributes.title}
            </Title>
            <Title size="text-sm leading-relaxed font-PrimarySerif">
              {data.attributes.title}
            </Title>
            <Blogstyles.SubText />
            <Link href={`/ATTOMOTrends/${data.id}`}>
              <div>
                <IconAnimate text="Leer" mode />
              </div>
            </Link>
          </Blogstyles.BlockText>
        </Blogstyles.Article>
      ))}
    </>
  );
}
