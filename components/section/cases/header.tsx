import Image from 'next/image';
import BreadCrumbs from '../../breadcrumbs/breadcrumbs';
import { StylesCases } from '../style';

interface Props {
  category: string;
  title: string;
  paragraph: string;
  image: string;
}

export default function HeaderCases({
  category,
  title,
  paragraph,
  image,
}: Props) {
  return (
    <>
      <StylesCases.CategoryText>{category}</StylesCases.CategoryText>
      <StylesCases.TitularText>{title}</StylesCases.TitularText>
      <StylesCases.Paragraph>{paragraph}</StylesCases.Paragraph>
      <Image
        src={image || '/'}
        width={950}
        height={500}
        alt={title}
        objectFit="cover"
      />
      <BreadCrumbs Author="Autor" Date="Fecha" />
    </>
  );
}
