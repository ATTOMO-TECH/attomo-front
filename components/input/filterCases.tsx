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
          <span>Filtado por</span>
          <div>{topic === '' ? 'Estrategia' : topic.label}</div>
          <div>
            {date?.length === undefined ? (
              <div>Selecciona fecha</div>
            ) : (
              date?.map((dateValue: any) => (
                <div>{format(new Date(dateValue), 'dd-MM-yyyy')}</div>
              ))
            )}
          </div>
          <span>{search}</span>
        </Styles.FlexFilter>
      </Styles.BlockFilterAling>
    </>
  );
}
