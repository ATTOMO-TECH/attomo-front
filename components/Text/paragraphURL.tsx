import Link from 'next/link';
import { Text } from './style';
import { handlers } from '../../hook/longPress';

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
      <a {...handlers(`${url}`)} rel="noreferrer">
        <Text.ParagraphTitle className={size}>{children}</Text.ParagraphTitle>
      </a>
    </Link>
  );
}
