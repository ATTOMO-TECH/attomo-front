import { Styles } from './style';

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
        onClick={() => onChange(value)}
        onTouchStart={() => onChange(value)}
        checked={valueChecked === value}
        checkedValue={valueChecked === value}>
        <Styles.InputRadio
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
