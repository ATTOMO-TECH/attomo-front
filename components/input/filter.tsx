import { format } from 'date-fns';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getLocale } from '../../public/locales/getLocale';
import { Styles } from './styles';

interface Props {
  toggle: () => void;
  date: string;
  endDate: string;
  topic: string | any;
  scroll: boolean;
  width: number;
  change: boolean;
  handleChangeReset: () => void;
}
export default function Filter({
  toggle,
  date,
  endDate,
  topic,
  scroll,
  width,
  change,
  handleChangeReset,
}: Props) {
  const router = useRouter();
  const [translate, setTranslate] = useState(getLocale('es'));
  useEffect(() => {
    if (router.locale) {
      setTranslate(getLocale(router.locale));
    }
  }, [router.locale]);

  return (
    <>
      {(scroll && width < 768) || scroll ? (
        <>
          <Styles.BlockFilter>
            <Styles.FlexFilter onClick={toggle} onTouchStart={toggle}>
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
            <motion.svg
              className="cursor-pointer absolute sm:-right-52 -right-64 -top-3   z-100 "
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transition={{ duration: 1, ease: 'easeInOut' }}
              onClick={handleChangeReset}
              onTouchStart={handleChangeReset}>
              <motion.path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth={change ? '2' : 0}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={
                  change
                    ? { pathLength: 1, type: 'tween' }
                    : { pathLength: 0, type: 'spring' }
                }
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
              <motion.path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth={change ? '2' : 0}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={
                  change
                    ? { pathLength: 1, type: 'tween' }
                    : { pathLength: 0, type: 'spring' }
                }
                transition={{ duration: 1, ease: 'easeInOut' }}
              />
            </motion.svg>
          </Styles.BlockFilter>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
