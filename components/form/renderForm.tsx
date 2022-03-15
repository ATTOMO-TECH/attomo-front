import { useState } from 'react';
import { Styles } from './style';
import { getLocale } from '../../public/locales/getLocale';

export default function RenderForm() {
  const [iDx, setidx] = useState(0);
  const handleClick = (idx: number) => {
    setidx(idx);
  };
  const translate = getLocale();
  const innerRender = (idx: number) =>
    translate.buttonsRenderForm[idx].Component;

  return (
    <>
      <div className="flex lg:justify-center justify-between">
        {translate.buttonsRenderForm.map((button: any, i) => (
          <Styles.BtnSelect
            key={button.Name}
            active={i === iDx}
            onClick={() => handleClick(i)}>
            {button.Name}
          </Styles.BtnSelect>
        ))}
      </div>
      <section className="my-12">{innerRender(iDx)}</section>
    </>
  );
}
