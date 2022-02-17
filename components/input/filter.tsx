import { Styles } from './styles';

interface Props {
  toggle: () => void;
}
export default function Filter({ toggle }: Props) {
  return (
    <>
      <Styles.BlockFilter onClick={toggle}>
        <Styles.TextFilter>Filtrar por</Styles.TextFilter>
        <div className="block">
          <input
            type="text"
            name="value"
            id=""
            placeholder="Estrategia"
            disabled
            className="bg-black text-primary outline-none text-sm absolute -right-36"
          />
          <input
            type="date"
            name="date"
            id=""
            placeholder="Estrategia"
            disabled
            className="bg-black text-primary outline-none text-sm absolute -right-56"
          />
        </div>
      </Styles.BlockFilter>
    </>
  );
}
