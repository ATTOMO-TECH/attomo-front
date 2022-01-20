import { Text } from './style';

interface Props {
  children: string;
  size: string;
}

export default function Subtext({ children, size }: Props) {
  return (
    <>
      <Text.TextTitle className={size}>{children}</Text.TextTitle>
    </>
  );
}
