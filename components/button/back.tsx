import Link from 'next/link';
import Image from 'next/image';
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
            <Image src="/icon/arrowBack.svg" width={30} height={20} />
            <Button.TextBack>{children}</Button.TextBack>
          </Button.BlockBack>
        </Button.SectionBack>
      </Link>
    </>
  );
}
