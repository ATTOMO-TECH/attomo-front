import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { handleClickTouch, handleFocus } from './eventListener';

export const handlers = (param: string) =>
  useSwipeable({
    onTap: () => handleClickTouch(param),
  });

export const handlersFuntion = (onTouch: any) =>
  useSwipeable({
    onTap: () => onTouch(),
  });

export const handlersFuntionFocus = (id: any) =>
  useSwipeable({
    onTap: () => handleFocus(id),
  });

const useLongPressHook = (value?: string, onClick?: any) => {
  const [state] = useState<string>(value || '');

  const callback = () => {
    if (value !== '') {
      handleClickTouch(state);
    } else {
      onClick();
    }
  };

  const bind = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},

    threshold: 300,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  const bindQuick = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 100,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });
  const bindQuickScreen = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 50,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });
  const bindInput = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 0,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });
  const bindLink = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 100,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });
  const bindLogo = useLongPress(() => callback(), {
    // eslint-disable-next-line
    onFinish: () => {},
    threshold: 0,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });
  return [bind, bindQuick, bindQuickScreen, bindInput, bindLink, bindLogo];
};
export default useLongPressHook;
