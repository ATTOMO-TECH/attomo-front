import { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: '30M', label: '30 min' },
  { value: '1', label: '1 Hora' },
  { value: '2', label: '2 Horas' },
  { value: '4', label: '4 Hora' },
  { value: '8', label: '8 Horas' },
];

const customStyles = (value: string) => ({
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    color: '#ffffff',
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'white',
    padding: 10,
    backgroundColor: state.isSelected ? 'white' : 'black',
    border: 0,
    boxShadow: 0,
    outline: 0,
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    boxShadow: 'none',
    backgroundColor: 'black',
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
      backgroundColor: 'black',
      color: 'white',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'black',
    color: 'white',
  }),
  dropdownIndicator: (base: any, state: any) => ({
    ...base,
    transition: 'all .2s ease',
    transform: state.isFocused ? 'rotate(180deg)' : null,
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'white',
  }),
  value,
});

export default function InputSelect() {
  const [selected, setSelected] = useState('');
  const onChange = (e: any) => {
    setSelected(e.value);
  };

  const displayItem = (Selected: any) => {
    const item = options.find((x) => x.value === Selected);
    return item || { value: '', label: '' };
  };

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        options={options}
        styles={customStyles(selected)}
        onChange={onChange}
        value={displayItem(selected)}
        className="w-full bg-none  py-0.5 px-3 text-center font-PrimarySerif font-thin"
        placeholder="HOLA"
      />
    </>
  );
}
