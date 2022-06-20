import { BUTTON_ACTIVE } from '../../const/const';
import { Styles } from './style';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  i: number;
  tab: any;
  handleClick: (iDx: number) => void;
  idx: number;
}
export default function TitleCollapse({ i, tab, idx, handleClick }: Props) {
  return (
    <>
      <Styles.TextSelect
        ismode={i === idx ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        key={tab.attributes.name}
        id={`clickCollapse-${i}`}
        onClick={() => handleClick(i)}
        {...handlersFuntion(() => handleClick(i))}>
        {tab.attributes.name}
      </Styles.TextSelect>
    </>
  );
}
