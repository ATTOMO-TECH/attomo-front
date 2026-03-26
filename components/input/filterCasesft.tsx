import { format } from 'date-fns';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  topic: string | any;
  search: string;
  endDate: any;
  startDate: any;
}
export default function FilterCasesft({
  toggle,
  endDate,
  startDate,
  topic,
  search,
}: Props) {
  return (
    <>
      <Styles.BlockFilterAling onClick={toggle}>
        <Styles.FlexFilter>
          <Styles.TexItem className="w-3/12 ">Filtado por</Styles.TexItem>
          <Styles.TexItem className="w-3/12">
            {topic === '' ? 'Estrategia' : topic}
          </Styles.TexItem>
          <Styles.TexItem className="w-3/12">
            {startDate === undefined || endDate === undefined ? (
              <Styles.ValueDate>Selecciona fecha</Styles.ValueDate>
            ) : (
              <>
                <Styles.ValueDate>
                  {format(new Date(startDate), 'dd-MM-yyyy')}
                </Styles.ValueDate>
                <Styles.LineValue> - </Styles.LineValue>
                <Styles.ValueDate>
                  {format(new Date(endDate), 'dd-MM-yyyy')}
                </Styles.ValueDate>
              </>
            )}
          </Styles.TexItem>
          <Styles.TexItem className="w-3/12">{search}</Styles.TexItem>
        </Styles.FlexFilter>
      </Styles.BlockFilterAling>
    </>
  );
}
