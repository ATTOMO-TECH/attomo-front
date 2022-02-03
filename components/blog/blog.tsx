import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Blogstyles } from './style';
import Title from '../Text/title';

interface Props {
  dataBlog: any;
}

export default function BlockBlog({ dataBlog }: Props) {
  const [isData] = useState(dataBlog);

  return (
    <>
      {isData.map((data: any) => (
        <Blogstyles.Article>
          <Blogstyles.BlockImg>
            <Image src="/" width={900} height={700} alt="values.SubText" />
          </Blogstyles.BlockImg>
          <Blogstyles.BlockText>
            <Blogstyles.Text>{data.attributes.title}</Blogstyles.Text>
            <Title size="text-4xl leading-relaxed">
              {data.attributes.title}
            </Title>
            <Blogstyles.SubText />
            <Link href={`/ATTOMOTrends/${data.id}`}>
              <div>
                <Blogstyles.Btn>Leer</Blogstyles.Btn>
              </div>
            </Link>
          </Blogstyles.BlockText>
        </Blogstyles.Article>
      ))}
      <Blogstyles.SectionMore>
        <Blogstyles.BlockMore>Ver más noticias</Blogstyles.BlockMore>
      </Blogstyles.SectionMore>
    </>
  );
}
