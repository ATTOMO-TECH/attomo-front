import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  handleClickTouch,
  handleFocus,
  handleExternalTouch,
} from './eventListener';

export const handlers = (param: string) =>
  useSwipeable({
    onTap: () => handleClickTouch(param),
  });

export const handlersExternal = (param: string) =>
  useSwipeable({
    onTap: () => handleExternalTouch(param),
  });

export const handlersFuntion = (onTouch: any) =>
  useSwipeable({
    onTap: onTouch,
  });

export const handlersFuntionFocus = (id: any) =>
  useSwipeable({
    onTap: () => handleFocus(id),
  });

export const useOnClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener, { capture: true });
    document.addEventListener('touchend', listener, { capture: true });
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [ref, handler]);
};
