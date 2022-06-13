import { useSwipeable } from 'react-swipeable';
import { useRef, useState } from 'react';
import { useLongPress, LongPressDetectEvents } from 'use-long-press';
import { handleClickTouch } from './eventListener';

export const useTap = (value?: string, onClick?: any) => {
  const [state] = useState<string>(value || '');
  if (value !== '') {
    handleClickTouch(state);
  } else {
    onClick();
  }
  const handlers = useSwipeable({
    onTap: () => handleClickTouch(state),
  });
  const handlers2 = useSwipeable({
    onTap: () => handleClickTouch(state),
  });
  const handlers3 = useSwipeable({
    onTap: () => handleClickTouch(state),
  });
  const handlers4 = useSwipeable({
    onTap: () => handleClickTouch(state),
  });
  return [handlers, handlers2, handlers3, handlers4];
};

const useLongPressHook = (value?: string, onClick?: any) => {
  const [state] = useState<string>(value || '');
  const isSwiping = useRef<boolean>(false);

  const callback = () => {
    if (value !== '') {
      handleClickTouch(state);
    } else {
      onClick();
    }
  };

  const bind = useLongPress(!isSwiping.current ? () => callback() : null, {
    onMove: () => {
      isSwiping.current = true;
    },

    // eslint-disable-next-line
    onFinish: () => {
      isSwiping.current = false;
    },

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
  const bindLink = useLongPress(!isSwiping.current ? () => callback() : null, {
    // eslint-disable-next-line
    onMove: () => {
      isSwiping.current = true;
    },

    onFinish: () => {
      isSwiping.current = false;
    },
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
