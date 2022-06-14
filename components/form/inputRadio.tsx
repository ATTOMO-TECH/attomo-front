import { Styles } from './style';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  text: string;
  value: string;
  onChange?: any;
  valueChecked: string;
}

export default function InputRadio({
  text,
  value,
  onChange,
  valueChecked,
}: Props) {
  return (
    <>
      <Styles.LabelCheck
        htmlFor="partner"
        {...handlersFuntion(() => onChange(value))}
        onClick={() => onChange(value)}
        checked={valueChecked === value}
        checkedValue={valueChecked === value}>
        <Styles.InputRadio
          onChange={() => onChange(value)}
          type="radio"
          name="partner"
          value={value}
          checked={valueChecked === value}
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
