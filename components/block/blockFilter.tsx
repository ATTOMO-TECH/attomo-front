import { handlersFuntion } from '../../hook/longPress';
import { Styles } from '../../styles/styles';
import MainTitle from '../Text/mainTitle';

interface Props {
  toggleFilter: any;
  text: string;
}

export default function BlockFilter({ toggleFilter, text }: Props) {
  return (
    <>
      {text !== 'Servicios' && (
        <Styles.BlockFilter
          onClick={() => toggleFilter()}
          {...handlersFuntion(() => toggleFilter())}>
          <MainTitle size="mt-5 text-lg">{text}</MainTitle>
        </Styles.BlockFilter>
      )}
    </>
  );
}
