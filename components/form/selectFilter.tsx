import { Select, CaretIcon, ModalCloseButton } from 'react-responsive-select';
import { BlockDiv } from '../calendar/input/styles';

type Props = {
  options: any;
  valueLabel: string;
  name: string;
  handleValue: any;
  onChange?: any;
  selected: any;
};

export default function InputSelectFilter({
  options,
  valueLabel,
  handleValue,
  onChange,
  selected,
  name,
}: Props) {
  return (
    <>
      <BlockDiv
        active={selected !== ''}
        className="relative text-left"
        key={selected}>
        <Select
          modalCloseButton={<ModalCloseButton />}
          name={name}
          options={options}
          selectedValue="any"
          caretIcon={<CaretIcon />}
          noSelectionLabel={valueLabel}
          onChange={(newValue: any) => {
            onChange(newValue.value);
            handleValue(newValue.value);
          }}
        />
      </BlockDiv>
    </>
  );
}
