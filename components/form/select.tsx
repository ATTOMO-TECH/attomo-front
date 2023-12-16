import { CaretIcon, ModalCloseButton } from 'react-responsive-select';
import { BlockDiv } from '../calendar/input/styles';
import { Styles } from './style';

type Props = {
  options: any;
  valueLabel: string;
  name: string;
  handleValue: any;
  onChange?: any;
  selected: any;
  translate?: any;
};

export default function InputSelect({
  options,
  valueLabel,
  handleValue,
  onChange,
  selected,
  name,
  translate,
}: Props) {
  console.log(valueLabel);

  return (
    <BlockDiv active={selected !== ''} className="relative text-left">
      <Styles.SelectTime
        name={name}
        modalCloseButton={<ModalCloseButton />}
        options={options}
        selectedValue={translate?.formTime}
        caretIcon={<CaretIcon />}
        valueLabel={selected}
        noSelectionLabel={selected}
        onChange={(newValue: any) => {
          onChange(newValue.value);
          handleValue(newValue.value);
        }}
      />
    </BlockDiv>
  );
}
