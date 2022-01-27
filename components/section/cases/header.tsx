import Image from 'next/image';
import { StylesCases } from '../style';

interface Props {
  category: string;
  title: string;
  paragraph: string;
}

export default function HeaderCases({ category, title, paragraph }: Props) {
  return (
    <>
      <StylesCases.CategoryText>{category}</StylesCases.CategoryText>
      <StylesCases.TitularText>{title}</StylesCases.TitularText>
      <StylesCases.Paragraph>{paragraph}</StylesCases.Paragraph>
      <Image src="/cases/demoCases.jpg" width={600} height={300} sizes="20vw" />
    </>
  );
}
