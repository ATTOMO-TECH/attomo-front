// eslint-disable-next-line no-use-before-define
import { useState } from 'react';
import { motion } from 'framer-motion';
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
          <motion.div variants={variants} initial="hidden" animate="show">
            {data.data[idx].attributes.subservices.data.map((tab: any) => (
              <Link
                href={`/servicios/${tab.attributes.name
                  .replaceAll(' ', '_')
                  .toLowerCase()}`}
                key={`${tab.attributes.name}-services`}>
                <Styles.SubSection>
                  <motion.p
                    variants={item}
                    className="font-light font-Secundary">
                    {tab.attributes.name}
                  </motion.p>
                </Styles.SubSection>
              </Link>
            ))}
          </motion.div>
        </Styles.BlockDescription>
        <Styles.BlockImg>
          <Styles.SectionAtom ismode={idx}>
            <Styles.CircleBg>
              <img
                src="/icon/Ellipse.svg"
                width={500}
                height={500}
                alt="Elipse"
                className="opacity-0 overflow-hidden z-0 relative"
              />
            </Styles.CircleBg>
          </Styles.SectionAtom>
          <Styles.Circle>
            <Styles.BlockTextCenter>
              <Styles.TextCentral>{innerRenderText(idx)}</Styles.TextCentral>
            </Styles.BlockTextCenter>
          </Styles.Circle>
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
