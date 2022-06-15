import { useSwipeable } from 'react-swipeable';
import { handleClickTouch, handleFocus } from './eventListener';

export const handlers = (param: string) =>
  useSwipeable({
    onTap: () => handleClickTouch(param),
  });

export const handlersFuntion = (onTouch: any) =>
  useSwipeable({
    onTap: onTouch,
  });

export const handlersFuntionFocus = (id: any) =>
  useSwipeable({
    onTap: () => handleFocus(id),
  });

export const handlersFuntionRef = (onTouch: any, ref: any) =>
  useSwipeable({
    onTap: () => onTouch(ref),
  });
