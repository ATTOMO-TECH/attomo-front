import { useState } from 'react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Styles } from '../../styles/styles';
import Subtext from '../Text/subText';
import { servicesAnimations } from '../animations/animations';
import { BUTTON_ACTIVE } from '../../const/const';

interface Props {
  toggleFilter: () => void;
  translate: any;
  search: any;
  topic: any;
  startDate: any;
  endDate: any;
  handleChangeReset: () => void;
}

export default function BlockFilter({
  toggleFilter,
  translate,
  search,
  topic,
  startDate,
  endDate,
  handleChangeReset,
}: Props) {
  const [shouldShowActions] = useState(false);

  const change: boolean = !!startDate || !!endDate || !!topic || !!search;

  return (
    <>
      <motion.div
        animate={shouldShowActions}
        variants={servicesAnimations}
        className="actions cursor-pointer -pb-36 lg:-mb-6 lg:pt-12"
        transition={{
          delay: 0.2,
          type: 'spring',
          stiffness: 50,
          duration: 2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: '50%' }}>
        <Styles.SelectFilterCases>
          <Styles.SectionFilter>
            <Subtext size="text-lg lg:py-4 ">{translate.CasesFilter}</Subtext>
          </Styles.SectionFilter>
          <Styles.SelectFilter
            type="button"
            onClick={toggleFilter}
            onTouchStart={toggleFilter}>
            <Styles.FilterSelectActive
              mode={
                search === '' || search === undefined
                  ? BUTTON_ACTIVE.ON
                  : BUTTON_ACTIVE.OFF
              }>
              {search === '' || search === undefined ? (
                <p>{translate.Services}</p>
              ) : (
                <p>{search}</p>
              )}
            </Styles.FilterSelectActive>
          </Styles.SelectFilter>
          <Styles.SelectFilter
            type="button"
            onClick={toggleFilter}
            onTouchStart={toggleFilter}>
            <Styles.FilterSelectActive
              mode={
                topic === '' || topic === undefined
                  ? BUTTON_ACTIVE.ON
                  : BUTTON_ACTIVE.OFF
              }>
              {topic === '' || topic === undefined ? (
                <option value="">{translate.Topic}</option>
              ) : (
                <option value="">{topic}</option>
              )}
            </Styles.FilterSelectActive>
          </Styles.SelectFilter>
          <Styles.SelectFilter
            type="button"
            onClick={toggleFilter}
            onTouchStart={toggleFilter}>
            <Styles.FilterSelectActive
              mode={
                startDate === undefined || startDate === null
                  ? BUTTON_ACTIVE.ON
                  : BUTTON_ACTIVE.OFF
              }>
              {startDate === '' ||
              undefined ||
              null ||
              endDate === '' ||
              undefined ||
              null ? (
                <option value="">{translate.SelectDate}</option>
              ) : (
                <option value="">{`${
                  startDate
                    ? format(startDate, 'dd-MM-yyyy')
                    : `${translate.SelectDate}`
                } 
                    ${
                      endDate ? format(endDate, '-  dd-MM-yyyy') : ''
                    }`}</option>
              )}
            </Styles.FilterSelectActive>
          </Styles.SelectFilter>

          <motion.svg
            className="cursor-pointer w-1/6 lg:w-auto"
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
              stroke-width={change ? '2' : 0}
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
              stroke-width={change ? '2' : 0}
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
        </Styles.SelectFilterCases>
      </motion.div>
    </>
  );
}
