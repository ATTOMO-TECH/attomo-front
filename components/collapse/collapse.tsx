import { useState } from 'react';
import { motion } from 'framer-motion';
import { Styles } from './style';
import TitleCollapse from './titleCollapse';
import LinkCollapse from './linksCollapse';
import { Props } from '../../screens/types';

export default function Collapse({ data }: Props) {
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

  const innerRenderText = (iDx: number) => data[iDx].attributes.description;

  return (
    <>
      <Styles.SectionCollapse>
        <Styles.BlockImg>
          <Styles.BlockDescription>
            <motion.div
              variants={variants}
              initial="hidden"
              animate="show"
              className="w-auto">
              {data[idx].attributes.subservices.data.map((tab: any) => (
                <LinkCollapse
                  tab={tab}
                  item={item}
                  key={`${tab.attributes.name}-services`}
                />
              ))}
            </motion.div>
          </Styles.BlockDescription>
          <Styles.SectionAtom ismode={idx}>
            <Styles.CircleBg />
          </Styles.SectionAtom>
          <Styles.Circle>
            <Styles.BlockTextCenter>
              <Styles.TextCentral>{innerRenderText(idx)}</Styles.TextCentral>
            </Styles.BlockTextCenter>
          </Styles.Circle>
        </Styles.BlockImg>
        <Styles.BlockSectionTitle>
          <Styles.BlockTextSelect>
            {data.map((tab: any, i: number) => (
              <TitleCollapse
                i={i}
                tab={tab}
                key={tab.attributes.name}
                handleClick={handleClick}
                idx={idx}
              />
            ))}
          </Styles.BlockTextSelect>
        </Styles.BlockSectionTitle>
      </Styles.SectionCollapse>
    </>
  );
}
