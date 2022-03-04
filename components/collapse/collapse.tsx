// eslint-disable-next-line no-use-before-define
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BUTTON_ACTIVE } from '../../const/const';
import { useUseAllServices } from '../../domain/useServices';
import RenderLoading from '../loading/loading';
import { Styles } from './style';

export default function Collapse() {
  const router = useRouter();
  let { locale } = router;
  if (locale === '/') {
    locale = 'es';
  }
  const { data, isLoading } = useUseAllServices(locale || 'es');

  const [idx, setIdx] = useState(0);
  const handleClick = (iDx: number) => {
    setIdx(iDx);
  };
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
  if (isLoading) {
    return (
      <>
        <RenderLoading mode={false} />
      </>
    );
  }

  const innerRenderText = (iDx: number) =>
    data.data[iDx].attributes.description;

  return (
    <>
      <Styles.SectionCollapse>
        <Styles.BlockDescription>
          <motion.div
            className="children"
            variants={variants}
            initial="hidden"
            animate="show">
            {data.data[idx].attributes.subservices.data.map((tab: any) => (
              <Link
                href={`/servicios/${encodeURIComponent(tab.attributes.name)}`}
                key={`${tab.attributes.name}-services`}>
                <Styles.SubSection>
                  <motion.div variants={item}>{tab.attributes.name}</motion.div>
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
          <Styles.BlockTextCenter>
            <Styles.TextCentral>
              <p>{innerRenderText(idx)}</p>
            </Styles.TextCentral>
          </Styles.BlockTextCenter>
          <Styles.Circle />
        </Styles.BlockImg>
        <Styles.BlockSectionTitle>
          <Styles.BlockTextSelect>
            {data.data.map((tab: any, i: number) => (
              <Styles.TextSelect
                ismode={i === idx ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                key={tab.attributes.name}
                onClick={() => handleClick(i)}>
                {tab.attributes.name}
              </Styles.TextSelect>
            ))}
          </Styles.BlockTextSelect>
        </Styles.BlockSectionTitle>
      </Styles.SectionCollapse>
    </>
  );
}
