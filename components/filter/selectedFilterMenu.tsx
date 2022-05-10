import Select from 'react-select';

type Props = {
  options: any[];
  valueLabel: string;
  name: string;
  onChange?: any;
  selected: any;
};

export default function SelectFilterMenu({
  options,
  valueLabel,
  name,
  onChange,
  selected,
}: Props) {
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

  const displayItem = (Selected: any) => {
    const item = options.find((x) => x.name === Selected);
    return item || { value: `${valueLabel}`, label: `${valueLabel}` };
  };

  return (
    <>
      <Select
        components={{ IndicatorSeparator: () => null }}
        name={name}
        isSearchable={false}
        options={options}
        autoFocus
        blurInputOnSelect
        styles={customStyles(selected)}
        onChange={onChange}
        value={displayItem(selected)}
        className="outline-none font-PrimarySerif font-thin text-gray-300 h-full w-full py-2  text-sm bg-none text-left"
        placeholder="Selecciona una opción"
        defaultValue={{ value: '30M', label: '30 min' }}
      />
    </>
  );
}
