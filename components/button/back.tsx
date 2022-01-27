import Link from 'next/link';
import Image from 'next/image';
import { Button } from './style';

interface Props {
  children: string;
}

export default function Back({ children }: Props) {
  return (
    <>
      <Button.SectionBack>
        <Link href="../">
          <Button.BlockBack>
            <Image src="/icon/arrowBack.svg" width={30} height={20} />
            <Button.TextBack>{children}</Button.TextBack>
          </Button.BlockBack>
        </Link>
      </Button.SectionBack>
    </>
  );
}
