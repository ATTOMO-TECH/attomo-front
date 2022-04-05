import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import useDeviceSize from '../../hook/size';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string | any;
}
export default function Filter({ toggle, date, endDate, topic }: Props) {
  const [scroll, setScroll] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 20) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    });
  }, []);
  const [width] = useDeviceSize();
  const translate = getLocale();
  return (
    <>
      {(scroll && width < 768) || scroll ? (
        <Styles.BlockFilter onClick={toggle}>
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
