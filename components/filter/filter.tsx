import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { BUTTON_ACTIVE } from '../../const/const';
import { Filter } from './style';
import SelectFilter from './selectedFilter';
import RenderLoading from '../loading/loading';
import { useUseAllSubServices } from '../../domain/useServices';
import { DEPARTMENT } from '../../const/constGlobal';
import ModulelFilter from './moduleFilter';
import useDeviceSize from '../../hook/size';
import Subtext from '../Text/subText';
import Title from '../Text/title';
// import { useEffect, useState } from 'react';
// import { useUseAllSubServices } from '../../domain/useServices';
// import RenderLoading from '../loading/loading';

interface Props {
  isOpenFilter: boolean;
  toggle: () => void;
  setDate: any;
  setTopic: any;
  setSearch: any;
}

export default function ModalFilter({
  isOpenFilter,
  toggle,
  setDate,
  setTopic,
  setSearch,
}: Props) {
  const router = useRouter();
  const [width] = useDeviceSize();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { isLoading } = useUseAllSubServices(locale || 'es');
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }
  return (
    <>
      <Filter.SectionFilter
        ismode={isOpenFilter ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
        animate={{
          x: isOpenFilter ? 0 : '-100%',
        }}
        transition={{
          delay: 0,
          duration: 0.8,
          ease: 'easeInOut',
          stiffness: 50,
        }}>
        <div
          className={
            width < 768
              ? 'w-full justify-center overflow-y-auto'
              : 'h-4/6 justify-center flex items-center'
          }>
          <Filter.AlinItems ismode={BUTTON_ACTIVE.OFF}>
            <Filter.ItemsMenu>
              <Link href="/">
                <img
                  src="/icon/isoAttomo.svg"
                  width={30}
                  height={30}
                  alt="Attomo"
                />
              </Link>
            </Filter.ItemsMenu>
            <Filter.ItemsMenu onClick={toggle}>
              <motion.svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transition={{ duration: 1, ease: 'easeInOut' }}>
                <motion.path
                  d="M18 6L6 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpenFilter
                      ? { pathLength: 1, type: 'tween' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M6 6L18 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={
                    isOpenFilter
                      ? { pathLength: 1, type: 'tween' }
                      : { pathLength: 0, type: 'spring' }
                  }
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </motion.svg>
            </Filter.ItemsMenu>
          </Filter.AlinItems>
          <Filter.BlockFilterItems>
            {width < 768 ? (
              <Filter.SectionMobile>
                <Title size="text-md text-left pb-0 ">Filtrar por</Title>
                <Filter.BlockItemMobile>
                  <Subtext size=" text-xs font-Primary text-left font-light">
                    {' '}
                    Servicios
                  </Subtext>
                  <SelectFilter
                    selected="selected"
                    options={DEPARTMENT}
                    valueLabel="Todos los servicios"
                    name="FORMVALUES.TIME"
                    onChange="onChange"
                  />
                </Filter.BlockItemMobile>
                <Filter.BlockItemMed>
                  <Subtext size=" text-xs font-Primary text-left font-light">
                    {' '}
                    Temática
                  </Subtext>
                  <SelectFilter
                    selected="selected"
                    options={DEPARTMENT}
                    valueLabel="Todas las temáticas"
                    name=""
                    onChange="onChange"
                  />
                </Filter.BlockItemMed>
                <Filter.BlockItemMobile>
                  <Subtext size=" text-xs font-Primary text-left font-light">
                    Fecha
                  </Subtext>
                  {/* <SelectFilter
                    selected="selected"
                    options={DATE}
                    valueLabel="Fecha específica"
                    name=""
                    onChange={'onChange'}
                  /> */}
                </Filter.BlockItemMobile>
              </Filter.SectionMobile>
            ) : (
              <ModulelFilter
                setDate={setDate}
                setTopic={setTopic}
                setSearch={setSearch}
              />
            )}
          </Filter.BlockFilterItems>
        </div>
        <Filter.BlockSendButton>
          <Filter.BtnSend type="submit" onClick={toggle}>
            Buscar
          </Filter.BtnSend>
        </Filter.BlockSendButton>
      </Filter.SectionFilter>
    </>
  );
}
