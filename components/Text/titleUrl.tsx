import Link from 'next/link';
import { handlers } from '../../hook/longPress';
import { Text } from './style';

interface Props {
  children: any;
  url: string;
  size: string;
}

export default function TitleUrl({ children, url, size }: Props) {
  return (
    <Link href={`${url}`} passHref>
      <a {...handlers(`${url}`)}>
        <Text.TextTitle className={size}>{children}</Text.TextTitle>
      </a>
    </Link>
  );
}
