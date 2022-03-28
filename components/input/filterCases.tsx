import { format } from 'date-fns';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  topic: string | any;
  search: string;
  endDate: any;
  statDate: any;
}
export default function FilterCases({
  toggle,
  endDate,
  statDate,
  topic,
  search,
}: Props) {
  return (
    <>
      <Styles.BlockFilterAling onClick={toggle}>
        <Styles.FlexFilter>
          <Styles.TexItem className="w-3/12 ">Filtado por</Styles.TexItem>
          <Styles.TexItem className="w-3/12">
            {topic === '' ? 'Estrategia' : topic.label}
          </Styles.TexItem>
          <Styles.TexItem className="w-3/12">
            {endDate?.length === undefined ? (
              <div>Selecciona fecha</div>
            ) : (
              <>
                <div>{format(new Date(endDate), 'dd-MM-yyyy')}</div>
                <div>{format(new Date(statDate), 'dd-MM-yyyy')}</div>
              </>
            )}
          </Styles.TexItem>
          <Styles.TexItem className="w-3/12">{search}</Styles.TexItem>
        </Styles.FlexFilter>
      </Styles.BlockFilterAling>
    </>
  );
}
