import { Styles } from './style';
import { handlersFuntion } from '../../hook/longPress';

interface Props {
  text: string;
  value: string;
  onChange?: any;
  valueChecked: string;
  id: string;
}

export default function InputRadio({
  text,
  value,
  onChange,
  valueChecked,
  id,
}: Props) {
  const iOSDevice = !!navigator.userAgent.match(/iPhone|iPod|iPad/);
  const handleChange = () => {
    onChange(value);
  };

  return (
    <>
      <Styles.LabelCheck
        htmlFor="partner"
        {...handlersFuntion(handleChange)}
        onClick={() => {
          if (!iOSDevice) {
            onChange(value);
          }
        }}
        checked={valueChecked === value}
        checkedValue={valueChecked === value}>
        <Styles.InputRadio
          readOnly
          type="radio"
          name="partner"
          id={id}
          value={value}
          checked={valueChecked === value}
        />
        {text}
      </Styles.LabelCheck>
    </>
  );
}
