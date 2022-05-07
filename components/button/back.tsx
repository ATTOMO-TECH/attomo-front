import { useRouter } from 'next/dist/client/router';
import { Button } from './style';

interface Props {
  children: string;
}

export default function Back({ children }: Props) {
  const router = useRouter();
  return (
    <>
      <Button.SectionBack
        onClick={() => router.back()}
        onTouchEnd={() => router.back()}>
        <Button.BlockBack>
          <img src="/icon/arrowBack.svg" width={30} height={20} alt="back" />
          <Button.TextBack>{children}</Button.TextBack>
        </Button.BlockBack>
      </Button.SectionBack>
    </>
  );
}
