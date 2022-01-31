import Image from 'next/image';

import Link from 'next/link';
import { Blogstyles } from './style';
import { BLOG } from '../../const/constGlobal';
import Title from '../Text/title';

export default function BlockBlog() {
  return (
    <>
      {BLOG.map((values) => (
        <Blogstyles.Article>
          <Blogstyles.BlockImg>
            <Image
              src={values.Pic}
              width={900}
              height={700}
              alt={values.SubText}
            />
          </Blogstyles.BlockImg>
          <Blogstyles.BlockText>
            <Blogstyles.Text>{values.Topic}</Blogstyles.Text>
            <Title size="text-4xl leading-relaxed">{values.Text}</Title>
            <Blogstyles.SubText>{values.SubText}</Blogstyles.SubText>
            <Link href={`/ATTOMOTrends/${values.Tag}`}>
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
