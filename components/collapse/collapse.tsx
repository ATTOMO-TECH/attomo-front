import Image from 'next/image';
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
      <div className="overflow-hidden max-w-100 flex flex-col-reverse justify-center items-center text-primary m-auto lg:relative mb-24 font-Primary font-light">
        <div className="lg:text-right text-xl lg:absolute bottom-12 w-full text-center">
          {innerRender(idx).map((tab) => (
            <Styles.SubSection>{tab} </Styles.SubSection>
          ))}
        </div>
        <div className="relative p-1">
          <Styles.SectionAtom ismode={idx}>
            <div className="absolute">
              <Styles.Atom />

              <Styles.Image
                ismode={idx}
                src="/icon/semiElipse.svg"
                width={500}
                height={500}
                alt="Elipse"
              />
            </div>
            <Image
              src="/icon/Ellipse.svg"
              width={500}
              height={500}
              alt="Elipse"
            />
          </Styles.SectionAtom>

          <div className="absolute lg:top-52 top-32 right-28 lg:right-32 16 w-3/6 text-center text-xl">
            <p>{innerRenderText(idx)}</p>
          </div>
        </div>
        <div className="w-auto">
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
        </div>
      </div>
    </>
  );
}
