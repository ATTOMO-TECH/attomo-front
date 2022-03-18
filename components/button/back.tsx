import Link from 'next/link';
import { Button } from './style';

interface Props {
  children: string;
  link: string;
}

export default function Back({ children, link }: Props) {
  return (
    <>
      <Link href={link}>
        <Button.SectionBack>
          <Button.BlockBack>
            <img src="/icon/arrowBack.svg" width={30} height={20} alt="back" />
            <Button.TextBack>{children}</Button.TextBack>
          </Button.BlockBack>
        </Button.SectionBack>
      </Link>
    </>
  );
}
