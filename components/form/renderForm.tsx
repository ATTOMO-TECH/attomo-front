import { useState } from 'react';
import { Styles } from './style';
import { TABCONTACT } from '../../const/constGlobal';

export default function RenderForm() {
  const [iDx, setidx] = useState(0);
  const handleClick = (idx: number) => {
    setidx(idx);
  };
  const innerRender = (idx: number) => TABCONTACT[idx].Component;
  return (
    <>
      <div className="flex justify-center">
        {TABCONTACT.map((tab, i) => (
          <Styles.BtnSelect
            key={tab.Name}
            active={i === iDx}
            onClick={() => handleClick(i)}>
            {tab.Name}
          </Styles.BtnSelect>
        ))}
      </div>
      <section className="my-24">{innerRender(iDx)}</section>
    </>
  );
}
