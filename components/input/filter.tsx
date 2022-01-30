import { Styles } from './styles';

const OptionsSelect: {
  Option: string;
}[] = [
  {
    Option: 'Estrategia1',
  },
  {
    Option: 'Estrategia2',
  },
  {
    Option: 'Estrategia3',
  },
];

export default function Filter() {
  return (
    <>
      <Styles.BlockFilter>
        <Styles.TextFilter>Filtrar por</Styles.TextFilter>
        <Styles.Select name="select">
          {OptionsSelect.map((options) => (
            <option value={options.Option} key={options.Option}>
              {options.Option}
            </option>
          ))}
        </Styles.Select>
      </Styles.BlockFilter>
    </>
  );
}
