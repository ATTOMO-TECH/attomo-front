import { darkTheme, lightTheme } from '../../styles/styles';
import { Loading, BlockDiv } from './style';

interface Props {
  mode: boolean;
}

export default function RenderLoading({ mode }: Props) {
  return (
    <>
      <Loading.Block theme={mode === false ? lightTheme : darkTheme}>
        <BlockDiv theme={!mode === false ? lightTheme : darkTheme} />
      </Loading.Block>
    </>
  );
}
