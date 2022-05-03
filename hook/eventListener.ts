import { useEffect } from 'react';

export const useEventListener = (
  getElement: string,
  event: string,
  listener: EventListenerOrEventListenerObject,
): void => {
  useEffect(() => {
    const myAbsolutelyNotNullElement =
      window.document.getElementById(getElement)!;

    myAbsolutelyNotNullElement.addEventListener(event, listener, {
      passive: false,
    });

    return () => {
      myAbsolutelyNotNullElement.removeEventListener(event, listener);
    };
  }, [getElement, event, listener]);
};
