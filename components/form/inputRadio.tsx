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
        checkedValue={valueChecked === value}>
        <Styles.InputRadio
          type="radio"
          readOnly
          name="partner"
          value={value}
          checked={valueChecked === value}
          onTouchEnd={(e: any) => onChange(e.target.value)}
          onChange={(e: any) => onChange(e.target.value)}
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
