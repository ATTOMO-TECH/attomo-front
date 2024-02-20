import Link from 'next/link';
import { Text } from './style';

interface Props {
  children: any;
  url: string;
  size: string;
}

export default function ParagraphURL({ children, size, url }: Props) {
  return (
    <Link
      href={
        url
        // pathname: `${url}`,
        // query: {
        //   tags,
        // },
      }>
      <Text.ParagraphTitle className={size}>{children}</Text.ParagraphTitle>
    </Link>
  );
}
