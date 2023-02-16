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
      href={
        tags !== undefined
          ? {
              pathname: `${url}`,
              query: {
                tags,
              },
            }
          : {
              pathname: `${url}`,
            }
      }
      passHref>
      <a {...handlers(`${url}`)}>
        <Text.TextTitle className={size}>{children}</Text.TextTitle>
      </a>
    </Link>
  );
}
