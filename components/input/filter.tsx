import { format } from 'date-fns';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string | any;
}
export default function Filter({ toggle, date, endDate, topic }: Props) {
  return (
    <>
      <Styles.BlockFilter onClick={toggle}>
        <Styles.FlexFilter>
          <Styles.TextFilter>Filtrar por</Styles.TextFilter>
          <Styles.FirtsItem>
            {topic === '' ? 'Estrategia' : topic}
          </Styles.FirtsItem>
          <Styles.DateItem>
            {date?.length === undefined ? (
              <Styles.ValueDate>Selecciona fecha</Styles.ValueDate>
            ) : (
              <>
                <Styles.ValueDate>
                  {format(new Date(date), 'dd-MM-yyyy')}
                </Styles.ValueDate>
                <Styles.ValueDate>
                  {format(new Date(endDate), 'dd-MM-yyyy')}
                </Styles.ValueDate>
              </>
            )}
          </Styles.DateItem>
        </Styles.FlexFilter>
      </Styles.BlockFilter>
    </>
  );
}
