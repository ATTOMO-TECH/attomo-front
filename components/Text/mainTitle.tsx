import { Text } from './style';

interface Props {
  children: any;
  size: string;
}

export default function MainTitle({ children, size }: Props) {
  return (
    <>
      <Text.TextMainTitle className={size}>{children}</Text.TextMainTitle>
    </>
  );
}
