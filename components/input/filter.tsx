import { format } from 'date-fns';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string | any;
  scroll: boolean;
  width: number;
}
export default function Filter({
  toggle,
  date,
  endDate,
  topic,
  scroll,
  width,
}: Props) {
  const translate = getLocale();
  return (
    <>
      {(scroll && width < 768) || scroll ? (
        <Styles.BlockFilter onClick={toggle} onTouchStart={toggle}>
          <Styles.FlexFilter>
            <Styles.TextFilter>{translate.CasesFilter}</Styles.TextFilter>
            <Styles.FirtsItem>
              {topic === '' || topic === undefined ? 'Estrategia' : topic}
            </Styles.FirtsItem>
            <Styles.DateItem>
              {date === undefined || date === null ? (
                <Styles.ValueDate>{translate.SelectDate}</Styles.ValueDate>
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
      ) : (
        <></>
      )}
    </>
  );
}
