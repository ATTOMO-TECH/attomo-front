import { Text } from './style';

interface Props {
  children: any;
  size: string;
}

export default function ParagraphText({ children, size }: Props) {
  return (
    <>
      <Text.ParagraphTitle className={size}>{children}</Text.ParagraphTitle>
    </>
  );
}
