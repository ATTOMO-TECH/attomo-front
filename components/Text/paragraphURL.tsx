import Link from 'next/link';
import { Text } from './style';

interface Props {
  children: any;
  url: string;
  size: string;
  tags?: string;
}

export default function ParagraphURL({ children, size, url, tags }: Props) {
  return (
    <Link
      href={{
        pathname: `${url}`,
        query: {
          tags,
        },
      }}
      passHref>
      <Text.ParagraphTitle className={size}>{children}</Text.ParagraphTitle>
    </Link>
  );
}
