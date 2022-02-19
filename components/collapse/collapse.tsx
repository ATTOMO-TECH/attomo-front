import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BUTTON_ACTIVE } from '../../const/const';
import { SERVICES } from '../../const/constGlobal';
import { Styles } from './style';

export default function Collapse() {
  const [idx, setIdx] = useState(0);
  const handleClick = (iDx: number) => {
    setIdx(iDx);
  };

  const innerRender = (iDx: number) => SERVICES[iDx].Services;
  const innerRenderText = (iDx: number) => SERVICES[iDx].Description;

  return (
    <>
      <Styles.SectionCollapse>
        <Styles.BlockDescription>
          {innerRender(idx).map((tab) => (
            <Styles.SubSection>{tab} </Styles.SubSection>
          ))}
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
              />
            </Styles.BlockAtom>
            <Image
              src="/icon/Ellipse.svg"
              width={500}
              height={500}
              alt="Elipse"
            />
          </Styles.SectionAtom>
          <Styles.TextCentral>
            <p>{innerRenderText(idx)}</p>
          </Styles.TextCentral>
        </Styles.BlockImg>
        <Styles.BlockSectionTitle>
          <Styles.BlockTextSelect>
            {SERVICES.map((tab, i) => (
              <Link href={`/servicios/${tab.Title}`}>
                <Styles.TextSelect
                  ismode={i === idx ? BUTTON_ACTIVE.ON : BUTTON_ACTIVE.OFF}
                  key={tab.Title}
                  onClick={() => handleClick(i)}>
                  {tab.Title}
                </Styles.TextSelect>
              </Link>
            ))}
          </Styles.BlockTextSelect>
        </Styles.BlockSectionTitle>
      </Styles.SectionCollapse>
    </>
  );
}
