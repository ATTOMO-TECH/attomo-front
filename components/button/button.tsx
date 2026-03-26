import { Button } from './style';

interface Props {
  children: string;
}

export default function Btn({ children }: Props) {
  return (
    <>
      <Button.ButtonRegular ismode="">{children}</Button.ButtonRegular>
    </>
  );
}
