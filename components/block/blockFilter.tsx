import { handlersFuntion } from '../../hook/longPress';
import { Styles } from '../../styles/styles';
import Title from '../Text/title';

interface Props {
  toggleFilter: any;
  text: string;
}

export default function BlockFilter({ toggleFilter, text }: Props) {
  return (
    <>
      <Styles.BlockFilter
        onClick={() => toggleFilter()}
        {...handlersFuntion(() => toggleFilter())}>
        <Title size="mt-5 text-lg">{text}</Title>
      </Styles.BlockFilter>
    </>
  );
}
