import { useState } from 'react';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { handleClickTouch } from './eventListener';

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
    threshold: 500,
    captureEvent: true,
    cancelOnMovement: true,
    detect: LongPressDetectEvents.BOTH,
  });

  return [bind];
};
export default useLongPressHook;
