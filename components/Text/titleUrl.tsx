import Link from 'next/link';
import { Text } from './style';

interface Props {
  children: any;
  url: string;
  size: string;
}

export default function TitleUrl({ children, url, size }: Props) {
  return (
    <Link href={`${url}`} passHref>
      <Text.TextTitle className={size}>{children}</Text.TextTitle>
    </Link>
  );
}
