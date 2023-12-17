import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { Button } from './style';
import { VALUESNAV_ENG, VALUESNAV_ESP } from '../../const/constGlobal';

interface Props {
  children: string;
}

export default function Back({ children }: Props) {
  const router = useRouter();
  return (
    <>
      <Button.SectionBack
        onClick={() =>
          router.locale === 'es'
            ? router.push(`${VALUESNAV_ESP[3].Url}`)
            : router.push(`${VALUESNAV_ENG[3].Url}`)
        }
        onTouchEnd={() =>
          router.locale === 'es'
            ? router.push(`${VALUESNAV_ESP[3].Url}`)
            : router.push(`${VALUESNAV_ENG[3].Url}`)
        }>
        <Button.BlockBack>
          <Image src="/icon/arrowBack.svg" width={30} height={20} alt="back" />
          <Button.TextBack>{children}</Button.TextBack>
        </Button.BlockBack>
      </Button.SectionBack>
    </>
  );
}
