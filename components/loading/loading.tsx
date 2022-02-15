import { darkTheme, lightTheme } from '../../styles/styles';
import { Loading } from './style';

interface Props {
  mode: boolean;
}

export default function RenderLoading({ mode }: Props) {
  return (
    <>
      <Loading.Block theme={mode === false ? lightTheme : darkTheme}>
        <Loading.BlockStyle theme={!mode === false ? lightTheme : darkTheme} />
      </Loading.Block>
    </>
  );
}
