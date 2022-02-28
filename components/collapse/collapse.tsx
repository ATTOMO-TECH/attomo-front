import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import { SERVICES } from '../../const/constGlobal';
import { Styles } from './style';

export default function Collapse() {
  // const { data, isLoading } = useUseAllCases(locale || 'es');
  const [idx, setIdx] = useState(0);
  const handleClick = (iDx: number) => {
    setIdx(iDx);
  };

  const innerRender = (iDx: number) => SERVICES[iDx].Services;
  const innerRenderText = (iDx: number) => SERVICES[iDx].Description;
  const variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        straggerchildren: 1,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
      y: '20%',
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Styles.SectionCollapse>
        <Styles.BlockDescription>
          <motion.div
            className="children"
            variants={variants}
            initial="hidden"
            animate="show">
            {innerRender(idx).map((tab) => (
              <Link href={`/servicios/${tab}`}>
                <Styles.SubSection key={`${tab}-services`}>
                  <motion.div variants={item}>{tab}</motion.div>
                </Styles.SubSection>
              </Link>
            ))}
          </motion.div>
        </Styles.BlockDescription>
        <Styles.BlockImg>
          <Styles.SectionAtom ismode={idx}>
            <Styles.BlockAtom>
              <Styles.Atom />
              <Styles.Image
                ismode={idx}
                src="/icon/semiElipse.svg"
                width={500}
                height={500}
                alt="Elipse"
                className="z-0 object-contain overflow-hidden opacity-0  "
              />
            </Styles.BlockAtom>
            <Image
              src="/icon/Ellipse.svg"
              width={500}
              height={500}
              alt="Elipse"
              className="opacity-0 overflow-hidden object-contain"
            />
          </Styles.SectionAtom>
          <div className="border-4 border-white w-4/6 h-4/6 absolute lg:top-20 lg:right-20 right-16 top-16 rounded-full flex justify-center items-center animate-pulse md:">
            <Styles.TextCentral>
              <p>{innerRenderText(idx)}</p>
            </Styles.TextCentral>
          </div>
          <Styles.Circle />
        </Styles.BlockImg>
        <Styles.BlockSectionTitle>
          <Styles.BlockTextSelect>
            {SERVICES.map((tab, i) => (
              <Styles.TextSelect
                ismode={i === idx ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                key={tab.Title}
                onClick={() => handleClick(i)}>
                {tab.Title}
              </Styles.TextSelect>
            ))}
          </Styles.BlockTextSelect>
        </Styles.BlockSectionTitle>
      </Styles.SectionCollapse>
    </>
  );
}
