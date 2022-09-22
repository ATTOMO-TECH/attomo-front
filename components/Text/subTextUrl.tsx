import Link from 'next/link';
import { Text } from './style';

interface Props {
  children: any;
  url: string;
  size: string;
}

export default function SubtextUrl({ children, size, url }: Props) {
  return (
    <Link href={`${url}`} passHref>
      <Text.SubTextTitle className={size}>{children}</Text.SubTextTitle>
    </Link>
  );
}
