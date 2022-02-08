import { useState } from 'react';
import Select from 'react-select';

type Props = {
  options: any[];
  valueLabel: string;
};

export default function InputSelect({ options, valueLabel }: Props) {
  const customStyles = (value: string) => ({
    placeholder: (base: any) => ({
      ...base,
      color: 'white',
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? 'black' : 'white',
      padding: 10,
      backgroundColor: state.isSelected ? 'white' : 'black',
      border: 0,
      boxShadow: 0,
      outline: 0,
    }),
    control: (base: any, state: any) => ({
      ...base,
      boxShadow: 'none',
      background: 'none',
      border: 0,
      borderRadius: '0%',
      color: 'white',

      '&': {
        borderBottom: state.isFocused ? '1px solid white' : '1px solid #6F6D70',
      },
      ':hover': {
        borderBottom: '1px solid white',
      },
      ':focus': {
        background: 'none',
        color: 'white',
      },
    }),
    menu: (base: any) => ({
      ...base,
      border: 'none',
      boxShadow: 'none',
      background: 'none',
      color: 'white',
    }),
    dropdownIndicator: (base: any, state: any) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.isFocused ? 'rotate(180deg)' : null,
      color: 'white',
    }),
    singleValue: (base: any, state: any) => ({
      ...base,
      color: state.isFocused ? 'white' : 'gray',
    }),
    value,
  });

  const [selected, setSelected] = useState('');
  const onChange = (e: any) => {
    setSelected(e.value);
  };

  const displayItem = (Selected: any) => {
    const item = options.find((x) => x.value === Selected);
    return item || { value: '', label: `${valueLabel}` };
  };

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        options={options}
        styles={customStyles(selected)}
        onChange={onChange}
        value={displayItem(selected)}
        className="w-full  text-gray-300 lg:py-1 py-4 lg:px-3 font-PrimarySerif font-thin"
        placeholder="30M"
        defaultValue={{ value: '30M', label: '30 min' }}
      />
    </>
  );
}
