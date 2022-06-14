import { useState } from 'react';
import { handlersFuntion } from '../../hook/longPress';
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
      <Styles.BlockButton>
        {translate.buttonsRenderForm.map((button: any, i) => (
          <Styles.BtnSelect
            key={`FormRender-${button.Name}`}
            active={i === iDx}
            {...handlersFuntion(() => handleClick(i))}
            onClick={() => handleClick(i)}>
            {button.Name}
          </Styles.BtnSelect>
        ))}
      </Styles.BlockButton>
      <Styles.SectionRenderForm key={iDx}>
        {innerRender(iDx)}
      </Styles.SectionRenderForm>
    </>
  );
}
