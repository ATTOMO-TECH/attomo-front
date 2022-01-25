import { Text } from './style';

interface Props {
  children: string;
  size: string;
}

export default function Subtext({ children, size }: Props) {
  return (
    <>
      <Text.SubTextTitle className={size}>{children}</Text.SubTextTitle>
    </>
  );
}
