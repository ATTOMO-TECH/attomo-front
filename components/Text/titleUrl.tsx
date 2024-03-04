import Link from 'next/link';
import { Text } from './style';
import { handlers } from '../../hook/longPress';

interface Props {
  children: any;
  url: string;
  size: string;
}

export default function TitleUrl({ children, url, size }: Props) {
  return (
    <Link
      href={
        url
        // tags !== undefined
        //   ? {
        //       pathname: `${url}`,
        //       query: {
        //         tags,
        //       },
        //     }
        //   : {
        //       pathname: `${url}`,
        //     }
      }
      passHref>
      <a {...handlers(`${url}`)} rel="noreferrer">
        <Text.TextTitle className={size}>{children}</Text.TextTitle>
      </a>
    </Link>
  );
}
