import { format } from 'date-fns';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  date: Date[] | undefined;
  topic: string | any;
  search: string;
}
export default function FilterCases({ toggle, date, topic, search }: Props) {
  return (
    <>
      <Styles.BlockFilterAling onClick={toggle}>
        <Styles.FlexFilter>
          <Styles.TexItem className="w-3/12 ">Filtado por</Styles.TexItem>
          <Styles.TexItem className="w-3/12">
            {topic === '' ? 'Estrategia' : topic.label}
          </Styles.TexItem>
          <Styles.TexItem className="w-3/12">
            {date?.length === undefined ? (
              <div>Selecciona fecha</div>
            ) : (
              date?.map((dateValue: any) => (
                <div>{format(new Date(dateValue), 'dd-MM-yyyy')}</div>
              ))
            )}
          </Styles.TexItem>
          <Styles.TexItem className="w-3/12">{search}</Styles.TexItem>
        </Styles.FlexFilter>
      </Styles.BlockFilterAling>
    </>
  );
}
