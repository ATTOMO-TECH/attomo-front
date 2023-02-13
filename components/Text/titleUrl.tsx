import Link from 'next/link';
import { handlers } from '../../hook/longPress';
import { Text } from './style';

interface Props {
  children: any;
  url: string;
  size: string;
  tags?: string;
}

export default function TitleUrl({ children, url, size, tags }: Props) {
  return (
    <Link
      href={{
        pathname: `${url}`,
        query: {
          tags,
        },
      }}
      passHref>
      <a {...handlers(`${url}`)}>
        <Text.TextTitle className={size}>{children}</Text.TextTitle>
      </a>
    </Link>
  );
}
