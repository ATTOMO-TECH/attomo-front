import Image from 'next/image';

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
            <Blogstyles.Btn>Leer</Blogstyles.Btn>
          </Blogstyles.BlockText>
        </Blogstyles.Article>
      ))}
    </>
  );
}
